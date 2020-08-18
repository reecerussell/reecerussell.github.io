import React from "react";
import { RouteProps } from "react-router-dom";

const AboutView = React.lazy(() => import("./views/about"));

const routes: RouteProps[] = [
    {
        path: "/",
        exact: true,
        component: AboutView,
    },
];

export default routes;
