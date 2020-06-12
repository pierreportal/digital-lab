import React from "react";
import LikeButton from "./LikeButton";
import InterestButton from "./InterestButton";
import DeleteStepButton from "./DeleteStepButton";
import StateProjectButton from "./StateProjectButton";
import CountMeInButton from "./CountMeInButton";
import InvolvedFriends from "./InvolvedFriends";
import { updateProject } from "../../api/apicalls";

export default function ProjectListItem(props) {
  const { project, user, actualise } = props;

  const tags = project.tags.map((tag) => (
    <span className="tag-span" key={tag}>
      #{tag}
    </span>
  ));

  const updateDescription = (e) => {
    const { innerText } = e.target;
    updateProject(project._id, { description: innerText });
    actualise();
  };

  const description =
    project.description.length > 100
      ? `${project.description.substring(0, 100)} (...)`
      : project.description;

  return (
    <div className="project-list-item column ">
      <div className=" row center-line-align">
        <div className="row center-line-align">
          <div className="project-list-item-author-pic"></div>
          <span className="project-list-author-name">
            {project.author._id === user._id ? "me" : project.author.username}
          </span>
        </div>
        <div className="row center-line-align">
          <h3>{project.title}</h3>
          <StateProjectButton
            id={project._id}
            state={project.state}
            actualise={actualise}
          />
        </div>
      </div>

      <div className="project-list-item-inner column">
        <p
          contentEditable={user._id === project.author._id}
          suppressContentEditableWarning={true}
          onBlur={updateDescription}
        >
          {description}{" "}
        </p>
        <div className="row">{tags}</div>
        <div className="row">
          <LikeButton
            ownByUser={user._id === project.author._id}
            project={project}
            actualise={actualise}
          />
          {/* <InterestButton
            ownByUser={user._id === project.author._id}
            project={project}
            actualise={actualise}
          /> */}
          {user._id !== project.author._id && (
            <CountMeInButton
              project={project}
              user={user}
              actualise={actualise}
            />
          )}

          {!!project.involved.length && (
            <InvolvedFriends involved={project.involved} user={user} />
          )}

          {user._id === project.author._id && (
            <DeleteStepButton
              state={project.state}
              id={project._id}
              actualise={actualise}
            />
          )}
        </div>
      </div>
    </div>
  );
}
