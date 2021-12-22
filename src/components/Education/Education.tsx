import { FC } from 'react'

import EducationContent from './EducationContent'
import './Education.css'

const EducationCard: FC<typeof EducationContent[number]> = ({...content}) => {
  return (
    <>
      <div className="schoolName">
        {content.schoolName}
      </div>
      <div className="degree">
        {content.degreeReceived}
      </div>
      <div className="time">
        {content.startYear} - {content.finishYear}
      </div>
      <div className="projects">
        <div id="projectsHeader">Projects</div>
        <ul>
          {content.projects.map((project, idx) => <li><div className="projectTitle">{project.title}</div><div className="projectDesription">{project.description}</div></li>)}
        </ul>
      </div>
    </>
  )
}

const Education: FC = () => {
    return (
        <div className="educationContainer">
            {EducationContent.map((content, idx) => <div key={`${idx}School`} id={`${content.schoolName}`}><EducationCard {...content}/></div>)}
        </div>
    )
}

export default Education
