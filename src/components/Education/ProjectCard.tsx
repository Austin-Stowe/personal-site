import { FC } from 'react'

import EducationContent from './EducationContent'

const ProjectCard: FC<typeof EducationContent[number]['projects']> = (projects) => {
  return (
    <ul>
      {
        Object.values(projects).map((project, idx) =>     
          <li key={`project${idx}`} className="project">
            <div className="projectTitle">{project.title}</div>
            <div className="projectDesription">{project.description}</div>
          </li>
        )
      }
    </ul>
  )
}

export default ProjectCard