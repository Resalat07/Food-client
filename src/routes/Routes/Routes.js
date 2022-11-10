import { createBrowserRouter } from "react-router-dom";
import Admin from "../../components/Admin/Admin";
import AllProducts from "../../components/AllProducts/AllProducts";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Myreviews from "../../components/Myreviews/Myreviews";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import Register from "../../components/Register/Register";
import Review from "../../components/Review/Review";
import Update from "../../components/Update/Update";
import Main from "../../layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/allProducts',
                element: <AllProducts></AllProducts>,
                loader: () => fetch('https://food-server-iota.vercel.app/services'),
            },
            {
                path: '/productDetails/:id',
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://food-server-iota.vercel.app/services/${params.id}`)
            },
            {
                path: '/reviews',
                element: <Review></Review>
            },
            {
                path: '/myReviews',
                element: <Myreviews></Myreviews>
            },
            {
                path: '/update/:id',
                element: <Update></Update>,
                loader: ({ params }) => fetch(`https://food-server-iota.vercel.app/reviews/${params.id}`)
            },
            {
                path: '/admin',
                element: <Admin></Admin>
            }
        ]

    }
])