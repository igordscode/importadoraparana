import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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

const TOTAL_PAGES = 25;
const FILE_NAME = 'IDS_x_IPARANA_FLEXCO_PROPOSTA_FINAL_v2.pdf';

export function FinalProposalDeck() {
  const shellRef = useRef<HTMLDivElement>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [fullscreen, setFullscreen] = useState(false);
  const [loadingText] = useState('Carregando proposta final');
  const [error, setError] = useState<string | null>(null);

  const goTo = useCallback((nextPage: number) => {
    setPage(Math.max(1, Math.min(TOTAL_PAGES, nextPage)));
  }, []);

  const previous = useCallback(() => goTo(page - 1), [goTo, page]);
  const next = useCallback(() => goTo(page + 1), [goTo, page]);

  useEffect(() => {
    setPdfUrl('/proposta-final.pdf');
  }, []);

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
        goTo(TOTAL_PAGES);
      } else if (event.key.toLowerCase() === 'f') {
        event.preventDefault();
        if (document.fullscreenElement) {
          document.exitFullscreen();
        } else {
          shellRef.current?.requestFullscreen();
        }
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goTo, next, previous]);

  const viewerUrl = useMemo(() => {
    if (!pdfUrl) return '';
    return `${pdfUrl}#page=${page}&view=FitH&toolbar=0&navpanes=0&scrollbar=0`;
  }, [page, pdfUrl]);

  const toggleFullscreen = async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await shellRef.current?.requestFullscreen();
    }
  };

  const download = () => {
    if (!pdfUrl) return;
    const anchor = document.createElement('a');
    anchor.href = '/proposta-final.pdf';
    anchor.download = FILE_NAME;
    anchor.click();
  };

  return (
    <div
      ref={shellRef}
      className="flex min-h-screen flex-col overflow-hidden bg-[#050608] text-white"
    >
      <header className="z-20 flex min-h-16 items-center justify-between gap-3 border-b border-white/10 bg-[#090a0d]/95 px-4 backdrop-blur-xl sm:px-6">
        <div className="min-w-0">
          <div className="truncate text-xs font-black tracking-[0.18em] text-white sm:text-sm">
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
            disabled={!pdfUrl}
            title="Baixar proposta"
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-zinc-300 transition hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-30"
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

      <main className="relative flex min-h-0 flex-1 items-center justify-center bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_34%)] p-2 sm:p-4 lg:p-6">
        {!pdfUrl && !error && (
          <div className="flex flex-col items-center gap-4 text-center">
            <LoaderCircle className="h-7 w-7 animate-spin text-orange-400" />
            <div>
              <div className="text-sm font-semibold text-zinc-200">{loadingText}</div>
              <div className="mt-1 text-xs text-zinc-600">25 páginas · versão final aprovada</div>
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

        {pdfUrl && (
          <div className="relative flex h-full w-full max-w-[1600px] items-center justify-center">
            <div className="relative aspect-video h-auto max-h-[calc(100vh-9rem)] w-full overflow-hidden rounded-xl border border-white/10 bg-[#111216] shadow-2xl shadow-black/60">
              <iframe
                key={viewerUrl}
                src={viewerUrl}
                title="Proposta Executiva IDS × IPARANÁ"
                className="h-full w-full border-0 bg-[#111216]"
              />
            </div>
          </div>
        )}
      </main>

      <footer className="z-20 flex min-h-16 items-center justify-between gap-3 border-t border-white/10 bg-[#090a0d]/95 px-3 sm:px-6">
        <button
          type="button"
          onClick={previous}
          disabled={page === 1 || !pdfUrl}
          className="inline-flex h-10 items-center gap-2 rounded-xl border border-white/10 px-3 text-xs font-bold text-zinc-300 transition hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-25"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="hidden sm:inline">Anterior</span>
        </button>

        <div className="flex items-center gap-3">
          <div className="text-xs font-black tabular-nums tracking-[0.18em] text-white">
            {String(page).padStart(2, '0')}
            <span className="mx-2 text-zinc-700">/</span>
            {TOTAL_PAGES}
          </div>
          <div className="hidden text-[10px] uppercase tracking-[0.12em] text-zinc-600 md:block">
            ← → navegar · F tela cheia
          </div>
        </div>

        <button
          type="button"
          onClick={next}
          disabled={page === TOTAL_PAGES || !pdfUrl}
          className="inline-flex h-10 items-center gap-2 rounded-xl border border-orange-500/30 bg-orange-500/10 px-3 text-xs font-bold text-orange-200 transition hover:bg-orange-500/15 disabled:cursor-not-allowed disabled:opacity-25"
        >
          <span className="hidden sm:inline">Próxima</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </footer>
    </div>
  );
}
