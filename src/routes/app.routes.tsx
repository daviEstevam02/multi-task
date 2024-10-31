import { Redirect, Route, Switch } from "react-router-dom";

import { Headbar } from "../components/HeadBar";
import { Home } from "../pages/home";
import { Sidebar } from "../components/Sidebar";
import { useState } from "react";
import { CreateTask } from "../pages/task/CreateTask";

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
      component: CreateTask
    }
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
        <Sidebar toggleSidebar={toggleSidebar} isOpen={isSidebarOpen}/>
        <Headbar toggleSidebar={toggleSidebar} isOpen={isSidebarOpen}/>
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
    </>
  );
}
