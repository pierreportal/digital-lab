import React from "react";
import SideBar from "./SideBar";
import MainContent from "./MainContent";
// import HeadMenu from "./HeadMenu";

export default function Home(props) {
  return (
    <div className="main-container row">
      {/* <HeadMenu user={props.user} /> */}
      <SideBar />
      <MainContent user={props.user} />
    </div>
  );
}
