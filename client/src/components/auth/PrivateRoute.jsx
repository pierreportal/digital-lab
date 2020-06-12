import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute(props) {
  const { component, user, redirectPath, path } = props;
  return (
    <Route
      path={path}
      render={(props) =>
        user ? <component user={user} /> : <Redirect to={redirectPath} />
      }
    />
  );
}
