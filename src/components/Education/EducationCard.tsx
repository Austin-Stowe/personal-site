import { FC } from 'react'
import EducationContent from './EducationContent'

import ProjectCard from './ProjectCard'

const EducationCard: FC<typeof EducationContent[number]> = ({...content}) => {
  return (
    <div className="educationCard">
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
        <ProjectCard {...content.projects}/>
      </div>
    </div>
  )
}

export default EducationCard