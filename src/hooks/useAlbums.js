import { useEffect, useState } from 'react'
import { fetchGetAllAlbums } from '@lib/albums/fetchGetAllAlbums'

const usePosts = () => {
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        fetchGetAllAlbums().then(data => setAlbums(data))
    }, [])

    return {
        albums
    }
}

export default usePosts