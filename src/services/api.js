import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const Api = createApi({
    reducerPath: 'Api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/',
    }),
    endpoints: (builder) => ({
        postForm: builder.mutation({
            query: (ab) => ({
                url: 'signup',
                method: 'POST',
                body: ab,
                headers: {
                    'Content-Type': 'application/json'
                }
               
            })
        }),
        changePassword: builder.mutation({
            query: (body) => ({
                url: 'changepassword',
                method: 'POST',
                body: body,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }),
        signinForm: builder.mutation({
            query: (ab) => ({
                method: 'POST',
                url: 'login',               
                body: ab,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }),
        postContactUs: builder.mutation({
            query: (av) => ({
                url: "contactus",
                method: 'POST',
                body: av,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }),
        bookEvent: builder.mutation({
            query: (body) => ({
                url: 'user',
                method: 'POST',
                body: body,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }),
        postSelectedEvent: builder.mutation({
            query: (user_id) => ({
                url: 'userevent',
                method: 'POST',
                body: user_id,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }),
        updataUserData: builder.mutation({
            query: ({ id, body }) => ({
                url: `update/${id}`,
                method: 'PATCH',
                body: body,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }),
        getEvent: builder.query({
            query: () => ({
                url: 'events',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }),
        getParticularEvent: builder.query({
            query: (id) => ({
                url: `/events/${id}`,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }),
        getUserDetails: builder.query({
            query: (id) => ({
                url: `/userData/${id}`,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }),
        getBookingData: builder.query({
            async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ,ids) {
              // get a random user
              const randomResult = await fetchWithBQ('users/random')
              if (randomResult.error) return { error: randomResult.error }
              const user = randomResult.data
              const result = await fetchWithBQ( `/events${ids}`)
              return result.data ? { data: result.data } : { error: result.error }
            },
        }),
        getCategories: builder.query({query:()=>({url:'categories',headers:{'Content-Type':'application/json'}})}),
       
        postCategories: builder.mutation({
            query: (category_name) => ({
                url: 'eventbycategory',
                method: 'POST',
                body:JSON.stringify({category_name}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }),
    })
})

export const { usePostFormMutation,
    useGetEventQuery,
    useGetParticularEventQuery,
    useSigninFormMutation,
    usePostContactUsMutation,
    useChangePasswordMutation,
    useUpdataUserDataMutation,
    useBookEventMutation,
    usePostSelectedEventMutation,
    useGetBookingDataQuery,
    useGetUserDetailsQuery,
    useGetCategoriesQuery,
    usePostCategoriesMutation,
} = Api