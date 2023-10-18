import { useEffect, useState } from 'react'
import { fetchGetAllPosts } from '@lib/posts/fetchGetAllPosts'

const usePosts = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)

    const postsPerPage = 10

    useEffect(() => {
        loadPosts(currentPage)
    }, [currentPage])

    const loadPosts = (page) => {
        setLoading(true)
        fetchGetAllPosts(postsPerPage, page).then(newPosts => {
            if (newPosts.length === 0) {
                setHasMore(false)
            }
            setPosts(prevPosts => [...prevPosts, ...newPosts])
            setLoading(false)
        })
    }

    const loadMorePosts = () => {
        setCurrentPage(currentPage + 1)
    }

    return {
        posts,
        loading,
        hasMore,
        loadMorePosts
    }
}

export default usePosts