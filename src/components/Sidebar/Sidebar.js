import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import cn from 'classnames'

import styles from './Sidebar.module.scss'
import { PAGE_SLUGS } from '@constants/pages'
import HomeSvg from '@assets/icons/home.svg'
import PostsSvg from '@assets/icons/posts.svg'
import SettingsSvg from '@assets/icons/settings.svg'
import MenuSvg from '@assets/icons/menu.svg'
import AlbumsSvg from '@assets/icons/albums.svg'

const sidebarLinks = [
    { title: 'Home', path: PAGE_SLUGS.home, icon: HomeSvg },
    { title: 'Posts', path: PAGE_SLUGS.posts, icon: PostsSvg },
    { title: 'Albums', path: PAGE_SLUGS.albums, icon: AlbumsSvg },
    { title: 'Settings', path: PAGE_SLUGS.settings, icon: SettingsSvg }
]

const Sidebar = () => {
    const [showSideBar, setShowSideBar] = useState(true)
    const location = useLocation()

    const toggleSidebar = () => {
        if (!showSideBar) {
            document.querySelector('body').classList.add('disabled')
        } else {
            document.querySelector('body').classList.remove('disabled')
        }

        setShowSideBar(prevState => !prevState)
    }

    return (
        <nav className={cn(styles.sidebar, showSideBar ? styles.sidebar : styles.sidebarHide)}>
            <img src={MenuSvg} onClick={toggleSidebar} className={styles.sidebarMenu} alt='Menu' />
            {
                sidebarLinks?.map(link => (
                    <Link
                        key={link.title}
                        to={link.path}
                        className={cn(styles.sidebarLink, location.pathname === link.path ? styles.sidebarLinkActive : '')}
                    >
                        <img src={link.icon} alt={link.title} />
                        <span>
                            {link.title}
                        </span>
                    </Link>
                ))
            }
        </nav>
    )
}

export default Sidebar