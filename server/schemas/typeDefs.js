const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type Empleado {
    _id: ID
    name: String!
    email: String!
    password: String
    permiso: String!
    departamento: String!
    tel: String
    visitas: [Visitante]!
  }
  type Visitante {
    _id: ID
    name: String!
    motivo: String!
    fecha: String!
  }
  type Visita {
    _id: ID!
    email: String
    visitante: String
    motivo: String
    acceso: Int
    createdAt: String
  }
  type Query {
    empleados: [Empleado]!
    empleado(email: String!): Empleado
    visitasAll: [Visitante]
    # visitas(_id:ID!):[Visitante]
    visitasGet: [Visita]!
  }
  type Mutation {
    addEmpleado(
      name: String!
      email: String!
      password: String
      permiso: String!
      departamento: String!
      tel: String
    ): Empleado
    addVisita(email: String!, visitante: String!, motivo: String!): Visita
    updateVisita(id: ID!, acceso: Int!): Visita
  }
`;
module.exports = typeDefs;
