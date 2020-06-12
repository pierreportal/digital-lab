import React, { useState, useEffect } from "react";
import ProjectListItem from "./main-content/ProjectListItem";
import axios from "axios";

// import projects from "../fkData.json";
import { getProjects } from "../api/apicalls";
import NewProjectForm from "./main-content/NewProjectForm";

export default function MainContent(props) {
  const [projectList, setProjectList] = useState([]);

  const actualiseListOfProjects = () => {
    getProjects()
      .then((projects) => setProjectList(projects.reverse()))
      .catch((err) => err);
  };

  useEffect(() => actualiseListOfProjects(), []);

  const listItem = projectList.map((project) => {
    return (
      <ProjectListItem
        key={project._id}
        project={project}
        user={props.user}
        actualise={actualiseListOfProjects}
      />
    );
  });

  return (
    <div className="main column padded">
      <NewProjectForm user={props.user} actualise={actualiseListOfProjects} />
      {listItem}
    </div>
  );
}
