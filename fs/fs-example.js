//Importa el módulo para la manipulación de archivos
const fs = require('fs');

//Lee un archivo del sistema de archivos
fs.readFile('index-test.html', 'utf8', (err, data) => {
  const topSection = data.substring(0, data.indexOf('<table'))
  console.log(topSection);
});

//Crea un archivo en el sistema de archivos
fs.writeFile('index-result.html', '<h1>Label</h1>', 'utf-8', (err) => {
  if (err) console.log('Error writing file');
});
