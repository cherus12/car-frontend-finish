import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: 'localhost:3000', headers: {} }),
	tagTypes: ['users'],
	endpoints: () => ({}),
})
