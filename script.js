(() => {
  "use strict";
  const chinese = {
    skip: "跳转到正文",
    navAbout: "简介",
    aboutHeading: "个人简介",
    profileRole: "电子信息硕士研究生",
    profileAffiliation: "清华大学 · 深圳国际研究生院",
    bio1: '我目前在<a href="https://www.sigs.tsinghua.edu.cn/" target="_blank" rel="noopener">清华大学深圳国际研究生院</a>攻读电子信息硕士学位，师从 <a href="https://chen-xinlei.com/" target="_blank" rel="noopener">陈鑫磊教授</a>，在 AIoT 课题组开展研究。2025 年，我于东北大学获得通信工程学士学位。',
    bio2: "我的研究主要围绕<strong>视觉语言模型的高效推理</strong>与<strong>多模态感知</strong>展开，重点关注视觉 Token 剪枝与推理优化。我也关注大语言模型预训练与长上下文建模，并对面向具身系统的感知问题感兴趣。",
    interests:
      "<strong>研究兴趣：</strong>VLM 推理优化 · 多模态感知 · 大模型预训练 · 长上下文建模 · 长程依赖数据构建",
    navPubs: "论文发表",
    navResearch: "研究",
    navEducation: "教育经历",
    navHonors: "荣誉奖项",
    pubsHeading: "论文发表",
    paper: "论文",
    accepted: " · 已录用",
    eventFigure: "空间推理与 Token 保留效果（图 1，第 2 页）。",
    eventSummary:
      "EventPrune 利用事件流中的运动线索，剪除视觉语言模型中的冗余视觉 Token。通过级联剪枝，在保留第一视角动态空间推理所需信息的同时，降低模型推理开销。",
    surveyFigure: "移动感知任务（图 9，第 23 页）。",
    icctFigure: "LED–INS 融合定位框架（图 2）。",
    surveySummary:
      "从抽象、算法、加速和应用四个方面，系统梳理基于事件视觉的移动感知研究。综述涵盖事件表示、多传感器融合与高效部署，以及跟踪、里程计和三维重建等感知任务。",
    icctSummary:
      "面向粮仓车辆的低成本定位，结合分布式 LED 网络与惯性导航。通过考虑姿态角的 AAVSD-Kalman 滤波融合两种定位信息，在仿真中减少惯性导航的累积漂移。",
    copy: "复制引用",
    researchHeading: "研究项目",
    retinaTitle: "Retina Camera：面向高效机器人视觉的仿生视网膜相机",
    retinaMeta: "2024 年 10 月至今 · 共同第一作者 · 论文准备中",
    retinaSummary:
      "结合强度像素与事件像素的仿生视网膜传感器，探索运动引导的语义传播与帧辅助角点检测，支持高效视觉感知。",
    hazardTitle: "基于事件的道路突发风险检测系统",
    hazardMeta: "2025 年 9 月至今 · 核心感知流水线设计",
    hazardSummary:
      "融合事件光流、RGB–Event 目标检测与横向穿越风险过滤，实时感知从遮挡后突然出现的道路目标。",
    educationHeading: "教育经历",
    tsinghua: "清华大学",
    masters: "电子信息硕士 · 深圳国际研究生院",
    advisor: "导师：陈鑫磊教授",
    recommendedAdmission: "推荐免试录取（保研）",
    mastersDates: "2025 年 9 月—2028 年 6 月",
    neu: "东北大学",
    bachelors: "通信工程 · 工学学士",
    bachelorsAdvisor: "导师：闫磊",
    bachelorsDates: "2021 年 9 月—2025 年 6 月",
    honorsHeading: "部分荣誉",
    honorTsinghua: "<strong>校综合优秀一等奖学金</strong>，清华大学",
    honor1: "<strong>国家奖学金</strong>（两次），东北大学",
    honor2: "尚佳苑奖学金，东北大学",
    honor3: "校综合一等奖学金，东北大学",
    honor4: "创新创业奖学金，三次获得",
    contactHeading: "联系",
    contactText:
      '欢迎就研究与合作交流，请联系 <a href="mailto:mpt25@mails.tsinghua.edu.cn">mpt25@mails.tsinghua.edu.cn</a>。',
    updated: "最近更新：2026 年 10 月",
    backTop: "返回顶部",
    figureTitle: "论文原图",
    figureSource: "查看原论文",
  };
  const elements = [...document.querySelectorAll("[data-i18n]")];
  const english = new Map(
    elements.map((element) => [element, element.innerHTML]),
  );
  const toggle = document.querySelector(".language-button");
  const dialog = document.querySelector(".figure-dialog");
  const closeFigure = document.querySelector(".close-figure");
  let language = "en";

  function setLanguage(next) {
    language = next === "zh-CN" ? "zh-CN" : "en";
    document.documentElement.lang = language;
    elements.forEach((element) => {
      element.innerHTML =
        language === "zh-CN" && element.dataset.i18n in chinese
          ? chinese[element.dataset.i18n]
          : english.get(element);
    });
    document.getElementById("language-label").textContent =
      language === "en" ? "中文" : "English";
    toggle.setAttribute(
      "aria-label",
      language === "en" ? "Switch to Chinese" : "Switch to English",
    );
    toggle.setAttribute("aria-pressed", String(language === "zh-CN"));
    closeFigure.setAttribute(
      "aria-label",
      language === "zh-CN" ? "关闭图片" : "Close figure",
    );
    try {
      localStorage.setItem("pengtao-language", language);
    } catch {
      /* Language storage is optional. */
    }
  }
  let saved;
  try {
    saved = localStorage.getItem("pengtao-language");
  } catch {
    /* Use English by default. */
  }
  if (saved === "zh-CN") setLanguage(saved);
  toggle.addEventListener("click", () => {
    setLanguage(language === "en" ? "zh-CN" : "en");
    requestAnimationFrame(updateNavigation);
  });
  document.getElementById("year").textContent = String(
    new Date().getFullYear(),
  );

  document.querySelectorAll(".bibtex-button").forEach((button) => {
    button.addEventListener("click", () => {
      const panel = document.getElementById(
        button.getAttribute("aria-controls"),
      );
      panel.hidden = !panel.hidden;
      button.setAttribute("aria-expanded", String(!panel.hidden));
      button.querySelector("span").textContent = panel.hidden ? "+" : "−";
    });
  });
  document.querySelectorAll(".copy-bibtex").forEach((button) => {
    button.addEventListener("click", async () => {
      const panel = button.closest(".bibtex-panel");
      const code = panel.querySelector("code");
      const status = panel.querySelector(".copy-status");
      try {
        if (!navigator.clipboard?.writeText)
          throw new Error("Clipboard unavailable");
        await navigator.clipboard.writeText(code.textContent);
        status.textContent = language === "zh-CN" ? "已复制" : "Copied";
      } catch {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(code);
        selection.removeAllRanges();
        selection.addRange(range);
        status.textContent =
          language === "zh-CN"
            ? "已选中，请按 Ctrl/Cmd+C 复制"
            : "Selected. Press Ctrl/Cmd+C to copy.";
      }
    });
  });

  document.querySelectorAll("[data-figure]").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (
        !dialog.showModal ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      event.preventDefault();
      const sourceImage = link.querySelector("img");
      const image = dialog.querySelector(".enlarged-figure");
      image.src = link.href;
      image.alt = sourceImage.alt;
      dialog.querySelector(".figure-caption").textContent =
        link.closest("figure").querySelector("figcaption")?.textContent ||
        link.dataset.caption;
      dialog.querySelector(".figure-paper-source").href = link.dataset.source;
      dialog.showModal();
      document.documentElement.classList.add("figure-open");
      closeFigure.focus();
    });
  });
  closeFigure.addEventListener("click", () => dialog.close());
  dialog.addEventListener("close", () =>
    document.documentElement.classList.remove("figure-open"),
  );
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    )
      dialog.close();
  });
  const navLinks = [...document.querySelectorAll(".main-nav a")];
  const navSections = navLinks.map((link) => document.querySelector(link.hash));
  let scheduled = false;
  function updateNavigation() {
    const sticky =
      getComputedStyle(document.querySelector(".site-header")).position ===
      "sticky";
    const offset =
      (sticky
        ? document.querySelector(".site-header").getBoundingClientRect().height
        : 0) + 45;
    let active = navSections[0].id;
    for (const section of navSections)
      if (section.getBoundingClientRect().top <= offset) active = section.id;
    navLinks.forEach((link) => {
      const current = link.hash === "#" + active;
      link.classList.toggle("active", current);
      if (current) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
    scheduled = false;
  }
  window.addEventListener(
    "scroll",
    () => {
      if (!scheduled) {
        requestAnimationFrame(updateNavigation);
        scheduled = true;
      }
    },
    { passive: true },
  );
  window.addEventListener("resize", updateNavigation);
  updateNavigation();
})();
