import React, { useState } from "react";

export default function LikeButton(props) {
  const { likes } = props;
  const [counters, setcounters] = useState(likes);
  const handleClick = () => {
    setcounters(counters + 1);
  };

  return (
    <button className="project-like-button" onClick={handleClick}>
      ❤️ {counters}
    </button>
  );
}
