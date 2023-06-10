import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/home/Home";
import StudentDashBoard from "../Layout/StudentDashBoard";
import InstructorDashBoard from "../Layout/InstructorDashBoard";
import AdminDashBoard from "../Layout/AdminDashBoard";
import AddClass from "../pages/dashboard/Instructor/AddClass";

export const router = createBrowserRouter([
    {
        
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
        
    },
    {
        path: '/student-dashboard',
        element: <StudentDashBoard />,
        children: [
            {
                path: 's',
                element: <div>dd</div>
            }
        ]
    },
    {
        path: '/instructor-dashboard',
        element: <InstructorDashBoard />,
        children: [
            {
                path: 'add-class',
                element: <AddClass />
            }
        ]
    },
    {
        path: '/admin-dashboard',
        element: <AdminDashBoard />,
        children: [
            {
                path: 's',
                element: <div>dd</div>
            }
        ]
    }
])