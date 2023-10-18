import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { fetchGetOnePosts } from '@lib/posts/fetchGetOnePosts'

const useUserOnePosts = () => {
    const [userPosts, setUserPosts] = useState([])
    const { state: { id }} = useLocation()

    useEffect(() => {
        if (id) {
            fetchGetOnePosts(id).then(data => setUserPosts(data))
        }
    }, [])

    return {
        userPosts,
        id
    }
}

export default useUserOnePosts