const path = require('path')

console.log(__filename) // Обсолютный путь с файлом
console.log(path.dirname(__filename)) // Обсолютный путь без файла
console.log(path.basename(__filename)) // только имя файла
console.log(path.extname(__filename)) // расширение с точкой || .slice(1) без точки
console.log(path.parse(__filename)) // объект со всем предыдущим
console.log(path.resolve(__dirname, '..', './modules', './app.js')) //
console.log(path.join(__dirname, '..', './modules', './app.js')) //
