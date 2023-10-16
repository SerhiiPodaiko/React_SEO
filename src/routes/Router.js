import { Suspense } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

import Layout from '@components/Layout/Layout'
import Preloader from '@ui/Preloader/Preloader'
import routes from '@routes/routes'
import { PAGE_SLUGS } from '@constants/pages'


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={PAGE_SLUGS.home} element={<Layout />}>
            {routes.map(route => (
                route.index ? (
                    <Route
                        key={route.name}
                        index
                        element={<Suspense fallback={<Preloader />}>{route.element}</Suspense>}
                    />
                ) : (
                    <Route
                        key={route.name}
                        path={route.path}
                        element={
                            <Suspense fallback={<Preloader />}>
                                {route.element}
                            </Suspense>
                        }
                    />
                )
            ))}
        </Route>
    )
)

export default router