import { FC } from 'react'
import { Link } from 'react-location'

import routes from 'constants/routes'
import './Header.css'

const Header: FC = () => {
    return (
        <nav>
            <h1 className="site-title">Austin Stowe</h1>
            <ul className="nav-list">
                {Object.keys(routes).map((key, index) => (
                    <li key={`${key}Link`} className="nav-list-item">
                        <Link 
                            className="link" 
                            to={routes[key as keyof typeof routes]}
                            style={{animationDelay: `${((index+1) * 500)+2250}ms`}}
                        >
                            {key.charAt(0) + key.slice(1, key.length).toLowerCase()}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Header
