import React, { useState } from "react";
import { updateProject } from "../../api/apicalls";

export default function LikeButton(props) {
  const { project, ownByUser, actualise } = props;
  const [counters, setcounters] = useState(project.likes);

  const handleClick = (props) => {
    if (ownByUser) return;
    const newAmount = counters + 1;
    setcounters(newAmount);
    updateProject(project._id, { likes: newAmount });
    actualise();
  };

  return (
    <>
      {!ownByUser ? (
        <>
          <button className="project-like-button" onClick={handleClick}>
            ❤️ <span className="like-btn-counter">{counters}</span>
          </button>
        </>
      ) : (
        <>
          <div className="project-like-button" onClick={handleClick}>
            ❤️ <span className="like-btn-counter">{counters}</span>
          </div>
        </>
      )}
    </>
  );
}
