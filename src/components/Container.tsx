import { FC } from 'react'
import { Router, ReactLocation, Outlet, Route } from 'react-location'
import { ReactLocationDevtools } from 'react-location-devtools'
import Header from './Header/Header'

const location = new ReactLocation()

const reactLocationRoutes: Route[] = []

const Container: FC = () => {
    return (
        <div className="container">
            <Router location={location} routes={reactLocationRoutes}>
                <Header />
                <Outlet />
                <ReactLocationDevtools initialIsOpen={false} />
            </Router>
        </div>
    )
}

export default Container
