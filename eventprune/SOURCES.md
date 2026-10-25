# EventPrune project page: sources and layout reuse

- Existing author homepage (`../styles.css`, PRISM-based MIT): directly reuse base typography, root color/font variables, element defaults, keyboard focus, reduced clutter, and skip-link CSS in `assets/homepage-base.css`. Original MIT license retained at `assets/PRISM-LICENSE.txt`.
- Author-requested visual reference: https://zhouzt21.github.io/EventRadar-web/ ; public source: https://github.com/zhouzt21/EventRadar-web (main). Reuse its publication-page reading order and layout ideas: centered conference/title/authors, compact navigation, a large teaser, motivation, three named method stages, experiments and resources. No EventRadar scientific text, images or videos are reused. Its repository does not declare a license, so substantial source files are not copied into the published page.
- Research content: local camera-ready `NeurIPS_2026/neurips_2026.tex`; all seven PNG figures copied byte-for-byte from the poster’s prepared paper assets. Public accuracy values read from the poster frozen `sources/main_table.json`. The original paper is https://arxiv.org/abs/2605.19506 .
- Public destination: https://pengtaoma00.github.io/eventprune/ . Group: https://chen-xinlei.com/ .
- Code/data status is explicitly “release in preparation”; no placeholder repository or dataset URL is exposed.

## Complete research expansion

- Results are extracted from the adopted camera-ready `neurips_2026.tex`, with LaTeX comments and presentation-only wrappers removed. The six main task columns and seven appendix columns are joined by method and token budget; their reported averages must agree. All main-table cells are also checked against the frozen poster source JSON.
- The numeric tables cover public spatial reasoning, ESR-Real, efficiency, component combinations and categories, fusion weights, layer placement, all 28 attention layers, layer-group summaries, causal ETS, Video-MME, OneVision and OneVision bias. All 15 numeric source-table labels are represented, with paired main/appendix tables combined where appropriate. The six-task dataset taxonomy is summarized separately.
- `data/results.json` retains scores as source strings. CSV files and the downloadable ZIP contain all budgets and methods. No experiment was rerun, and no unavailable OneVision method breakdown or unreported efficiency row was invented.
- Figures added from complete original PDF pages: `picture/位置偏见.pdf` (all three panels), `picture/定性矢量2.pdf`, `picture/数据集矢量2.pdf`, `picture/数据集概览矢量图2.pdf`, and `appendix/final_changwei.pdf`. Source PDFs remain available next to the rendered PNGs. The eight comparative frame images are exact prepared extractions from the qualitative paper figure.
- Statistical-reliability text follows the adopted appendix: 10,000 paired cluster-bootstrap resamples, micro/macro confidence intervals and leave-one-recording-out gains. Dataset duration is 50.1–153.3 seconds. Earlier deferred metadata is not newly introduced.
- Bold numerical cells identify the best pruning result within the relevant budget, with ECP alone bolded when it shares that best score. Category-specific ablations and non-ECP wins remain visible.
