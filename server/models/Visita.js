const { Schema, model } = require('mongoose')
const { dateFormat } = require('../utils/dateFormat');

const visitaSchema = new Schema(
    {
        email: {
            type: String,
            required: true
        },
        visitante: {
            type: String,
            required: true,
            trim: true
            },
        motivo: {
            type: String,
            required: true,
            trim: true
            },
        acceso: {
            type: Number,
            default: 0
            },            
        createdAt: {
                type: Date,
                default: Date.now,
                get: (date) => dateFormat(date),
              },
    },
    {
        toJSON : {
            virtuals : true,
            getters : true
        },
        id : false
    }    
);

const Visita = model('Visita', visitaSchema);

module.exports = Visita;
