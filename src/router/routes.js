import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import routesData from "./routeData";

const ReturnRoutes = () => {
  let routes = useRoutes(routesData);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <ReturnRoutes />
    </Router>
  );
};

export default AppWrapper;
