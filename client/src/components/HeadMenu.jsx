import React from "react";

export default function MeadMenu(props) {
  return (
    <div className="head-menu row padded">
      <h1>digitalab</h1>

      <div>
        <ul>
          <li>Project created: (n)</li>
          <li>Involved in (n) projects!</li>
        </ul>
      </div>
      <div className="row center-line-align">
        <span className="project-list-author-name">{props.user.name}</span>
        <div className="project-list-item-author-pic"></div>
      </div>
    </div>
  );
}
