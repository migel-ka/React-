import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Pages/Home";
import Facts from "./components/Pages/Facts";
import { NotFound } from "./components/Pages/NotFound";
import Recipes from "./components/Pages/Recipes";
import Combinations from "./components/Pages/Combinations";
import History from "./components/Pages/History";
import Beans from "./components/Pages/Beans";
import Bean from "./components/Bean";
import Layout from "./components/Layout";
import { Loader } from "./components/Loader";
import RecipiePage from "./components/RecipiePage";

const router = createBrowserRouter([
    {
        path: "/React-",
        element: <Layout />,
        loader : Loader,
        children :[
            { index:true, element: <Home /> },
            { path: "beans", element: <Beans /> },
            { path: "bean/:id", element: <Bean /> },
            { path: "recipie/:id", element: <RecipiePage />},
            { path: "facts", element: <Facts /> },
            { path: "combinations", element: <Combinations /> },
            { path: "recipes", element: <Recipes /> },
            { path: "history", element: <History /> },
            {  path: "*", element: <NotFound /> },
        ]
    }
]);

export default router;