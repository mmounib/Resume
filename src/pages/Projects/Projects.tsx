import ProjectHelper from "../../helpers/ProjectHelper";
import "../../styles/Projects.scss";

const Projects = () => {
  return (
    <section className="projects-flex">
      <h2>Projects</h2>
      <div className="projects">
        <ProjectHelper
          header="FT_TRANSCENDENCE"
          subText="full stack online ping pong website"
          description="An Online Ping Pong game with real time chat application using socket.io build entirely with
Typescript."
          technologies="Typescript - ReactJs
        - Javascript - ThreeJs
        - PostgresQL - NestJs"
        />
        <ProjectHelper
          header="car showcasing application"
          subText="full stack nextJs website"
          description="A Car Showcasing App with user authentication build entirely with Next using Typescript with
          the help of NextAuth."
          technologies="Typescript - NextJs
        - NextAuth.js"
        />
        <ProjectHelper
          header="booking application"
          subText="full stack MERN application"
          description="A Booking Application like Airbnb with user authentication and database usage."
          technologies="Typescript - ReactJs
        - NoSQL - MongoDB
        - Javascript - ExpressJs"
        />
      </div>
    </section>
  );
};

export default Projects;
