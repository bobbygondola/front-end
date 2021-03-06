//dependencies
import React, { useContext } from "react";
import { ProjectContext } from "../contexts/ProjectContext";
import { useRouteMatch, useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Route, Link } from "react-router-dom";
//components
import Project from "./Project";
import UpdateForm from "./UpdateForm";
import PrivateRoute from "./PrivateRoute";

const ProjectList = () => {
  const { projects } = useContext(ProjectContext);
  const match = useRouteMatch();
  const history = useHistory();
  const editProject = () => {
    history.push(`/update-project/9`);
  };
  return (
    <div className="projects-container">
      {projects.map((project) => (
        <div key={project.id}>
          <Link  to={`/project/${project.id}`}>
            <Project projects={project} />
          </Link>
        </div>
      ))}
    </div>
  );
};
const deleteProject = (project) => {
  axiosWithAuth()
    .delete(`/projects/${project.id}`)
    .then((res) => {
      window.location.reload();
    })
    .catch((err) => console.log(err, "Could not delete Project"));
};
export default ProjectList;
