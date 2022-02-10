import Project from "../Project/Project";
import projectData from "../../projectData";
import "./Projects.scss";

export interface IProject {
  name: string;
  description: string;
  photos: number[];
}

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div>
        {projectData.map((project: IProject, index: number) => {
          return <Project key={index} project={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
