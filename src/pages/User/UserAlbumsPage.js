import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Preloader from '@ui/Preloader/Preloader'
import favicon from '@assets/favicons/favicon-home.png'
import { PAGE_SLUGS } from '@constants/pages'
import { fetchGetOneAlbums } from '@lib/albums/fetchGetOneAlbums'

const UserAlbumsPage = () => {
    const [userAlbums, setUserAlbums] = useState([])
    const { state: { id }} = useLocation()

    useEffect(() => {
        if (id) {
            fetchGetOneAlbums(id).then(data => setUserAlbums(data))
        }
    }, [])

    if (!userAlbums) return  <Preloader />

    return (
        <>
            <Helmet
                title={`User ${id} | Albums`}
                meta={[{'name': 'description', 'content': 'All albums one user'}]}
                link={[
                    {'rel': 'icon', 'href': favicon},
                    {'rel': 'icon', 'sizes': '32x32', 'href': favicon}
                ]}
            />
            <section>
                <header className='d-flex align-items-center justify-content-between'>
                    <Link to={PAGE_SLUGS.home} className='btn btn-outline-primary'>
                        Back
                    </Link>
                    <h4>Albums: {userAlbums.length}</h4>
                </header>
                <div className='pt-3 conteiner d-flex flex-column gap-2'>
                    {
                        userAlbums.map(userPost => (
                            <div key={userPost.id} className='p-3 border rounded'>
                                <p>{userPost.title}</p>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default UserAlbumsPage