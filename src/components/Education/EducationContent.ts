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
        title: 'Senior Capstone', 
        description: 'Designed and built a system that analyzed workfloor efficiency using OpenCV to anonymously track the positions of humans within any video feed.'
      },
      {
        title: 'Regenerative Steam Power Plant',
        description: 'Analyzed an existing steam power plant and implemented a regenerative power generation cycle based on iterative calculations and optimizations.'
      },
      {
        title: 'Autonomous Line Following Car',
        description: 'Designed, built, and programmed an arduino based robot to follow a track and use a searching algorithm to get back onto the track when obstacles are encountered.'
      }
    ]
  },
  {
    schoolName: 'Everett Community College',
    startYear: 2013,
    finishYear: 2017,
    degreeReceived: 'Associates of Science, Engineering', 
    projects: [
      {
        title: 'Test Title', 
        description: 'Test description'
      }
    ]
  }
];

export default EducationContent;