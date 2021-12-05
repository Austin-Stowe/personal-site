import routes from 'constants/routes'
import { FC } from 'react'
import { Router, ReactLocation, Outlet, Route } from 'react-location'
import Header from './Header/Header'
import HomePage from './HomePage/HomePage'
import Personal from './Personal/Personal'

const location = new ReactLocation()

const reactLocationRoutes: Route[] = [
  {
    path: routes.HOME,
    element: <HomePage/>
  },
  {
    path: routes.PERSONAL,
    element: <Personal/>
  }
]

const Container: FC = () => {
  return (
    <div className="container">
      <Router location={location} routes={reactLocationRoutes}>
        <Header />
        <div className="content">

        <Outlet />
        </div>
      </Router>
    </div>
  )
}

export default Container
