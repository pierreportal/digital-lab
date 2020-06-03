import React from "react";
import LikeButton from "./LikeButton";
import InterestButton from "./InterestButton";

export default function ProjectListItem(props) {
  const { project, user } = props;

  const categories = project.category.map((category) => (
    <span key={category}>{category}</span>
  ));

  const tags = project.tags.map((tag) => (
    <span className="tag-span" key={tag}>
      #{tag}
    </span>
  ));

  const projectState = () => {
    const colorMap = {
      wip: ["#feceab", "#ff847c"],
      idea: ["#abf0e9", "#63b7af"],
    };
    return (
      <span
        style={{
          "background-color": colorMap[project.state][0],
          color: colorMap[project.state][1],
        }}
      >
        {project.state}
      </span>
    );
  };

  const description =
    project.description.length > 100
      ? `${project.description.substring(0, 100)} (...)`
      : project.description;

  return (
    <div className="project-list-item column ">
      <div className="space-btw row center-line-align">
        <div className="row center-line-align">
          <h3>{project.title}</h3>
          {projectState()}
          {/* {categories} */}
        </div>
        <div className="row center-line-align">
          <span>{project.author === user.name ? "me" : project.author}</span>
          <div className="project-list-item-author-pic"></div>
        </div>
      </div>

      <div className="project-list-item-inner column">
        <p>{description}</p>
        <div className="row">{tags}</div>
        <div className="row">
          <LikeButton likes={project.likes} />
          <InterestButton interests={project.interests} />
        </div>
      </div>
    </div>
  );
}
