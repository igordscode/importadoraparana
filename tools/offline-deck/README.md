# Offline executive presentation

Dependency-free HTML renderer for trusted, locally authored content. The optional private notes are omitted from the default output, including its source. All CSS and JavaScript are embedded. Supply assets as data URIs for a self-contained file. No analytics, storage, remote fonts or network requests are built in.

Run with Python 3: `python render.py content.json output.html`. Add `--internal` to include the optional per-slide `note` field. The output must not already exist.

Input fields: `title`, `signature`, `subtitle`, optional `brand_html`, optional `extra_css`, and `slides`. Each slide has a `title`, trusted `html`, optional `class` and optional `note`. This is an editorial build tool, not an HTML sanitizer for user-submitted content.

Navigation: arrow keys, PageUp/PageDown, Home/End, selector, previous/next, continuous reading and fullscreen when supported. Native buttons keep their normal keyboard behavior. Scope panels use explicit button state; meeting checkmarks are temporary and never record contractual approval. Reduced-motion preferences disable animation. Print shows all slides and scope exclusions.

Private commercial documents and proprietary assets must remain outside this public repository. This utility does not modify the website build or publish presentations.
