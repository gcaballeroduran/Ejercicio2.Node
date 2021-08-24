const http = require('http');
const fs = require('fs');
const axios = require('axios');
const fetch = require("node-fetch");


async function getDataProveedores() {
  const resp1 = await axios.get("https://gist.githubusercontent.com/josejbocanegra/d3b26f97573a823a9d0df4ec68fef45f/raw/66440575649e007a9770bcd480badcbbc6a41ba7/proveedores.json")
  
  return resp1.data;
}

async function getDataClientes() {
  const resp2 = await axios.get("https://gist.githubusercontent.com/josejbocanegra/986182ce2dd3e6246adcf960f9cda061/raw/f013c156f37c34117c0d4ba9779b15d427fb8dcd/clientes.json")
  
  return resp2.data;
}
function cadena(json)
{
   return `<tr>
   <th> ${json.idproveedor}</th>
   
   <td>${json.nombrecompania}</td>
   <td>${json.nombrecontacto}</td>
   </tr> `
}

function cadenaClientes(json)
{
   return `<tr>
   <th> ${json.idCliente}</th>
   <td>${json.NombreCompania}</td>
   <td>${json.NombreContacto}</td>
   </tr> `
}

http
  .createServer(async function (req, res) {

    if (req.url === "/api/proveedores") {

fetch("http://localhost:8081/api/proveedores")
      let html = ""; 
      fs.readFile('proveedores.html', 'utf8', (err, data) => {
      
       if(err) console.log(err);
       html = data;
      
       
     });
     let j =  await getDataProveedores();
     let responce = "";
     for (var i = 0; i < 29; i++)
     {
         try {
             responce = responce + cadena(j[i]);
         } catch (error) {
             console.log(error);
         }
     
     }
     res.write(html + responce + `</tbody>
     </table>
     </body>
     </html>`);
     res.end;
    }       
 
    else if (req.url === "/api/clientes")
    {
fetch("http://localhost:8081/api/clientes")
let html2 = ""; 
fs.readFile('clientes.html', 'utf8', (err, data) => {

 if(err) console.log(err);
 html2 = data;

 
});
let j2 =  await getDataClientes();
let responce2 = "";
for (var i2 = 0; i2 < 91; i2++)
{
   try {
       responce2 = responce2 + cadenaClientes(j2[i2]);
   } catch (error) {
       console.log(error);
   }

}
res.write(html2 + responce2 + `</tbody>
</table>
</body>
</html>`);
res.end;
    }  
})
.listen(8081);
  