import { gql } from '@apollo/client';

export const ADD_EMPLEADO = gql`
  mutation addEmpleado($nameText: String!) {
    addEmpleado(name: $nameText) {
      _id
      name
    }
  }
`;
