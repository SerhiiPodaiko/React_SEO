import { Helmet } from 'react-helmet'

import Settings from '@components/Settings/Settings'
import favicon from '@assets/favicons/favicon-settings.png'

const SettingsPage = () => (
    <>
        <Helmet
            title='Settings'
            meta={[{'name': 'description', 'content': 'Settings, versions website'}]}
            link={[
                {'rel': 'icon', 'href': favicon},
                {'rel': 'icon', 'sizes': '32x32', 'href': favicon}
            ]}
        />
        <Settings />
    </>
)

export default SettingsPage