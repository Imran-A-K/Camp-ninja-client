import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Nor from "../pages/Nor";
import Login from "../pages/shared/Login";

export const router = createBrowserRouter([
    {
        
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Nor />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
        
    }
])