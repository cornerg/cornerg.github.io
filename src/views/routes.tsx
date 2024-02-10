import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "./home/Home";
import Work from "./work/Work";
import React from "react";
import About from "./About/About";
import Certification from "./Certification/Certification";

export const ROUTES = {
    Home: {
        path: "/",
        title: "Home"
    },
    About: {
        path: "/about",
        title: "About"
    },
    Work: {
        path: "/work",
        title: "Work"
    },
    Certification: {
        path: "/certification",
        title: "Certification"
    }
} as const

export const router = createBrowserRouter([
    {
        path: ROUTES.Home.path,
        element: <App/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: ROUTES.Work.path,
                element: <Work/>
            },
            {
                path: ROUTES.About.path,
                element: <About/>
            },
            {
                path: ROUTES.Certification.path,
                element: <Certification/>
            }
        ]
    },
]);