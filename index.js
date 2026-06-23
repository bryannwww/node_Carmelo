// este es como el URL de Django, aca pongo todas las rutas y las funciones

require("dotenv").config();

const express = require("express");

const conexion = require("./config/connectiondb");
const enruta = require('./router/clientes.router');
const enruta2 = require('./router/producto.router');
const enruta3 = require('./router/servicio.router');



const app = express();

app.set('view engine', 'ejs');
app.use(express.json());

app.use('/', enruta); 
app.use('/api/clientes/', enruta);
app.use('/api/productos/', enruta2); 
app.use('/api/servicios/', enruta3);



conexion
  .then(() => console.log("Conexion exitosa a MongoDB"))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.render('pages/index.ejs');
});




app.listen(8000, () => {
  console.log("Servidor corriendo en puerto 8000");
});





