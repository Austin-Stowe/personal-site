import { FC } from 'react'
import { Link } from 'react-location'
import { default as NavLinks } from 'constants/routes'

const Navbar: FC = () => {
    return (
        <>
            <div className="navbar">
                <div className="navMenu">
                    {Object.entries(NavLinks).map(([title, path]) => (
                        <Link key={`linkTo${title}`} className="link" to={path}>
                            {title.charAt(0) + title.slice(1).toLowerCase()}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Navbar
