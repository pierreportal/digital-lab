import React, { useState } from "react";

export default function LikeButton(props) {
  const { likes, ownByUser } = props;
  const [counters, setcounters] = useState(likes);
  const handleClick = () => {
    if (ownByUser) return;
    setcounters(counters + 1);
  };

  return (
    <>
      {!ownByUser ? (
        <>
          <button className="project-like-button" onClick={handleClick}>
            ❤️ {counters}
          </button>
        </>
      ) : (
        <>
          <div className="project-like-button" onClick={handleClick}>
            ❤️ {counters}
          </div>
        </>
      )}
    </>
  );
}
