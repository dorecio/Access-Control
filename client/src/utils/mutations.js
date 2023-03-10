import { gql } from '@apollo/client';

export const ADD_EMPLEADO = gql`
  mutation addEmpleado($nameText: String!) {
    addEmpleado(name: $nameText) {
      _id
      name
    }
  }
`;

export const ADD_VISITA = gql`
  mutation addVisita($emailText: String!, $visitanteText: String!, $motivoText: String!) {
    addVisita(email: $emailText, visitante: $visitanteText, motivo: $motivoText) {
      _id
      email
      visitante
      motivo
    }
  }
`;

export const UPDATE_VISITA = gql`
mutation updateVisita($id: ID!, $acceso: Int!) {
  updateVisita(id: $id, acceso: $acceso) {
    _id
    email
    visitante
    motivo
    acceso
    createdAt
  }
}
`;