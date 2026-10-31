# EventPrune project page: sources and layout reuse

- Existing author homepage (`../styles.css`, PRISM-based MIT): directly reuse base typography, root color/font variables, element defaults, keyboard focus, reduced clutter, and skip-link CSS in `assets/homepage-base.css`. Original MIT license retained at `assets/PRISM-LICENSE.txt`.
- Author-requested visual reference: https://zhouzt21.github.io/EventRadar-web/ ; public source: https://github.com/zhouzt21/EventRadar-web (main). Reuse its publication-page reading order and layout ideas: centered conference/title/authors, compact navigation, a large teaser, motivation, three named method stages, experiments and resources. No EventRadar scientific text, images or videos are reused. Its repository does not declare a license, so substantial source files are not copied into the published page.
- Research content: local camera-ready `NeurIPS_2026/neurips_2026.tex`; prepared paper figures come from the poster assets and the original PDFs. The original paper is https://arxiv.org/abs/2605.19506 .
- Public destination: https://pengtaoma00.github.io/eventprune/ . Group: https://chen-xinlei.com/ . Dataset: https://huggingface.co/datasets/pengtaoma00/ESR-Real . Code release remains in preparation.

## Main results and figures

- The public accuracy table retains the six representative task columns in `tab:spatial_results_even`; its reported Avg.Acc covers all 13 selected tasks. The ESR-Real table retains all six task columns in `tab:esr_real_results`. Both retain the three pruning budgets and the adopted score strings. No experiment was rerun.
- Bold numerical cells identify the best pruning result within each budget, with ECP alone bolded when it shares that best score. ECP rows are shaded.
- Detailed appendix tables, duplicate average-only summaries and downloadable result-data bundles are omitted from the project page; the paper remains the source for extended evaluations.
- Original research figures include `picture/位置偏见.pdf` (heatmaps and both line plots), `picture/定性矢量2.pdf`, `picture/数据集矢量2.pdf`, `picture/数据集概览矢量图2.pdf`, and `appendix/final_changwei.pdf`. Source PDFs remain available next to rendered PNGs. The eight comparative frame images are exact prepared extractions from the qualitative paper figure.
- Statistical-reliability text follows the adopted appendix: 10,000 paired cluster-bootstrap resamples, micro/macro confidence intervals and leave-one-recording-out gains. Dataset duration is 50.1–153.3 seconds.
