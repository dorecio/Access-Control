//const { Empleado, Visitante } = require('../models');
const { Empleado, Visita } = require('../models');

const resolvers = {
  Query: {
    empleados: async () => {
      return await Empleado.find({});
    },
    empleado: async (parent,{email}) => {
      return await Empleado.findOne({email:email});
    },
    visitasAll: async () => {
      return await Visita.find({});
    }    
/*     visitasAll: async () => {
      return await Visitante.find({});
    } */

   // visitas: async (parent, { _id }) => {
     // const params = _id ? { _id } : {};
     // return await Visitante.find(v => (v.id === _id));
   // },
  },

  Mutation: {
    addEmpleado : async (parent, args) => {
      return await Empleado.create(args);
    },
    addVisita : async (parent, {email, visitante, motivo}) => {
      return await Visita.create({email, visitante, motivo});
  }    
/*     addVisita: async (parent, { args }) => {
      return await Visitante.create(args);
    } */
  },
};

module.exports = resolvers;
