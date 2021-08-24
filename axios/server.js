// Importa el módulo http para la creación del servidor
const http = require('http');
// Importa el módulo axios
const axios = require('axios');

async function getDatafromAnotherServer() {
  const resp = await axios.get('http://webcode.me');
  console.log(resp.data);
  return resp.data;
}

// Crea una nueva instancia del servidor
http
  .createServer(async function (req, res) {
    // Encabezado de la respuesta por defecto del servidor
    console.log('req',req.url);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const anotherWebPage = await getDatafromAnotherServer();
    res.end(anotherWebPage);
  })
  .listen(8081); // Puerto que usará el servidor para escuchar las solicitudes
