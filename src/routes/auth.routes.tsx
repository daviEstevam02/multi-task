import { Redirect, Route, Switch } from "react-router-dom";

import { Login } from "../pages/login";
import { OnePassCodeAuthentication } from "../pages/login/OnePassCodeAuthentication"

export function AuthRoutes() {
  const routes = [
    {
      id: 1,
      name: "Login",
      path: "/",
      component: Login,
    },
    {
      id: 2,
      name: "OnePassCodeAuthentication",
      path: "/OnePassCodeAuthentication",
      component: OnePassCodeAuthentication,
    },
  ];

  return (
    <Switch>
      {routes.map((router) => (
        <Route
          key={router.path}
          path={router.path}
          component={router.component}
          exact
        />
      ))}
      <Redirect to="/" />
    </Switch>
  );
}
