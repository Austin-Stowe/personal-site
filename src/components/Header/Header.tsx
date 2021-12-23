import { FC } from 'react'
import { Link } from 'react-location'

import ApplicationRoutes from 'constants/ApplicationRoutes'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header: FC = () => {
    return (
        <>
        <div className="mobileSiteTitle">Austin Stowe</div>
        <div className="navbar">
            <div className="site-title">Austin Stowe</div>
            <div className="nav-list">
                {ApplicationRoutes.map((route, idx) => {
                    return (
                        <div
                            key={`${route.title}Link`}
                            className="nav-list-item"
                        >
                            <Link
                                className="link"
                                to={route.path}
                                style={{
                                    animationDelay: `${
                                        (idx + 1) * 500 + 2250
                                    }ms`,
                                }}
                            >
                                <div className="navIcon">
                                    <FontAwesomeIcon icon={route.icon} />
                                </div>
                                {route.title}
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default Header
