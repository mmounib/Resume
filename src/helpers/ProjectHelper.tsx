import { projectsInterface } from "../interfaces/ProjectsInterface";
import "../styles/Projects.scss";
const ProjectHelper = ({
  header,
  subText,
  description,
  technologies,
}: projectsInterface) => {
  return (
    <div className="sub-project">
      <div className="project-header">
        <h3>{header},</h3>
        <span>{subText}</span>
      </div>
      <div className="project-description">
        <p>Description</p>
        <span> - {description}</span>
      </div>
      <div className="project-tech">
        <p>Technologies & Frameworks</p>
        <span> - {technologies}</span>
      </div>
    </div>
  );
};

export default ProjectHelper;
