import { Helmet } from 'react-helmet'
import Users from '@components/Users/Users'
import favicon from '@assets/favicons/favicon-home.png'

const UsersPage = () => (
    <>
        <Helmet
            title='Home | Users'
            meta={[{'name': 'description', 'content': 'All users'}]}
            link={[
                {'rel': 'icon', 'href': favicon},
                {'rel': 'icon', 'sizes': '32x32', 'href': favicon}
            ]}
        />
        <Users />
    </>
)

export default UsersPage