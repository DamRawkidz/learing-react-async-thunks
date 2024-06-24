import { faker } from '@faker-js/faker';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const pause = (duration: number) => {
    return new Promise((reslove) => {
        setTimeout(reslove, duration)
    })
    }

const albumsApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({
            baseUrl: 'http://localhost:3005',
            fetchFn: async (...args) => {
                    await pause(1000)
                    return fetch(...args)
            }
    }),
    endpoints(builder){        
        return {
            removeAlbum: builder.mutation({
                invalidatesTags: (result, error ,album) => {
                    return [{ type: 'Album', id: album.id }] as any
                },
                query: (album) => {
                    return {
                        url:   `/albums/${album.id}`,
                        method: 'DELETE'
                    }    
                }
            }),
            addAlbum: builder.mutation({
                invalidatesTags: (result, error, user) => {
                    return [{ type: 'album', id: user.id}] as any
                },
                query: (user) => {
                    return {
                        url: '/albums',
                        method: 'POST',
                        body: {
                            userId: user.id,
                            title: faker.commerce.productName()
                        }
                    }
                }
            }),
            featchAlbums: builder.query({
                providesTags: (result, error, user) => {
                    const tags = result.map((album: any) => {
                        return {
                            type: 'album',
                            id: album.id
                        }
                    })

                    tags.push({  type: 'UserAlbums', id: user.id})

                    return tags
                },
                query: (user) => {
                    return {
                        url: '/albums',
                        params: {
                            userId: user.id
                        },
                        method: 'GET'
                    }
                }
            })
        }
    }
});




export const  { 
    useFeatchAlbumsQuery, 
    useAddAlbumMutation,
    useRemoveAlbumMutation
} = albumsApi

export  { albumsApi }