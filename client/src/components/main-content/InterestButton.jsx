import React, { useState } from "react";

export default function InterestButton(props) {
  const { interests, ownByUser } = props;
  const [counters, setcounters] = useState(interests);
  const handleClick = () => {
    if (ownByUser) return;
    setcounters(counters + 1);
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
