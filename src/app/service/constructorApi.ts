import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IConstructor } from "../../Types";

export const constructorApi = createApi({
  reducerPath: "constructorApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fake-server-app-2022.herokuapp.com/",
  }),
  endpoints: (builder) => ({
    getConstructors: builder.query<IConstructor[], {}>({
      query: () => ({
        url: "/constructors",
      }),
    }),
  }),
});

export const { useGetConstructorsQuery } = constructorApi;
