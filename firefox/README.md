
# Firefox

## Установка расширения в Firefox

Структура:

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
1. Откройте в Firefox страницу `about:debugging#/runtime/this-firefox`.
2. Нажмите **Load Temporary Add-on…**.
3. В появившемся диалоге выберите файл `firefox/manifest.json`.
4. Расширение появится в панели инструментов — кликните его и проверьте работу.
