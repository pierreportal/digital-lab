import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./auth/Login";
import Signup from "./auth/Signup";

export default function Routing(props) {
  return (
    <Switch>
      <Route
        exact
        path={"/"}
        component={() =>
          props.user ? <Home {...props} /> : <Redirect to={"/login"} />
        }
      />
      <Route
        exact
        path={"/login"}
        component={() =>
          !props.user ? <Login {...props} /> : <Redirect to={"/"} />
        }
      />
      <Route
        exact
        path={"/signup"}
        component={() =>
          !props.user ? <Signup {...props} /> : <Redirect to={"/"} />
        }
      />
    </Switch>
  );
}
