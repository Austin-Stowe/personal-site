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
                <span id="jobTitle">Full Stack Developer</span>
                <span id="educationTitle">BS Mechanical Engineering</span>
                <span>E.I.T Licensed in Washington State</span>
            </div>
        </div>
    )
}

export default HomePage
