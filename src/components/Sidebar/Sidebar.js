import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import cn from 'classnames'
import { useMediaQuery } from 'react-responsive'

import styles from './Sidebar.module.scss'
import useTheme from '@hooks/ui/useTheme'
import Theme from '@components/Theme/Theme'
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
    const [sideBar, setSideBar] = useState(true)
    const location = useLocation()
    const { theme } = useTheme()
    const isTablet = useMediaQuery({ minWidth: 767, maxWidth: 992 })
    const isMobile = useMediaQuery({ maxWidth: 768 })

    const toggleSidebar = () => {
        if (isTablet && !isMobile) return

        if (!sideBar && isMobile) {
            document.querySelector('.content').classList.remove('disabled')
        } else {
            document.querySelector('.content').classList.add('disabled')
        }

        setSideBar(prevState => !prevState)
    }

    const menu = (
        <ul className={cn(styles.sidebarMenu, 'd-flex flex-column gap-4', isTablet && 'justify-content-center')}>
            {
                sidebarLinks?.map(link => (
                    <li key={link.title} className='list-group'>
                        <Link
                            to={link.path}
                            className={cn(styles.sidebarMenuLink,
                                location.pathname === link.path ? styles.sidebarMenuLinkActive : '', !sideBar && styles.sidebarMenuLinkActiveSmall)}
                        >
                            <img src={link.icon} alt={link.title} />
                            {

                                <span className={cn(theme === 'dark' && 'text-white', (isTablet || !sideBar) ? 'd-none' : isMobile && 'd-flex')}>
                                        {link.title}
                                </span>
                            }
                        </Link>
                    </li>
                ))
            }
        </ul>
    )

    return (
        <nav className={cn(styles.sidebar, !sideBar && styles.sidebarSmall)}>
            <header
                className={cn(styles.sidebarHead, 'd-flex align-items-center justify-content-between',
                    !sideBar && 'flex-column pe-0', isTablet && 'flex-column')}>
                <img src={MenuSvg}
                     className={cn(styles.sidebarIcon, !sideBar && 'my-3', isTablet && 'my-3')}
                     onClick={toggleSidebar}
                     alt='Menu'
                />
                { isMobile && !sideBar ? <Theme /> : !isMobile && <Theme /> }
            </header>
            { isMobile && !sideBar ? menu : !isMobile && menu }
        </nav>
    )
}

export default Sidebar