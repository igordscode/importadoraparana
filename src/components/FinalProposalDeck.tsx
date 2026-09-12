import { useCallback, useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Download,
  Home,
  LoaderCircle,
  Maximize2,
  Minimize2,
  RotateCcw,
} from 'lucide-react';

const FILE_NAME = 'IDS_x_IPARANA_FLEXCO_PROPOSTA_FINAL_v2.pdf';
const PDF_URL = '/proposta-final.pdf';

export function FinalProposalDeck() {
  const shellRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pdfRef = useRef<any>(null);
  const renderSeqRef = useRef(0);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(25);
  const [fullscreen, setFullscreen] = useState(false);
  const [ready, setReady] = useState(false);
  const [rendering, setRendering] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const goTo = useCallback(
    (nextPage: number) => {
      setPage(Math.max(1, Math.min(totalPages, nextPage)));
    },
    [totalPages],
  );

  const previous = useCallback(() => goTo(page - 1), [goTo, page]);
  const next = useCallback(() => goTo(page + 1), [goTo, page]);

  useEffect(() => {
    let cancelled = false;

    async function loadPdf() {
      try {
        setError(null);
        const pdfjs = await import(/* @vite-ignore */ 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.mjs');
        pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.worker.min.mjs';
        const task = pdfjs.getDocument(PDF_URL);
        const pdf = await task.promise;

        if (cancelled) {
          await pdf.destroy();
          return;
        }

        pdfRef.current = pdf;
        setTotalPages(pdf.numPages);
        setReady(true);
      } catch (caught) {
        if (!cancelled) {
          setError(caught instanceof Error ? caught.message : 'Não foi possível abrir a proposta.');
        }
      }
    }

    loadPdf();

    return () => {
      cancelled = true;
      pdfRef.current?.destroy();
      pdfRef.current = null;
    };
  }, []);

  const renderPage = useCallback(async () => {
    const pdf = pdfRef.current;
    const stage = stageRef.current;
    const visibleCanvas = canvasRef.current;

    if (!pdf || !stage || !visibleCanvas) return;

    const seq = ++renderSeqRef.current;

    try {
      setRendering(true);

      const pdfPage = await pdf.getPage(page);
      const baseViewport = pdfPage.getViewport({ scale: 1 });
      const availableWidth = Math.max(stage.clientWidth, 1);
      const availableHeight = Math.max(stage.clientHeight, 1);
      const cssScale = Math.min(
        availableWidth / baseViewport.width,
        availableHeight / baseViewport.height,
      );

      const cssWidth = Math.floor(baseViewport.width * cssScale);
      const cssHeight = Math.floor(baseViewport.height * cssScale);
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      const renderViewport = pdfPage.getViewport({ scale: cssScale * pixelRatio });

      const buffer = document.createElement('canvas');
      buffer.width = Math.max(1, Math.floor(renderViewport.width));
      buffer.height = Math.max(1, Math.floor(renderViewport.height));

      const bufferContext = buffer.getContext('2d', { alpha: false });
      if (!bufferContext) throw new Error('Canvas indisponível neste navegador.');

      bufferContext.fillStyle = '#050608';
      bufferContext.fillRect(0, 0, buffer.width, buffer.height);

      await pdfPage.render({
        canvasContext: bufferContext,
        viewport: renderViewport,
      }).promise;

      if (seq !== renderSeqRef.current) return;

      visibleCanvas.width = buffer.width;
      visibleCanvas.height = buffer.height;
      visibleCanvas.style.width = `${cssWidth}px`;
      visibleCanvas.style.height = `${cssHeight}px`;

      const visibleContext = visibleCanvas.getContext('2d', { alpha: false });
      if (!visibleContext) throw new Error('Canvas indisponível neste navegador.');

      visibleContext.drawImage(buffer, 0, 0);
    } catch (caught) {
      if (seq === renderSeqRef.current) {
        setError(caught instanceof Error ? caught.message : 'Falha ao renderizar a página.');
      }
    } finally {
      if (seq === renderSeqRef.current) setRendering(false);
    }
  }, [page]);

  useEffect(() => {
    if (!ready) return;

    let frame = requestAnimationFrame(() => {
      void renderPage();
    });

    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        void renderPage();
      });
    });

    if (stageRef.current) observer.observe(stageRef.current);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [ready, renderPage]);

  useEffect(() => {
    if (!ready) return;

    const preload = async () => {
      const pdf = pdfRef.current;
      if (!pdf) return;

      const targets = [page - 1, page + 1].filter(
        (target) => target >= 1 && target <= pdf.numPages,
      );

      await Promise.all(
        targets.map(async (target) => {
          try {
            await pdf.getPage(target);
          } catch {
            // Preload is opportunistic only.
          }
        }),
      );
    };

    void preload();
  }, [page, ready]);

  useEffect(() => {
    const handleFullscreen = () => {
      setFullscreen(document.fullscreenElement === shellRef.current);
    };

    document.addEventListener('fullscreenchange', handleFullscreen);
    return () => document.removeEventListener('fullscreenchange', handleFullscreen);
  }, []);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.tagName === 'INPUT' || target?.tagName === 'TEXTAREA') return;

      if (['ArrowRight', 'ArrowDown', 'PageDown', ' '].includes(event.key)) {
        event.preventDefault();
        next();
      } else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(event.key)) {
        event.preventDefault();
        previous();
      } else if (event.key === 'Home') {
        event.preventDefault();
        goTo(1);
      } else if (event.key === 'End') {
        event.preventDefault();
        goTo(totalPages);
      } else if (event.key.toLowerCase() === 'f') {
        event.preventDefault();
        if (document.fullscreenElement) {
          void document.exitFullscreen();
        } else {
          void shellRef.current?.requestFullscreen();
        }
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goTo, next, previous, totalPages]);

  const toggleFullscreen = async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await shellRef.current?.requestFullscreen();
    }
  };

  const download = () => {
    const anchor = document.createElement('a');
    anchor.href = PDF_URL;
    anchor.download = FILE_NAME;
    anchor.click();
  };

  return (
    <div
      ref={shellRef}
      className="flex h-[100dvh] min-h-0 flex-col overflow-hidden bg-[#050608] text-white"
    >
      <header className="z-20 flex h-14 shrink-0 items-center justify-between gap-3 border-b border-white/[0.08] bg-[#090a0d]/95 px-3 backdrop-blur-xl sm:h-16 sm:px-6">
        <div className="min-w-0">
          <div className="truncate text-[11px] font-black tracking-[0.18em] text-white sm:text-sm">
            IDS × IPARANÁ
          </div>
          <div className="hidden truncate text-[10px] uppercase tracking-[0.16em] text-zinc-500 sm:block">
            FLEXCO Brasil · Proposta Pós-Alinhamento
          </div>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <a
            href="/"
            className="hidden items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs font-semibold text-zinc-300 transition hover:bg-white/5 sm:flex"
          >
            <Home className="h-4 w-4" />
            Parceria
          </a>

          <button
            type="button"
            onClick={download}
            title="Baixar proposta"
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-zinc-300 transition hover:bg-white/5"
          >
            <Download className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={toggleFullscreen}
            title={fullscreen ? 'Sair da tela cheia' : 'Tela cheia'}
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-zinc-300 transition hover:bg-white/5"
          >
            {fullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </button>
        </div>
      </header>

      <main className="relative min-h-0 flex-1 overflow-hidden bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.055),transparent_38%)]">
        <div
          ref={stageRef}
          className="absolute inset-0 flex items-center justify-center p-2 sm:p-4 lg:p-6"
        >
          {!ready && !error && (
            <div className="flex flex-col items-center gap-4 text-center">
              <LoaderCircle className="h-7 w-7 animate-spin text-orange-400" />
              <div>
                <div className="text-sm font-semibold text-zinc-200">Carregando proposta final</div>
                <div className="mt-1 text-xs text-zinc-600">versão final aprovada</div>
              </div>
            </div>
          )}

          {error && (
            <div className="max-w-md rounded-2xl border border-red-500/20 bg-red-500/5 p-6 text-center">
              <div className="text-sm font-bold text-red-300">Não foi possível abrir o deck.</div>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{error}</p>
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="mt-5 inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-xs font-bold text-white transition hover:bg-white/5"
              >
                <RotateCcw className="h-4 w-4" />
                Tentar novamente
              </button>
            </div>
          )}

          {ready && !error && (
            <div className="relative flex h-full w-full items-center justify-center">
              <canvas
                ref={canvasRef}
                aria-label={`Página ${page} de ${totalPages} da proposta executiva`}
                className="block max-h-full max-w-full rounded-[10px] shadow-[0_24px_80px_rgba(0,0,0,0.48)]"
              />
              <div
                className={`pointer-events-none absolute right-3 top-3 flex items-center gap-2 rounded-full border border-white/10 bg-black/55 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-zinc-400 backdrop-blur-md transition-opacity duration-200 ${rendering ? 'opacity-100' : 'opacity-0'}`}
              >
                <LoaderCircle className="h-3 w-3 animate-spin text-orange-400" />
                preparando
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="z-20 flex h-14 shrink-0 items-center justify-between gap-2 border-t border-white/[0.08] bg-[#090a0d]/95 px-3 sm:h-16 sm:px-6">
        <button
          type="button"
          onClick={previous}
          disabled={page === 1 || !ready}
          className="inline-flex h-9 items-center gap-2 rounded-xl border border-white/10 px-3 text-xs font-bold text-zinc-300 transition hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-20 sm:h-10"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="hidden sm:inline">Anterior</span>
        </button>

        <div className="flex items-center gap-3">
          <div className="text-[11px] font-black tabular-nums tracking-[0.18em] text-white sm:text-xs">
            {String(page).padStart(2, '0')}
            <span className="mx-2 text-zinc-700">/</span>
            {totalPages}
          </div>
          <div className="hidden text-[10px] uppercase tracking-[0.12em] text-zinc-600 md:block">
            ← → navegar · F tela cheia
          </div>
        </div>

        <button
          type="button"
          onClick={next}
          disabled={page === totalPages || !ready}
          className="inline-flex h-9 items-center gap-2 rounded-xl border border-orange-500/25 bg-orange-500/[0.08] px-3 text-xs font-bold text-orange-200 transition hover:bg-orange-500/[0.13] disabled:cursor-not-allowed disabled:opacity-20 sm:h-10"
        >
          <span className="hidden sm:inline">Próxima</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </footer>
    </div>
  );
}
