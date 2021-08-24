const http = require('http');
const fs = require('fs');
const axios = require('axios');



async function getDataProveedores() {
  const resp1 = await axios.get("https://gist.githubusercontent.com/josejbocanegra/d3b26f97573a823a9d0df4ec68fef45f/raw/66440575649e007a9770bcd480badcbbc6a41ba7/proveedores.json")
  
  console.log(JSON.stringify(resp1.data.idproveedores));
 
 return resp1.data.length;
}

async function getDataClientes() {
  const resp2 = await axios.get("https://gist.githubusercontent.com/josejbocanegra/986182ce2dd3e6246adcf960f9cda061/raw/f013c156f37c34117c0d4ba9779b15d427fb8dcd/clientes.json")
  //console.log(resp2.data);
  return resp2.data;
}

http
  .createServer(async function (req, res) {
  
 fs.readFile('proveedores.html', 'utf8', (err, data) => {
  const topSection = data.substring(0, data.indexOf('</html'))
  console.log(topSection);
  res.write(topSection);
  res.end;
});

  })
  .listen(8081);
