import React from "react";
import "./App.css";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import { productsData } from "./api/Api";
import 'react-toastify/dist/ReactToastify.css';


import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Login from "./pages/Login";
import Modal from "./components/Modal";

const Layout = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <ScrollRestoration/>
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productsData,
      },
      {
        path: "/product/:id",
        element: <ProductDetails/>,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/modal",
        element: <Modal/>
      }
    ],
  },
]);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
