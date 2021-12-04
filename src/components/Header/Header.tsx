import React, { FC, ReactNode } from 'react'
import { Link } from 'react-location'
import routes from 'constants/routes'
import './Header.css'

interface IProps {
  routes: {
    title: string
    component: FC
  }[]
}

const Header: FC = () => {
  console.log(Object.entries(routes))
  return (
    <div className="header">
      <div className="headerText">Austin Stowe</div>
      <div className="navbar">
        {Object.entries(routes).map(([title, path]) => (
          <Link key={`linkTo${title}`} className="link" to={path}>
            {title.charAt(0) + title.slice(1).toLowerCase()}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Header