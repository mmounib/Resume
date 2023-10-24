import ProjectHelper from "../../helpers/ProjectHelper";
import { Project } from "../../state/store";
import "../../styles/Projects.scss";

const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <section id="projects" className="projects-flex">
      <h2>Projects</h2>
      <div className="projects">
        {projects.map((project) => (
          <ProjectHelper
            header={project.title}
            subText={project.subtitle}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
