import React from "react";
import "./App.css";
import HeadMenu from "./components/HeadMenu";
import Footer from "./components/Footer";
import Routing from "./components/Routing";

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <HeadMenu user={props.user} />
      <Routing user={props.user} />
      <Footer />
    </div>
  );
}

export default App;
