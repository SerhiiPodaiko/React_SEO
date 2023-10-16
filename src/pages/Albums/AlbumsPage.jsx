import Albums from '@components/Albums/Albums'
import { Helmet } from 'react-helmet'

import favicon from '@assets/favicons/favicon-albums.png'

const AlbumsPage = () => (
    <>
        <Helmet
            title='Albums'
            meta={[{'name': 'description', 'content': 'All albums'}]}
            link={[
                {'rel': 'icon', 'href': favicon},
                {'rel': 'icon', 'sizes': '32x32', 'href': favicon}
            ]}
        />
        <Albums />
    </>
)

export default AlbumsPage