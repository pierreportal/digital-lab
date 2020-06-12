import React, { useState } from "react";
import { updateProject } from "../../api/apicalls";

export default function StateProjectButton(props) {
  const { state, id, actualise } = props;

  const possibleStates = ["idea", "wip", "review"];
  const [projectState, setProjectState] = useState(state);

  const handleClick = () => {
    const newState =
      possibleStates[
        (possibleStates.indexOf(projectState) + 1) % possibleStates.length
      ];
    setProjectState(newState);
    if (id) {
      updateProject(id, { state: newState });
      actualise();
    }
  };
  return (
    <button
      onClick={handleClick}
      className={`project-state-button state-${projectState}`}
    >
      {projectState}
    </button>
  );
}
