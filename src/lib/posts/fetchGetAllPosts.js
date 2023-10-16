import API from '@lib/API'

export const fetchGetAllPosts = async (limit, page) => {
    return API.get(`/posts?_limit=${limit}&_page=${page}`)
        .then((response) => {
            console.log('fetchGetAllPosts SUCCESSFUL', response)

            return response.data
        })
        .catch((error) => {
            console.log('fetchGetAllPosts ERROR', error)
            throw new Error(error)
        })
}
