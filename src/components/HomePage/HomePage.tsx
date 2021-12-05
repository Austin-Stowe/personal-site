import { FC } from 'react';
import photo from 'images/photo.jpg'
import './HomePage.css'

const HomePage: FC = () => {
    return (
        <div className="homePageContainer">
            <img src={photo} alt="personalPhoto" className="personalPhoto"/>
            <div className="homePageContent">
                <h1>
                    WELCOME TO MY SITE
                </h1>
                <h2>
                    Feel free to use the links above to dig into what makes me who I am!
                </h2>
            </div>
        </div>
    )
}

export default HomePage;