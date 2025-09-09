// import { useSelector } from "react-redux";
// import { Navigate, Outlet } from "react-router-dom";

// const ProtectedRoute = ({route,Children}) => {
//     const { userInfo } = useSelector(state=>state.auth); // Fetch user data from context

//     if (!userInfo) {
//         return <Navigate to="/login" replace />;
//     }

//     if (!userInfo.role===route.role) {
//         return <Navigate to="/unauthorized" replace />;
//     }

//     return <Children />;
// };

// export default ProtectedRoute;



// // import React, { Suspense } from 'react'
// // import { useSelector } from 'react-redux'
// // import { Navigate } from 'react-router-dom'

// // const ProtectRoute = ({route,children}) => {
// //     const {role,userInfo} = useSelector(state=>state.auth)

// //     if(role){
// //        if(userInfo){
// //         if(userInfo.role===route.role){
// //             return <Suspense fallback={null}>{children}</Suspense>
// //         }
// //         else{
// //             return <Navigate to="/unauthorised" replace/>
// //         }
// //        }
// //     }else{
// //         return <Navigate to="/login"/>
// //     }
// // }

// // export default ProtectRoute
// // import React, { Suspense } from 'react';
// // import { useSelector } from 'react-redux';
// // import { Navigate } from 'react-router-dom';

// // const ProtectRoute = ({ route, children }) => {
// //     const { userInfo } = useSelector(state => state.auth);

// //     if (!userInfo) {
// //         return <Navigate to="/login" replace />;
// //     }

// //     if (userInfo.role !== route.role) {
// //         return <Navigate to="/unauthorised" replace />;
// //     }

// //     return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
// // };

// // export default ProtectRoute;
