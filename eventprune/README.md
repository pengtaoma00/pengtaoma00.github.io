# EventPrune project page

Public URL: https://pengtaoma00.github.io/eventprune/

This independent static page lives under the author’s existing academic homepage. Its centered publication header, large teaser and motivation → method → experiment flow take the user-specified EventRadar project page as a visual reference. Base CSS is reused from the existing PRISM-based homepage; provenance and the retained MIT license are in `SOURCES.md` and `assets/PRISM-LICENSE.txt`.

The full research version includes complete public and ESR-Real results, model-side efficiency, component/fusion/layer ablations, Video-MME, OneVision, causal ETS, the complete attention-bias figure and statistics, qualitative comparisons, dataset construction and reliability analysis. Fourteen HTML tables present the main and appendix results. The structured data bundle preserves reported score strings rather than recomputing experiments.

- `index.html`: authors, paper, method, measured results, native-event examples, release status and BibTeX.
- `style.css`: original project-page composition and responsive styling.
- `research.css`: complete research sections, wide result tables and responsive controls.
- `assets/homepage-base.css`: directly reused academic homepage base styles.
- `page.js`: citation copy, budget filters, qualitative comparisons and section navigation.
- `data/results.json`: all adopted numeric result tables in a machine-readable form.
- `data/*.csv`, `data/results-tables.zip`: complete downloadable results.
- `assets/*.png`, `assets/*.pdf`: prepared research figures and original source PDFs. The attention figure includes heatmaps and both line plots.

The manuscript and frozen poster source table determine the numbers. Code and ESR-Real data are still in preparation; add their real public links to the resource section when released. The stable page URL lets the printed QR code continue to work as resources are added.

This is a buildless static page: serve the folder with any static server. When used inside the author’s homepage, the parent build includes `/eventprune/`. Keep this public path stable so the printed QR code remains valid.
