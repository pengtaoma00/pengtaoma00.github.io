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
