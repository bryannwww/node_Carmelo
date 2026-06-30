const Producto = require('../models/producto.model');

exports.consultar = async (req, res) => {
  const data = await Producto.find();
  res.render('pages/productos.ejs', { productos: data });
};

exports.obtenerPorId = async (req, res) => {
  const data = await Producto.findById(req.params.id);
  res.json(data);
};

exports.crear = async (req, res) => {
try {
    if (!nombre || !nombre.trim() || !precio || !precio.trim() || !stock || !stock.trim()) {
      return res.render('formulario', { mensaje: "Todos los campos son obligatorios." });
    }
    let producto_nuevo = {
      nombre : req.body.nombre,
      producto :req.body.email,
      stock : req.body.telefono
    }; 
    
    const producto = await modeloProducto.insertOne(producto_nuevo); 
    
    if(producto){
      res.render('/formulario', {mensaje:"Registro Creado"}); 
    } else { 
      res.render('/formulario', {mensaje:"Hubo un error"});
    }
  } catch (error) {
  
    res.status(500).json({error: error.mensaje})
  }
};


exports.actualizar = async (req, res) => {
  const data = await Producto.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(data);
};

exports.eliminar = async (req, res) => {
  await Producto.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Producto eliminado" });
};

exports.formulario = async(req,res) => {
  res.render('pages/registrar_producto')
}