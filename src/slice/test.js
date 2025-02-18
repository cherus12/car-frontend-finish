import { baseApi } from './baseApi'

export const usersApi = baseApi.injectEndpoints({
	endpoints: builder => ({
		getUsers: builder.query({
			query: () => 'users',
			providesTags: ['users'],
		}),
		addUsers: builder.mutation({
			query: ({ id, data }) => ({
				url: `users/${id}`,
				method: 'POST',
				body: { data },
			}),
			invalidatesTags: (_, __, id) => [
				{
					type: 'users',
					id: id,
				},
			],
		}),
	}),
	overrideExisting: true,
})
