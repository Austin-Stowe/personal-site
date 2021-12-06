import routes from 'constants/routes'
import { FC } from 'react'
import { Router, ReactLocation, Outlet, Route } from 'react-location'
import { ReactLocationDevtools } from 'react-location-devtools'
import Education from './Education/Education'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import HomePage from './HomePage/HomePage'
import Personal from './Personal/Personal'
import Professional from './Professional/Professional'

const location = new ReactLocation()

const reactLocationRoutes: Route[] = [
    {
        path: routes.HOME,
        element: <HomePage />,
    },
    {
        path: routes.PERSONAL,
        element: <Personal />,
    },
    {
        path: routes.PROFESSIONAL,
        element: <Professional />,
    },
    {
        path: routes.EDUCATION,
        element: <Education />,
    },
]

const Container: FC = () => {
    return (
        <div className="container">
            <Router location={location} routes={reactLocationRoutes}>
                <Header />
                <Outlet />
                <ReactLocationDevtools initialIsOpen={false} />
                <Footer />
            </Router>
        </div>
    )
}

export default Container
