import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import styles from './Posts.module.scss'
import Post from './Post'
import Preloader from '@ui/Preloader/Preloader'
import Alert from '@ui/Alert/Alert'
import { PAGE_SLUGS } from '@constants/pages'
import { fetchGetAllPosts } from '@lib/posts/fetchGetAllPosts'

const Posts = () => {
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

    return (
        <section className={styles.posts}>
            <header className='d-flex align-items-center justify-content-between'>
                <Link to={PAGE_SLUGS.home} className='btn btn-outline-primary'>
                    Back
                </Link>
                <h4>All Posts: {posts.length}</h4>
            </header>
            <div className='pt-3 px-2 px-md-0 conteiner d-flex flex-column gap-2'>
                { posts.map(post => <Post key={post.id} post={post} />)}
            </div>
            {hasMore ? (
                <button
                    disabled={loading}
                    className='d-flex mx-auto mt-2 btn text-center btn-outline-primary'
                    onClick={loadMorePosts}>
                    {loading ? <Preloader /> : 'Load more'}
                </button>
            ): <Alert>There are no more posts</Alert>}
        </section>
    )
}

export default Posts