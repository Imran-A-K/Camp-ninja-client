import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/home/Home";
import StudentDashBoard from "../Layout/StudentDashBoard";
import InstructorDashBoard from "../Layout/InstructorDashBoard";
import AdminDashBoard from "../Layout/AdminDashBoard";
import AddClass from "../pages/dashboard/Instructor/AddClass";
import MyClasses from "../pages/dashboard/Instructor/MyClasses";
import ManageClasses from "../pages/dashboard/Admin/ManageClasses";
import ManageUsers from "../pages/dashboard/Admin/ManageUsers";
import Classes from "../pages/Classes";
import Instructors from "../pages/Instructors";
import MySelectedClasses from "../pages/dashboard/Student/MySelectedClasses";
import MyEnrolledClasses from "../pages/dashboard/Student/MyEnrolledClasses";
import Payment from "../pages/dashboard/Student/Payment/Payment";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import StudentRoute from "./StudentRoute";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";
import PaymentHistory from "../pages/dashboard/Student/Payment/PaymentHistory";

export const router = createBrowserRouter([
    {
        
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage />,
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
            },
            {
                path: '/classes',
                element: <Classes />
            },
            {
                path: '/instructors',
                element: <Instructors />
            }
        ]
        
    },
    {
        path: '/student-dashboard',
        element: <PrivateRoute>
            <StudentRoute>
                <StudentDashBoard />
                </StudentRoute></PrivateRoute>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'my-selected-classes',
                element: <MySelectedClasses />
            },
            {
                path: 'my-enrolled-classes',
                element: <MyEnrolledClasses />
            },
            {
                path: 'payment',
                element: <Payment />
            },
            {
                path: 'payment-history',
                element: <PaymentHistory />
            }
        ]
    },
    {
        path: '/instructor-dashboard',
        element: <PrivateRoute>
            <InstructorRoute>
            <InstructorDashBoard />
            </InstructorRoute>
        </PrivateRoute>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'add-class',
                element: <AddClass />
            },
            {
                path: 'my-classes',
                element: <MyClasses />
            }
        ]
    },
    {
        path: '/admin-dashboard',
        element: <PrivateRoute>
            <AdminRoute>
            <AdminDashBoard />
            </AdminRoute>
        </PrivateRoute>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'manage-classes',
                element: <ManageClasses />
            },
            {
                path: 'manage-users',
                element: <ManageUsers />
            }
        ]
    }
])