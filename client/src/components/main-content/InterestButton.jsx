import React, { useState } from "react";
import { updateProject } from "../../api/apicalls";

export default function InterestButton(props) {
  const { project, ownByUser, actualise } = props;
  const [counters, setcounters] = useState(project.interests);

  const handleClick = () => {
    if (ownByUser) return;
    const newAmount = counters + 1;
    setcounters(newAmount);
    updateProject(project._id, { interests: newAmount });
    actualise();
  };

  return (
    <>
      {!ownByUser ? (
        <>
          <button className="project-interest-button" onClick={handleClick}>
            💡{counters}
          </button>
        </>
      ) : (
        <>
          <div className="project-interest-button" onClick={handleClick}>
            💡{counters}
          </div>
        </>
      )}
    </>
  );
}
