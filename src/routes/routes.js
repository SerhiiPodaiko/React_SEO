import { lazy } from 'react'
import { PAGE_SLUGS } from '@constants/pages'

const UsersPage = lazy(() => import('@pages/Users/UsersPage'))
const PostsPage = lazy(() => import('@pages/Posts/PostsPage'))
const AlbumsPage = lazy(() => import('@pages/Albums/AlbumsPage'))
const SettingsPage = lazy(() => import('@pages/Settings/SettingsPage'))
const UserOnePostsPage = lazy(() => import('@pages/User/UserPostsPage'))
const UserOneAlbumsPage = lazy(() => import('@pages/User/UserAlbumsPage'))
const NotFoundPage = lazy(() => import('@pages/404/NotFoundPage'))

const routes = [
    { path: PAGE_SLUGS.home, index: true, element: <UsersPage />, name: 'Users' },
    { path: PAGE_SLUGS.posts, element: <PostsPage />, name: 'Posts' },
    { path: PAGE_SLUGS.albums, element: <AlbumsPage /> , name: 'Albums' },
    { path: PAGE_SLUGS.settings, element: <SettingsPage />,  name: 'Settings' },
    { path: `${PAGE_SLUGS.user}/:id/posts`, element: <UserOnePostsPage />,  name: 'UserOnePosts' },
    { path: `${PAGE_SLUGS.user}/:id/albums`, element: <UserOneAlbumsPage />,  name: 'UserOneAlbums' },
    { path: PAGE_SLUGS.notFound, element: <NotFoundPage />,  name: 'NotFound' },
]

export default routes