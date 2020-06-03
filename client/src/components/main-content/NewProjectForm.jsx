import React from "react";
import LikeButton from "./LikeButton";
import InterestButton from "./InterestButton";

export default function NewProjectForm() {
  //   const { project, user } = props;

  //   const categories = project.category.map((category) => (
  //     <span key={category}>{category}</span>
  //   ));

  const tags = [1, 2, 3, 4].map((tag) => (
    <span contentEditable={true} className="tag-span" key={tag}>
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
          backgroundColor: colorMap["idea"][0],
          color: colorMap["idea"][1],
        }}
      >
        idea
      </span>
    );
  };

  const description = " project short description";

  return (
    <div className="project-list-item column new-project-template">
      <div className=" row center-line-align">
        <div className="row center-line-align">
          <div className="project-list-item-author-pic"></div>
          <span className="project-list-author-name">me</span>
        </div>
        <div className="row center-line-align">
          <h3 contentEditable={true}>Title</h3>
          {projectState()}
          {/* {categories} */}
        </div>
      </div>

      <div className="project-list-item-inner column">
        <p contentEditable={true}>{description}</p>
        <div className="row">{tags}</div>
        <div className="row center-content">
          <button className="new-project-template-add-btn">+</button>
        </div>
      </div>
    </div>
  );
}
