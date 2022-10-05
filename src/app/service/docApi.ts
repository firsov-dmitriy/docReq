import { build } from "@reduxjs/toolkit/dist/query/core/buildMiddleware/cacheLifecycle";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IDocReq, IDocReqSort } from "../../Types";

export const docApi = createApi({
  reducerPath: "docApi",
  tagTypes: ["doc"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fake-server-app-2022.herokuapp.com/",
  }),
  endpoints: (builder) => ({
    getDocReq: builder.query<IDocReq[], IDocReqSort>({
      query: ({ _sort = "constructorsId.length", _order = "desc" }) => ({
        url: "/docReq",
        params: { _sort, _order },
      }),
      providesTags: ["doc"],
    }),
    postDocReq: builder.mutation<{}, IDocReq>({
      query: ({ id, name, constructorsId }) => ({
        method: "POST",
        url: "/docReq",
        body: { id, name, constructorsId },
      }),
      invalidatesTags: ["doc"],
    }),
    getOneDocReq: builder.query<IDocReq, { name: string }>({
      query: ({ name }) => ({
        url: "/docReq",
        params: { name },
      }),
    }),
    updateOneDocReq: builder.mutation<IDocReq, IDocReq>({
      query: ({ id, constructorsId, name }) => ({
        url: `/docReq/${id}`,
        method: "PUT",
        body: { id, name, constructorsId },
      }),
      invalidatesTags: ["doc"],
    }),
  }),
});

export const {
  useGetDocReqQuery,
  usePostDocReqMutation,
  useGetOneDocReqQuery,
  useUpdateOneDocReqMutation,
  useLazyGetOneDocReqQuery,
} = docApi;
