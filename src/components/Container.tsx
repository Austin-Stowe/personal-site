import { FC } from 'react'
import { Router, ReactLocation, Outlet } from 'react-location'
import { ReactLocationDevtools } from 'react-location-devtools'
import Header from './Header'
import './Container.css'
import ApplicationRoutes from 'constants/ApplicationRoutes'

const location = new ReactLocation()

const Container: FC = () => {
    return (
        <Router location={location} routes={ApplicationRoutes}>
            <Header />
            <div className="container">
                <Outlet />
                <ReactLocationDevtools initialIsOpen={false} />
            </div>
        </Router>
    )
}

export default Container
