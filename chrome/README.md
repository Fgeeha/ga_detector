
# Chrome

## Установка расширения в Chrome

1. Скопируйте папку `common/` рядом с папкой `chrome/`, чтобы структура выглядела так:

   ```
   chrome/
   ├── common/
   │   ├── icon16.png
   │   ├── icon48.png
   │   └── icon128.png
   ├── manifest.json
   ├── popup.html
   └── popup.js
   ```
2. Откройте в Chrome страницу `chrome://extensions/`.
3. Включите **Developer mode** (в правом верхнем углу).
4. Нажмите **Load unpacked** и выберите папку `chrome/`.
5. Иконка расширения появится в тулбаре — нажмите на неё для проверки работы.
