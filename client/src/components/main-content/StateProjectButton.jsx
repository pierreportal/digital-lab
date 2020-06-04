import React, { useState } from "react";

export default function StateProjectButton(props) {
  const { state } = props;
  const possibleStates = ["idea", "wip", "review"];
  const [projectState, setProjectState] = useState(state);

  const handleClick = () => {
    setProjectState(
      possibleStates[
        (possibleStates.indexOf(projectState) + 1) % possibleStates.length
      ]
    );
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
