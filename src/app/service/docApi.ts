import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IDocReq, IDocReqSort } from "../../Types";

export const docApi = createApi({
  reducerPath: "docApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fake-server-app-2022.herokuapp.com/",
  }),
  endpoints: (builder) => ({
    getDocReq: builder.query<IDocReq[], IDocReqSort>({
      query: ({ _sort = "constructorsId.length", _order = "desc" }) => ({
        url: "/docReq",
        params: { _sort, _order },
      }),
    }),
  }),
});

export const { useGetDocReqQuery } = docApi;
