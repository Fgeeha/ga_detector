
# Firefox

## Установка расширения в Firefox

1. Скопируйте папку `common/` внутрь папки `firefox/`, чтобы структура выглядела так:

   ```
   firefox/
   ├── common/
   │   ├── icon16.png
   │   ├── icon48.png
   │   └── icon128.png
   ├── manifest.json
   ├── popup.html
   └── popup.js
   ```
2. Откройте в Firefox страницу `about:debugging#/runtime/this-firefox`.
3. Нажмите **Load Temporary Add-on…**.
4. В появившемся диалоге выберите файл `firefox/manifest.json`.
5. Расширение появится в панели инструментов — кликните его и проверьте работу.
