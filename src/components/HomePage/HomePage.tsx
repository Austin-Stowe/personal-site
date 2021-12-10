import { FC } from 'react'
import './HomePage.css'
import avatar from 'images/photo.jpg'

const HomePage: FC = () => {
    return (
        <div className="homePageContainer">
            <div className="avatar">
                <img alt="avatar" src={avatar} />
            </div>
            <div className="homePageContent">
                <span>Welcome to my site</span>
            </div>
        </div>
    )
}

export default HomePage
