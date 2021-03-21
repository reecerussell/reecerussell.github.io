import React from "react";
import { RouteProps } from "react-router-dom";

const AboutView = React.lazy(() => import("./views/about"));
const ResumeView = React.lazy(() => import("./views/resume"));
const ProjectsView = React.lazy(() => import("./views/projects"));

const routes: RouteProps[] = [
    {
        path: "/",
        component: AboutView,
    },
    {
        path: "/resume",
        component: ResumeView,
    },
    {
        path: "/projects",
        component: ProjectsView,
    },
];

export default routes;
