import { lazy } from "react";
import Orders from "../../views/admin/Orders";
import Categories from "../../views/admin/Categories"
import Sellers from "../../views/admin/Sellers";
import PaymentRequest from "../../views/admin/PaymentRequest";
import DeactiveSellers from "../../views/admin/DeactiveSellers";
import SellerRequest from "../../views/admin/SellerRequest";
import LiveChat from "../../views/admin/LiveChat";
import SellerDetails from "../../views/admin/SellerDetails";
import OrderDetails from "../../views/admin/OrderDetails";
const AdminDashboard = lazy(() => import("../../views/admin/AdminDashboard"));

const adminRoutes = [
    { path: "/admin/dashboard", element: <AdminDashboard/>,role:'admin'},
    { path: "/admin/dashboard/orders", element: <Orders/>,role:'admin'},
    { path: "/admin/dashboard/category", element: <Categories/>,role:'admin'},
    { path: "/admin/dashboard/sellers", element: <Sellers/>,role:'admin'},
    { path: "/admin/dashboard/payment-request", element: <PaymentRequest/>,role:'admin'},
    { path: "/admin/dashboard/deactive-sellers", element: <DeactiveSellers/>,role:'admin'},
    { path: "/admin/dashboard/sellers-request", element: <SellerRequest />,role:'admin'},
    { path: "/admin/dashboard/seller/details/:sellerId", element: <SellerDetails />,role:'admin'},
    { path: "/admin/dashboard/live-chat", element: <LiveChat/>,role:'admin'},
    { path: 'admin/dashboard/live-chat/:sellerId',element : <LiveChat/> ,role : 'admin'},
    { path: "/admin/dashboard/order/details/:orderId", element: <OrderDetails/>,role:'admin'},
];




export default adminRoutes;
