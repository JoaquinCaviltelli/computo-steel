import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import LayoutPublic from "../layout/LayoutPublic";
import NewProyect from "../pages/NewProyect";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/nuevo-proyecto",
                element: <NewProyect />,
            }
        ],
    },
])