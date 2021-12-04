import { FC } from 'react'
import { Router, ReactLocation, Outlet } from 'react-location'
import Header from './Header/Header'

const location = new ReactLocation()

const Container: FC = () => {
  return (
    <>
      <Router location={location} routes={[]}>
        <Header />
        <Outlet />
      </Router>
    </>
  )
}

export default Container
