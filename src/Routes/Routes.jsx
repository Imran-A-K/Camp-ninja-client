import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Nor from "../pages/Nor";

export const router = createBrowserRouter([
    {
        
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Nor />
            }
        ]
        
    }
])