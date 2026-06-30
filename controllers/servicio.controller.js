const Servicio = require('../models/servicio.model');
// Estas ya son las funciones que mas adelante utilizaremos como ENDPOINTS
exports.consultar = async (req, res) => {
  const data = await Servicio.find();
  res.render('pages/services.ejs', { servicios: data });
};

exports.obtenerPorId = async (req, res) => {
  const data = await Servicio.findById(req.params.id);
  res.json(data);
};

exports.crear = async (req, res) => {
  const data = new Servicio(req.body);
  await data.save();
  res.json(data);
};

exports.actualizar = async (req, res) => {
  const data = await Servicio.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(data);
};

exports.eliminar = async (req, res) => {
  try {
    const id = req.params.id; 
    await Producto.findByIdAndDelete(id); // O el nombre de tu modelo
    
    // REDIRECCIÓN CLAVE: Que vuelva a la lista de servicios
    res.redirect('/servicios'); 

  } catch (error) {
    console.error(error);
    res.status(500).send("Error al eliminar");
  }
};

exports.formulario = async(req,res) => {
  res.render('pages/registrar_servicios')
}