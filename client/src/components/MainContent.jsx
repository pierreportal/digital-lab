import React from "react";
import ProjectListItem from "./main-content/ProjectListItem";

import projects from "../fkData.json";
import NewProjectForm from "./main-content/NewProjectForm";

export default function MainContent(props) {
  const listItem = projects.projects.map((project) => {
    return (
      <ProjectListItem key={project} project={project} user={props.user} />
    );
  });
  return (
    <div className="main column padded">
      <NewProjectForm />
      {listItem}
    </div>
  );
}
