import React, { useState } from "react";

export default function InterestButton(props) {
  const { interests } = props;
  const [counters, setcounters] = useState(interests);
  const handleClick = () => {
    setcounters(counters + 1);
  };

  return (
    <button className="project-interest-button" onClick={handleClick}>
      💡{counters}
    </button>
  );
}
