import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Preloader from '@ui/Preloader/Preloader'
import favicon from '@assets/favicons/favicon-home.png'
import { PAGE_SLUGS } from '@constants/pages'
import { fetchGetOnePosts } from '@lib/posts/fetchGetOnePosts'

const UserPostsPage = () => {
    const [userPosts, setUserPosts] = useState([])
    const { state: { id }} = useLocation()

    useEffect(() => {
        if (id) {
            fetchGetOnePosts(id).then(data => setUserPosts(data))
        }
    }, [])

    if (!userPosts) return  <Preloader />

    return (
        <>
            <Helmet
                title={`User ${id} | Posts`}
                meta={[{'name': 'description', 'content': 'All posts one user'}]}
                link={[
                    {'rel': 'icon', 'href': favicon},
                    {'rel': 'icon', 'sizes': '32x32', 'href': favicon}
                ]}
            />
            <section>
                <header>
                    <div className='container d-flex align-items-center justify-content-between'>
                        <Link to={PAGE_SLUGS.home} className='btn btn-outline-primary'>
                            Back to home
                        </Link>
                        <h4>Posts: {userPosts.length}</h4>
                    </div>
                </header>
                <div className='pt-3 px-2 px-md-0 conteiner d-flex flex-column gap-2'>
                    {
                        userPosts.map(userPost => (
                            <div key={userPost.id} className='p-3 border rounded'>
                                <p>{userPost.title}</p>
                                <p>{userPost.body}</p>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default UserPostsPage