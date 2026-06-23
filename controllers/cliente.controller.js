const Cliente = require('../models/cliente.model');

exports.consultar = async (req, res) => {
  const data = await Cliente.find();
  res.render('pages/clientes.ejs', { clientes: data });

};

exports.obtenerPorId = async (req, res) => {
  const data = await Cliente.findById(req.params.id);
  res.json(data);
};

exports.crear = async (req, res) => {
  try {
    if (!nombre || !nombre.trim() || !email || !email.trim() || !telefono || !telefono.trim()) {
      return res.render('formulario', { mensaje: "Todos los campos son obligatorios." });
    }
    let cliente_nuevo = {
      nombre : req.body.nombre,
      email :req.body.email,
      telefono : req.body.telefono
    }; 
    
    const clientes = await modeloCliente.insertOne(cliente_nuevo); 
    
    if(clientes){
      res.render('/formulario', {mensaje:"Registro Creado"}); 
    } else { 
      res.render('/formulario', {mensaje:"Hubo un error"});
    }
  } catch (error) {
  
    res.status(500).json({error: error.mensaje})
  }
};

exports.actualizar = async (req, res) => {
  const data = await Cliente.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(data);
};

exports.eliminar = async (req, res) => {
  await Cliente.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Cliente eliminado" });
};

exports.home = async(req,res) =>{
  res.render("pages/index")
}

exports.formulario = async(req,res) => {
  res.render('pages/registrar_clientes')
}
