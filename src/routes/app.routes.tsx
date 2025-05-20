import { Redirect, Route, Switch } from "react-router-dom";

import { Home } from "../pages/home";
import { CreateTask } from "../pages/task/CreateTask";
import Layout from "../components/Layout/layout";

export function AppRoutes() {
  const routes = [
    {
      id: 1,
      name: "Home",
      path: "/",
      component: Home,
    },
    {
      id: 5,
      name: "Create Work Item",
      path: "/work-item/create",
      component: CreateTask,
    },
  ];

  return (
    <Layout>
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
    </Layout>
  );
}
