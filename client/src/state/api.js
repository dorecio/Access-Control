import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//adaptar en base al proyecto
export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    reducerPath: "adminApi",
    tagTypes: ["User", "Donaciones"],
    endpoints: (build) => ({
        getUser: build.query({
            //ruta en base a server/index
            query: (id) => `general/user/${id}`,
            providesTags: ["User"],
        }),
        getDonaciones: build.query({
            //index de server busca las rutas y luego routes client y se va a controllers
            query: () => "client/donaciones",
            providesTags: ["Donaciones"],
        }),
        getAcceso: build.query({
            //index de server busca las rutas y luego routes client y se va a controllers
            query: () => "client/Acceso",
            providesTags: ["Acceso"],
        }),
        getAgregar: build.query({
            //index de server busca las rutas y luego routes client y se va a controllers
            query: () => "client/Agregar",
            providesTags: ["Agregar"],
        }),
        getLista: build.query({
            //index de server busca las rutas y luego routes client y se va a controllers
            query: () => "client/Lista",
            providesTags: ["Lista"],
        }),
    }),
});

export const { useGetUserQuery, useGetDonacionesQuery } = api;