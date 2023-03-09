const { Schema, model } = require('mongoose');
//const bcrypt = require('bcrypt');

const empleadoSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            minlength: 5
        },
        permiso: {
            type: String,
            required: true
        },
        departamento: {
            type: String,
            required: true
        },
        tel: {
            type: String,
            required: true
        },
        visitas: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Visitante',
            },
        ],
    }
);
const Empleado = model('Empleado', empleadoSchema);

module.exports = Empleado;
