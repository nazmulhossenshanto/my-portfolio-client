import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout/RootLayout";
import Home from "../components/pages/Home/Home";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";

export const routes = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/projects/:slug',
                element: <ProjectDetails></ProjectDetails>
            }
        ]
    }
])