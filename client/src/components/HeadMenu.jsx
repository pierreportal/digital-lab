import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default function MeadMenu(props) {
  const logOut = () => {
    return axios
      .get("auth/logout")
      .then(() => window.location.reload(false))
      .catch((err) => err);
  };
  return (
    <>
      {props.user && (
        <div className="head-menu row padded">
          <h1>digitalab</h1>
          <div>
            <ul>
              <li>Project created: (n)</li>
              <li>Involved in (n) projects!</li>
            </ul>
            <button onClick={logOut}>Log out</button>
          </div>
          <div className="row center-line-align">
            <span className="project-list-author-name">
              {props.user.username}
            </span>
            <div className="project-list-item-author-pic"></div>
          </div>
        </div>
      )}
    </>
  );
}
