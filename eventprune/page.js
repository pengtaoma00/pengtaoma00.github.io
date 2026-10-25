const copyButton = document.getElementById('copy-citation');
copyButton.addEventListener('click', async () => {
  const value = document.getElementById('bibtex').textContent;
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText(value);
    status.textContent = 'Citation copied.';
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(document.getElementById('bibtex'));
    selection.removeAllRanges();
    selection.addRange(range);
    status.textContent = 'Citation selected. Press Ctrl/Cmd+C to copy.';
  }
});

document.querySelectorAll('[data-budget]').forEach(button => {
  button.addEventListener('click', () => {
    const table = document.getElementById(button.dataset.target);
    const budget = button.dataset.budget;
    table.querySelectorAll('[data-retention]').forEach(row => {
      row.hidden = budget !== 'all' && row.dataset.retention !== budget && row.dataset.retention !== '100';
    });
    button.parentElement.querySelectorAll('button').forEach(peer => {
      peer.setAttribute('aria-pressed', String(peer === button));
    });
  });
});

const qualitativeNames = { original: 'Full tokens', attention: 'Attention', diversity: 'Diversity', ecp: 'ECP' };
document.querySelectorAll('[data-qual]').forEach(button => {
  button.addEventListener('click', () => {
    const method = button.dataset.qual;
    for (const frame of [3, 9]) {
      const src = `assets/qual_${method}_${frame}.png`;
      const image = document.getElementById(`qual-frame-${frame}`);
      image.src = src;
      image.alt = `${qualitativeNames[method]} retained tokens at frame ${frame}`;
      document.getElementById(`qual-link-${frame}`).href = src;
    }
    document.querySelectorAll('[data-qual-label]').forEach(label => { label.textContent = qualitativeNames[method]; });
    button.parentElement.querySelectorAll('button').forEach(peer => { peer.setAttribute('aria-pressed', String(peer === button)); });
  });
});

const sectionLinks = [...document.querySelectorAll('.topnav a[href^="#"]')].filter(a => a.hash !== '#top');
let navigationUpdatePending = false;
function updateNavigation() {
  const offset = document.querySelector('.topnav').getBoundingClientRect().height + 40;
  let current = '';
  sectionLinks.forEach(link => {
    if (document.querySelector(link.hash).getBoundingClientRect().top <= offset) current = link.hash;
  });
  sectionLinks.forEach(link => {
    if (link.hash === current) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  navigationUpdatePending = false;
}
window.addEventListener('scroll', () => {
  if (!navigationUpdatePending) {
    navigationUpdatePending = true;
    requestAnimationFrame(updateNavigation);
  }
}, { passive: true });
window.addEventListener('resize', updateNavigation);
updateNavigation();
