(() => {
  'use strict';
  const slides = [...document.querySelectorAll('.slide')];
  const select = document.querySelector('#slide-select');
  const previous = document.querySelector('#previous');
  const next = document.querySelector('#next');
  const reading = document.querySelector('#reading');
  const count = document.querySelector('#page-count');
  const progress = document.querySelector('#progress-fill');
  let current = 0;
  let continuous = false;
  const hashIndex = () => { const n = Number(location.hash.slice(1)); return Number.isInteger(n) && n >= 1 && n <= slides.length ? n - 1 : 0; };
  function show(index, updateHash = true) {
    current = Math.max(0, Math.min(slides.length - 1, index));
    slides.forEach((slide, i) => { slide.hidden = !continuous && i !== current; });
    select.value = String(current);
    count.textContent = `${String(current + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
    progress.style.width = `${(current + 1) / slides.length * 100}%`;
    previous.disabled = current === 0;
    next.disabled = current === slides.length - 1;
    if (updateHash) {
      try { history.replaceState(null, '', '#' + (current + 1)); } catch (_) { /* File viewers may restrict history. */ }
    }
    if (continuous) slides[current].scrollIntoView({ block: 'start', behavior: 'auto' });
    else slides[current].scrollTop = 0;
  }
  previous.addEventListener('click', () => show(current - 1));
  next.addEventListener('click', () => show(current + 1));
  select.addEventListener('change', () => show(Number(select.value)));
  window.addEventListener('hashchange', () => show(hashIndex(), false));
  reading.addEventListener('click', () => {
    continuous = !continuous;
    document.body.classList.toggle('reading', continuous);
    reading.setAttribute('aria-pressed', String(continuous));
    reading.textContent = continuous ? 'Apresentar' : 'Ler tudo';
    show(current);
    if (!continuous) window.scrollTo(0, 0);
  });
  const fullscreen = document.querySelector('#fullscreen');
  if (!document.fullscreenEnabled) fullscreen.hidden = true;
  fullscreen.addEventListener('click', async () => {
    try { if (document.fullscreenElement) await document.exitFullscreen(); else await document.documentElement.requestFullscreen(); }
    catch (_) { document.querySelector('#status').textContent = 'Use o comando de tela cheia do navegador.'; }
  });
  document.addEventListener('fullscreenchange', () => { fullscreen.textContent = document.fullscreenElement ? 'Sair da tela cheia' : 'Tela cheia'; });
  document.addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey || /^(INPUT|TEXTAREA|SELECT|BUTTON|SUMMARY)$/.test(event.target.tagName) || event.target.isContentEditable) return;
    if (event.key === 'ArrowRight' || event.key === 'PageDown') { event.preventDefault(); show(current + 1); }
    if (event.key === 'ArrowLeft' || event.key === 'PageUp') { event.preventDefault(); show(current - 1); }
    if (event.key === 'Home') { event.preventDefault(); show(0); }
    if (event.key === 'End') { event.preventDefault(); show(slides.length - 1); }
  });
  document.querySelectorAll('[data-scope-target]').forEach(button => {
    button.addEventListener('click', () => {
      const group = button.closest('.scope-layout');
      group.querySelectorAll('[data-scope-target]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      group.querySelectorAll('.scope-panel').forEach(panel => { panel.hidden = panel.id !== button.dataset.scopeTarget; });
    });
  });
  const confirmations = [...document.querySelectorAll('.confirm')];
  confirmations.forEach(button => button.addEventListener('click', () => {
    button.setAttribute('aria-pressed', String(button.getAttribute('aria-pressed') !== 'true'));
    const checked = confirmations.filter(item => item.getAttribute('aria-pressed') === 'true').length;
    document.querySelector('#confirmation-progress').textContent = `${checked} de ${confirmations.length} pontos revisados nesta conversa`;
  }));
  show(hashIndex(), false);
})();
