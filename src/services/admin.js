import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const Admin = createApi({
    reducerPath: 'Admin',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/',
    }),
    endpoints: (builder) => ({
        userlogininfo: builder.query({
            query: () => ({
                url: 'userlogininfo',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }               
            })
        }),
        signup: builder.mutation({
            query: (ab) => ({
                url: 'adminsignup',
                method: 'POST',
                body: ab,
                headers: {
                    'Content-Type': 'application/json'
                }               
            })
        }),
        signin: builder.mutation({
            query: (ab) => ({
                url: 'adminlogin',
                method: 'POST',
                body: ab,
                headers: {
                    'Content-Type': 'application/json'
                }               
            })
        }),         
        eventUser: builder.mutation({
            query: (event_id) => {
                return {
                    url:'eventuser',
                    method: 'POST',
                    body: JSON.stringify({event_id}),
                    headers: {
                        'Content-Type':'application/json'
                    }           
                }                    
           }
        }),
        addEvent: builder.mutation({
            query: ({ profile, title, s_date, e_date, time, location,category_name, description }) => {
                const body = new FormData();
                body.append('profile',profile)
                body.append('title',title)
                body.append('s_date',s_date)
                body.append('e_date',e_date)
                body.append('time',time)
                body.append('location',location)
                body.append('category_name',category_name)
                body.append('description', description)
                return {
                    url: 'event',
                    method: 'POST',
                    body: body                   
                }                         
            }
        }),              
        postCategory: builder.mutation({
            query: ({ category,category_name , url }) => {
                const body = new FormData();
                body.append('category',category)
                body.append('category_name',category_name)
                body.append('url',url)
                return {
                    url: 'category',
                    method: 'POST',
                    body: body                   
                }                         
            }
        }),              
    })
})

export const { 
    useUserlogininfoQuery,
    useSignupMutation,
    useSigninMutation,
    useAddEventMutation,
    useEventUserMutation,
    usePostCategoryMutation
} = Admin