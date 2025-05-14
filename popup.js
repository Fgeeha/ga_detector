document.addEventListener('DOMContentLoaded', () => {
  chrome.tabs.executeScript({
    code: `(() => {
      let detected = false;
      document.querySelectorAll('script').forEach(s => {
        const src = s.src || '';
        const txt = s.innerText || '';
        if (/googletagmanager\\.com\\/gtag\\/js\\?id=/.test(src) ||
            /google-analytics\\.com\\/analytics\\.js/.test(src) ||
            /google-analytics\\.com\\/ga\\.js/.test(src) ||
            /gtag\\('config',\\s*['"](G-|UA-)/.test(txt) ||
            /ga\\('create',/.test(txt)) {
          detected = true;
        }
      });
      return detected;
    })();`
  }, results => {
    const found = results && results[0];
    document.getElementById('result').textContent = found
      ? 'Найден Google Analytics'
      : 'Google Analytics не найден';
  });
});
