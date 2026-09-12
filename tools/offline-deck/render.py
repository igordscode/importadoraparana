"""Build an offline presentation from trusted, local editorial HTML.

This renderer deliberately accepts authored HTML, not untrusted user input.
No content is uploaded. Existing outputs are never overwritten.
"""
from pathlib import Path
from html import escape
import json
import sys

HERE = Path(__file__).resolve().parent

def render(data, destination, internal=False):
    destination = Path(destination)
    css = (HERE / 'deck.css').read_text(encoding='utf-8')
    js = (HERE / 'deck.js').read_text(encoding='utf-8')
    title = escape(data['title'])
    slides = []
    options = []
    for i, item in enumerate(data['slides'], 1):
        note = ''
        if internal and item.get('note'):
            note = '<details class="notes"><summary>Nota de condução | uso interno</summary><p>' + escape(item['note']) + '</p></details>'
        slides.append(f'<section class="slide {escape(item.get("class", ""))}" id="tela-{i}" aria-label="{i}. {escape(item["title"])}"' + (' hidden' if i > 1 else '') + '>' + item['html'] + note + '</section>')
        options.append(f'<option value="{i-1}">{i:02d} · {escape(item["title"])}</option>')
    marker = '<span class="internal-tag">USO INTERNO IDS</span>' if internal else ''
    subtitle = escape(data.get('subtitle', ''))
    html = f'''<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="dark light"><link rel="icon" href="data:,"><title>{title}</title><style>{css}\n{data.get('extra_css','')}</style></head>
<body><header class="deck-header"><div class="signature"><span class="ids">{escape(data.get('signature',''))}</span>{data.get('brand_html','')}</div><span class="deck-name">{subtitle}</span>{marker}</header>
<main class="deck-main" aria-label="Apresentação">{''.join(slides)}</main>
<nav class="deck-toolbar" aria-label="Controles da apresentação"><div class="progress-track" aria-hidden="true"><div class="progress-fill" id="progress-fill"></div></div><button class="nav-button" id="previous" aria-label="Tela anterior">&#8592;</button><span class="page-count" id="page-count" aria-live="polite"></span><button class="nav-button" id="next" aria-label="Próxima tela">&#8594;</button><label class="sr-only" for="slide-select">Ir para a tela</label><select id="slide-select">{''.join(options)}</select><span class="spacer"></span><span class="toolbar-hint">Use as setas para navegar</span><button id="reading" aria-pressed="false">Ler tudo</button><button id="fullscreen">Tela cheia</button></nav><span class="sr-only" id="status" role="status"></span><script>{js}</script></body></html>'''
    destination.parent.mkdir(parents=True, exist_ok=True)
    with destination.open('x', encoding='utf-8') as output:
        output.write(html)
    return destination

if __name__ == '__main__':
    if len(sys.argv) < 3:
        raise SystemExit('Usage: python render.py content.json output.html [--internal]')
    data = json.loads(Path(sys.argv[1]).read_text(encoding='utf-8'))
    print(render(data, sys.argv[2], '--internal' in sys.argv))
