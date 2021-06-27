const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Valor = new Schema({
    usuario: {type: String},
    temperatura: {type: Number},
    presencia: {type: Number},
    fecha: {type: Date, default: Date.now}
});

module.exports =mongoose.model('iot', Valor);