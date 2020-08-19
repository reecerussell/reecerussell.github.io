import React from "react";
import { RouteProps } from "react-router-dom";

const AboutView = React.lazy(() => import("./views/about"));
const ResumeView = React.lazy(() => import("./views/resume"));

const routes: RouteProps[] = [
    {
        path: "/",
        component: AboutView,
    },
    {
        path: "/resume",
        component: ResumeView,
    },
];

export default routes;
