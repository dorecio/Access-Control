const { Schema, model } = require('mongoose');

const visitanteSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        motivo: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
            trim: true
        },
        fecha: {
            type: Date,
            default: Date.now
        },
     
        
    }
);

const Visitante = model('Visitante', visitanteSchema);

module.exports = Visitante;
