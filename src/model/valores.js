const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Valor = new Schema({
    temperatura: String,
    presencia: String,
    fecha: Date
});

module.exports =mongoose.model('iot', Valor);