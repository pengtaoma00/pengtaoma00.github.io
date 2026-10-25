# EventPrune project page: sources and layout reuse

- Existing author homepage (`../styles.css`, PRISM-based MIT): directly reuse base typography, root color/font variables, element defaults, keyboard focus, reduced clutter, and skip-link CSS in `assets/homepage-base.css`. Original MIT license retained at `assets/PRISM-LICENSE.txt`.
- Author-requested visual reference: https://zhouzt21.github.io/EventRadar-web/ ; public source: https://github.com/zhouzt21/EventRadar-web (main). Reuse its publication-page reading order and layout ideas: centered conference/title/authors, compact navigation, a large teaser, motivation, three named method stages, experiments and resources. No EventRadar scientific text, images or videos are reused. Its repository does not declare a license, so substantial source files are not copied into the published page.
- Research content: local camera-ready `NeurIPS_2026/neurips_2026.tex`; all seven PNG figures copied byte-for-byte from the poster’s prepared paper assets. Public accuracy values read from the poster frozen `sources/main_table.json`. The original paper is https://arxiv.org/abs/2605.19506 .
- Public destination: https://pengtaoma00.github.io/eventprune/ . Group: https://chen-xinlei.com/ .
- Code/data status is explicitly “release in preparation”; no placeholder repository or dataset URL is exposed.
