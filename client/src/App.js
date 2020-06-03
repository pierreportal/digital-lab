import React from "react";
import "./App.css";
import HeadMenu from "./components/HeadMenu";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

function App(props) {
  return (
    <div className="App">
      <HeadMenu />
      <div className="main-container row">
        <SideBar />
        <MainContent user={props.user} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
