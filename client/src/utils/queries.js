import { gql } from '@apollo/client';

export const QUERY_EMPLEADOS = gql`
  query getEmpleados {
    empleados {
      _id
      name
      departamento
      tel
    }
  }
`;
