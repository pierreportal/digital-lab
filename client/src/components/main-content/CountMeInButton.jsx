import React, { useState } from "react";
import { updateProject } from "../../api/apicalls";

export default function CountMeInButton(props) {
  const { user, project, actualise } = props;
  const [imIn, setImIn] = useState(
    project.involved.map((u) => u._id).includes(user._id)
  );

  const handleClick = () => {
    const newState = !imIn;
    setImIn(newState);

    const newListInvolved = newState
      ? [...project.involved, user]
      : project.involved.filter((friend) => friend._id !== user._id);
    updateProject(project._id, { involved: newListInvolved });
    actualise();
  };

  return (
    <button
      onClick={handleClick}
      className={`participate-project-btn ${imIn ? "im-in-btn" : ""}`}
    >
      {imIn ? "🤘I'm in!" : "🤙 Count me in"}
    </button>
  );
}
