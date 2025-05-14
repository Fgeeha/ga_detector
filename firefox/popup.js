document.addEventListener('DOMContentLoaded', () => {
  chrome.tabs.executeScript({
    code: `(() => {
      const snippets = [];
      // Detect various analytics and GTM scripts
      document.querySelectorAll('script').forEach(s => {
        const src = s.src || '';
        const txt = s.textContent || '';
        if (/googletagmanager\\.com\\/gtag\\/js\\?id=/.test(src)) {
          snippets.push('GA4 script src: ' + src);
        }
        if (/googletagmanager\\.com\\/gtm\\.js\\?id=/.test(src)) {
          snippets.push('GTM script src: ' + src);
        }
        if (/google-analytics\\.com\\/analytics\\.js/.test(src)) {
          snippets.push('analytics.js src: ' + src);
        }
        if (/google-analytics\\.com\\/ga\\.js/.test(src)) {
          snippets.push('ga.js src: ' + src);
        }
        if (/gtag\\('config',/.test(txt)) {
          const match = txt.match(/gtag\\('config',\\s*['"]([^)]+)['"]\\)/);
          snippets.push('gtag config: ' + (match ? match[0] : txt.trim().slice(0,100)));
        }
        if (/ga\\('create',/.test(txt)) {
          const match = txt.match(/ga\\('create',\\s*['"]([^)]+)['"]/);
          snippets.push('ga create: ' + (match ? match[0] : txt.trim().slice(0,100)));
        }
      });
      // Detect site verification metas
      document.querySelectorAll('meta[name="google-site-verification"]').forEach(m => {
        snippets.push('meta verification: ' + m.outerHTML);
      });
      return snippets;
    })();`
  }, results => {
    const snippets = (results && results[0]) || [];
    const el = document.getElementById('result');
    if (snippets.length) {
      el.textContent = 'Найдено:\n' + snippets.join('\n');
    } else {
      el.textContent = 'Ничего не найдено';
    }
  });
});
