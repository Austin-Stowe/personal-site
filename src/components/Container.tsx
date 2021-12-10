import { FC } from 'react'
import { Router, ReactLocation, Outlet, Route } from 'react-location'
import { ReactLocationDevtools } from 'react-location-devtools'
import routes from 'constants/routes'
import Header from './Header'
import HomePage from './HomePage'

const location = new ReactLocation()

const reactLocationRoutes: Route[] = [
    {
        path: routes.HOME,
        element: <HomePage />,
    },
]

const Container: FC = () => {
    return (
        <Router location={location} routes={reactLocationRoutes}>
            <Header />
            <div className="container">
                <Outlet />
                <ReactLocationDevtools initialIsOpen={false} />
            </div>
        </Router>
    )
}

export default Container
