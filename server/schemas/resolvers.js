//const { Empleado, Visitante } = require('../models');
const { Empleado, Visita } = require("../models");

const resolvers = {
  Query: {
    empleados: async () => {
      return await Empleado.find({});
    },
    empleado: async (parent, { email }) => {
      return await Empleado.findOne({ email: email });
    },
    visitasAll: async () => {
      return await Visita.find({});
    },
    visitasGet: async () => {
      return await Visita.find({
        //createdAt : {$gte: startOfDay(new Date()) , $lte: endOfDay(new Date()) }
      });
    },
    /*     visitasAll: async () => {
      return await Visitante.find({});
    } */

    // visitas: async (parent, { _id }) => {
    // const params = _id ? { _id } : {};
    // return await Visitante.find(v => (v.id === _id));
    // },
  },

  Mutation: {
    addEmpleado: async (parent, args) => {
      return await Empleado.create(args);
    },
    addVisita: async (parent, { email, visitante, motivo }) => {
      return await Visita.create({ email, visitante, motivo });
    },
    updateVisita: async (parent, { id, acceso }) => {
      return await Visita.findOneAndUpdate(
        { _id: id },
        { acceso },
        { new: true }
      );
    },
    /*     addVisita: async (parent, { args }) => {
      return await Visitante.create(args);
    } */
  },
};

module.exports = resolvers;
