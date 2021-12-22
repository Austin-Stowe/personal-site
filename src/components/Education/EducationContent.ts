interface IProject {
  title: string;
  description: string;
}

interface IEducationContent {
  schoolName: string;
  startYear: number;
  finishYear: number;
  degreeReceived: string; 
  projects: IProject[]
}

const EducationContent: IEducationContent[] = [
  {
    schoolName: 'Washington State University',
    startYear: 2017,
    finishYear: 2019,
    degreeReceived: 'Bachelors of Science, Mechanical Engineering', 
    projects: [
      {
        title: 'Test Title', 
        description: 'Test description'
      }
    ]
  }
];

export default EducationContent;