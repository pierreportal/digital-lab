import React from "react";
import LikeButton from "./LikeButton";
import InterestButton from "./InterestButton";
import DeleteStepButton from "./DeleteStepButton";
import StateProjectButton from "./StateProjectButton";
import CountMeInButton from "./CountMeInButton";
import InvolvedFriends from "./InvolvedFriends";

export default function ProjectListItem(props) {
  const { project, user } = props;

  const tags = project.tags.map((tag) => (
    <span className="tag-span" key={tag}>
      #{tag}
    </span>
  ));

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
            {project.author === user.name ? "me" : project.author}
          </span>
        </div>
        <div className="row center-line-align">
          <h3>{project.title}</h3>
          {/* {projectState()} */}
          <StateProjectButton state={project.state} />
          {/* {categories} */}
        </div>
      </div>

      <div className="project-list-item-inner column">
        <p contentEditable={user.name === project.author}>{description}</p>
        <div className="row">{tags}</div>
        <div className="row">
          <LikeButton
            ownByUser={user.name === project.author}
            likes={project.likes}
          />
          <InterestButton
            ownByUser={user.name === project.author}
            interests={project.interests}
          />
          {user.name !== project.author && (
            <CountMeInButton project={project} user={user} />
          )}

          {!!project.involved.length && (
            <InvolvedFriends involved={project.involved} user={user} />
          )}

          {user.name === project.author && <DeleteStepButton />}
        </div>
      </div>
    </div>
  );
}
