import React, { useState, useEffect } from "react";
import StateProjectButton from "./StateProjectButton";
import { postNewProject } from "../../api/apicalls";

export default function NewProjectForm(props) {
  const { user, actualise } = props;
  const [title, setTitle] = useState("New Project");
  const [description, setDescription] = useState("Project short description");
  const [tags, setTags] = useState(["collab", "project"]);
  const [state, setState] = useState("idea");

  const checkKeys = (e) => {
    if (e.key === "Enter") e.preventDefault();
  };

  const clearTitle = () => setTitle("");
  const clearDescription = () => setDescription("");

  const changeTitle = (e) => {
    const value = e.target.innerText;
    if (!value) {
      setTitle("New Project");
      return;
    }
    if (value === title) return;
    setTitle(value);
  };
  const changeDescription = (e) => {
    const value = e.target.innerText;
    if (!value) {
      setDescription("Project short description");
      return;
    }
    if (value === description) return;
    setDescription(value);
  };
  const changeTags = (e) => {
    const value = e.target.innerText.split(" ");
    if (e.target.innerText === `#${tags.join("  #")}`) return;
    setTags(value);
  };
  const changeState = (newState) => {
    setState(newState);
  };

  const addProject = () => {
    if (title === "New Project" || description === "Project short description")
      return;
    postNewProject({ title, description, tags, state, author: user });
    actualise();
    setTitle("New Project");
    setDescription("Project short description");
  };

  return (
    <div className=" new-project-form-container column">
      <div className="project-list-item column new-project-template">
        <div className=" row center-line-align">
          <div className="row center-line-align">
            <div className="project-list-item-author-pic"></div>
            <span className="project-list-author-name">me</span>
          </div>
          <div className="row center-line-align">
            <h3
              onClick={clearTitle}
              onKeyDown={checkKeys}
              onBlur={changeTitle}
              contentEditable={true}
              suppressContentEditableWarning={true}
            >
              {title}
            </h3>
            <StateProjectButton state={"idea"} changeState={changeState} />
          </div>
        </div>

        <div className="project-list-item-inner column">
          <p
            onClick={clearDescription}
            onKeyDown={checkKeys}
            onBlur={changeDescription}
            contentEditable={true}
            suppressContentEditableWarning={true}
          >
            {description}
          </p>
          <div className="row">
            <span
              onKeyDown={checkKeys}
              spellCheck={false}
              contentEditable={true}
              suppressContentEditableWarning={true}
              className="tag-span"
              onBlur={changeTags}
            >
              #{tags.join("  #")}
            </span>
          </div>
        </div>
      </div>
      <div className="row center-content">
        <button onClick={addProject} className="new-project-template-add-btn">
          +
        </button>
      </div>
    </div>
  );
}
