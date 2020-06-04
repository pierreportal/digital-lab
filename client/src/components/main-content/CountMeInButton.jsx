import React, { useState } from "react";

export default function CountMeInButton(props) {
  const { user, project } = props;
  const [imIn, setImIn] = useState(project.involved.includes(user.name));

  const handleClick = () => setImIn(!imIn);

  return (
    <button
      onClick={handleClick}
      className={`participate-project-btn ${imIn ? "im-in-btn" : ""}`}
    >
      {imIn ? "🤘I'm in!" : "🤙 Count me in"}
    </button>
  );
}
