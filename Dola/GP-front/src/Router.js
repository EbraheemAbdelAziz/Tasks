import {
    Navigate,
    createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/home/Home.js";
import Login from "./pages/Auth/Login.js";
import Register from "./pages/Auth/Register.js";
import App from "./App.js";

  

export const routes = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        children:[
            {
                path: "/",
                element: <Home />,
            },
            {
                  path: "/login",
                  element: <Login />,
            },
            {
                  path: "/register",
                  element: <Register />,
            },
        ],
    },
    {
        path:"*",
        element:<Navigate to={"/"} />,
    }
    
  ]);