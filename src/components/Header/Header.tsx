import { FC } from 'react'
import SiteName from 'components/SiteName/SiteName'
import Navbar from 'components/Navbar/Navbar'

const Header: FC = () => {
    return (
        <>
            <SiteName />
            <Navbar />
        </>
    )
}

export default Header
