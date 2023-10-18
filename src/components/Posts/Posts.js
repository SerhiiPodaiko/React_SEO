import { Link } from 'react-router-dom'

import styles from './Posts.module.scss'
import Post from './Post'
import usePosts from '@hooks/usePosts'
import Preloader from '@ui/Preloader/Preloader'
import Alert from '@ui/Alert/Alert'
import { PAGE_SLUGS } from '@constants/pages'

const Posts = () => {
   const { posts, loading, loadMorePosts, hasMore } = usePosts()

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