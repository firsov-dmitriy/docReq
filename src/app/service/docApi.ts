import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IDocReq } from "../../Types";

export const docApi = createApi({
  reducerPath: "docApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fake-server-app-2022.herokuapp.com/",
  }),
  endpoints: (builder) => ({
    getDocReq: builder.query<IDocReq[], {}>({
      query: () => ({
        url: "/docReq",
      }),
    }),
  }),
});

export const { useGetDocReqQuery } = docApi;
