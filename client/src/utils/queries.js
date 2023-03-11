import { gql } from '@apollo/client';

export const QUERY_EMPLEADOS = gql`
  query getEmpleados {
    empleados {
      _id
      name
      departamento
      tel
      email
    }
  }
`;

export const QUERY_VISITAS_GET = gql`
  query visitasGet {
    visitasGet {
      _id
      email
      visitante
      motivo
      acceso
      createdAt
    }
  }
`;

