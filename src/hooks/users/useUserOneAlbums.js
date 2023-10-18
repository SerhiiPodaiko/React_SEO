import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { fetchGetOneAlbums } from '@lib/albums/fetchGetOneAlbums'

const useUserOneAlbums = () => {
    const [userAlbums, setUserAlbums] = useState([])
    const { state: { id }} = useLocation()

    useEffect(() => {
        if (id) {
            fetchGetOneAlbums(id).then(data => setUserAlbums(data))
        }
    }, [])

    return {
        userAlbums,
        id
    }
}

export default useUserOneAlbums