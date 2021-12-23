import { FC } from 'react'

import EducationCard from './EducationCard'
import EducationContent from './EducationContent'
import './Education.css'

const Education: FC = () => {
    return (
        <div className="educationContainer">
            {EducationContent.map((content, idx) => <div key={`${idx}School`} id={`${content.schoolName}`}><EducationCard {...content}/></div>)}
        </div>
    )
}

export default Education
