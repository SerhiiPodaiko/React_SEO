import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Preloader from '@ui/Preloader/Preloader'
import { PAGE_SLUGS } from '@constants/pages'
import { fetchGetAllAlbums } from '@lib/albums/fetchGetAllAlbums'

const Albums = () => {
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        fetchGetAllAlbums().then(data => setAlbums(data))
    }, [])

    if (!albums) return <Preloader />
    
    return (
        <section>
            <div className='container'>
                <header className='mb-4 d-flex align-items-center justify-content-between'>
                    <Link to={PAGE_SLUGS.home} className='btn btn-outline-primary'>Back to home</Link>
                    <h4>All albums: {albums.length}</h4>
                </header>
                <div className='row d-flex gap-2'>
                    {
                        albums.map(album => (
                            <div key={album.id} className='col-12 p-3 border rounded'>
                                <span>{album.title}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Albums