import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1337/api' }),
	endpoints: builder => ({
		getUsers: builder.query({
			query: () => 'users?populate=*',
		}),
		getMarks: builder.query({
			query: () => 'marks?populate=*',
		}),
		getModels: builder.query({
			query: () => 'model?populate=*',
		}),
		getCars: builder.query({
			query: () => 'cars?populate=*',
		}),
		deleteUsers: builder.mutation({
			query: ({ userId, data }) => ({
				method: 'POST',
				url: `users/${userId}`,
				body: { data },
			}),
		}),
	}),
})

export const {
	useGetUsersQuery,
	useGetMarksQuery,
	useGetModelsQuery,
	useGetCarsQuery,
	useDeleteUsersMutation,
} = apiSlice
