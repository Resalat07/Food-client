import { createBrowserRouter } from "react-router-dom";
import Admin from "../../components/Admin/Admin";
import AllProducts from "../../components/AllProducts/AllProducts";
import Blog from "../../components/Blog/Blog";
import Dessert from "../../components/CategoriesProduct/Dessert/Dessert";
import Drinks from "../../components/CategoriesProduct/Drinks/Drinks";
import NonVeg from "../../components/CategoriesProduct/NonVeg/NonVeg";
import Veg from "../../components/CategoriesProduct/Veg/Veg";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Myreviews from "../../components/Myreviews/Myreviews";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import Register from "../../components/Register/Register";

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
                element: <Home></Home>,
                
                
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
                path: '/myReviews',
                element: <PrivateRoute><Myreviews></Myreviews></PrivateRoute>
            },
            {
                path: '/update/:id',
                element:<PrivateRoute> <Update></Update></PrivateRoute>,
                loader: ({ params }) => fetch(`https://food-server-resalat07.vercel.app/reviews/${params.id}`)
            },
            {
                path: '/admin',
                element: <PrivateRoute><Admin></Admin></PrivateRoute>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/veg',
                element:<Veg></Veg>
            },
            {
                path:'/nonVeg',
                element:<NonVeg></NonVeg>
            },
            {
                path:'/dessert',
                element:<Dessert></Dessert>
            },
            {
                path:'/drinks',
                element:<Drinks></Drinks>
            }
        ]

    }
])