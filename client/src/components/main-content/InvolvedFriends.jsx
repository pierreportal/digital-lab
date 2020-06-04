import React from "react";

export default function InvolvedFriends(props) {
  const { involved } = props;
  const heads = involved.map((friend, i) => {
    return (
      <div key={i} className="propject-involved-head">
        {friend[0]}
      </div>
    );
  });
  return <div className="row">{heads}</div>;
}
