import { Outlet, useNavigate } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'

import Sidebar from '@components/Sidebar/Sidebar'
import ErrorFallback from '@components/Error/ErrorFallback'
import { PAGE_SLUGS } from '@constants/pages'

const Layout = () => {
    const navigate = useNavigate()

    return (
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => navigate(PAGE_SLUGS.home)}>
            <div className='d-flex vh-100'>
                <Sidebar />
                <main className='content w-100 px-2 px-md-5 py-4 overflow-y-auto'>
                    <Outlet />
                </main>
            </div>
        </ErrorBoundary>
    )
}

export default Layout