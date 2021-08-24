// Importa el módulo http para la creación del servidor
const http = require('http')

// Crea una nueva instancia del servidor
http
  .createServer(function (req, res) {
    // Encabezado de la respuesta por defecto del servidor
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Podemos consultar la url del request
    console.log('url', req.url)

    // Respuesta según el content-type
    res.end('<h1>hello world!</h1>')
  })
  .listen(8081); // Puerto que usará el servidor para escuchar las solicitudes
