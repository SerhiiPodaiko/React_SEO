import Posts from '@components/Posts/Posts'
import { Helmet } from 'react-helmet'

import favicon from '@assets/favicons/favicon-posts.png'

const PostsPage = () => (
    <>
        <Helmet
            title='Posts'
            meta={[{'name': 'description', 'content': 'All posts'}]}
            link={[
                {'rel': 'icon', 'href': favicon},
                {'rel': 'icon', 'sizes': '32x32', 'href': favicon}
            ]}
        />
        <Posts />
    </>
)

export default PostsPage