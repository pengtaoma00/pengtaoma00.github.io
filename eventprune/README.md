# EventPrune project page

Public URL: https://pengtaoma00.github.io/eventprune/

This independent static page lives under the author’s existing academic homepage. Its centered publication header, large teaser and motivation → method → experiment flow take the user-specified EventRadar project page as a visual reference. Base CSS is reused from the existing PRISM-based homepage; provenance and the retained MIT license are in `SOURCES.md` and `assets/PRISM-LICENSE.txt`.

The page presents the method, the paper’s two main accuracy tables, attention-bias findings, qualitative comparisons, and ESR-Real. The public spatial benchmark table shows the six representative tasks from the main paper; its average accuracy still covers all 13 evaluated tasks. Both comparison tables retain the three pruning budgets and their reported scores. Detailed appendix tables and bulk result downloads are left to the paper.

- `index.html`: authors, method, main results, native-event examples, resources and BibTeX.
- `style.css`: original project-page composition and responsive styling.
- `research.css`: research figures, main comparison tables and responsive controls.
- `assets/homepage-base.css`: reused academic homepage base styles.
- `page.js`: citation copy, budget filters, qualitative comparisons and section navigation.
- `assets/*.png`, `assets/*.pdf`: prepared research figures and original source PDFs. The attention figure includes heatmaps and both line plots.

Reported numbers follow the adopted camera-ready manuscript; no experiment is recomputed by this page. ESR-Real links to its public Hugging Face release. The code release remains in preparation. Keep the public page path stable so the printed QR code remains valid as resources are added.

This is a buildless static page: serve the folder with any static server. When used inside the author’s homepage, the parent build includes `/eventprune/`.
