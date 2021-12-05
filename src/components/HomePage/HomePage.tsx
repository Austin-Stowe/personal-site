import { FC } from 'react'
import photo from 'images/photo.jpg'

const HomePage: FC = () => {
    return (
        <>
            <div className="sidebar">
                <img
                    src={photo}
                    alt="personalPhoto"
                    className="personalPhoto"
                />
            </div>
            <div className="textContent">
                <h1>WELCOME TO MY SITE</h1>
                <h2>
                    Feel free to use the links above to dig into what makes me
                    who I am!
                </h2>
            </div>
        </>
    )
}

export default HomePage
