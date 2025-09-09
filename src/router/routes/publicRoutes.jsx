import { lazy } from "react";
import Home from "../../views/pages/Home";
import Unauthorised from "../../views/Unauthorised";

const Login = lazy(() => import("/src/views/auth/Login"));
const Register = lazy(() => import("/src/views/auth/Register"));
const AdminLogin =lazy(()=>import("/src/views/auth/adminLogin"))
const Success = lazy(()=> import('../../views/Success')) 

const publicRoutes = [
    { path: "/", element: <Home/>,ability:['admin','seller'] },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/admin/login", element: <AdminLogin /> },
    { path: "/unauthorised", element: <Unauthorised /> },
    { path : '/success?', element : <Success/> }
];

export default publicRoutes;
