// esto es para crear los campos en la DB


const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nombre: { type: String, required: [true, "nombre obligatorio"] },
  email: { type: String, required: true, unique: true },
  telefono: { type: String }
});

module.exports = mongoose.model('Cliente', clienteSchema);