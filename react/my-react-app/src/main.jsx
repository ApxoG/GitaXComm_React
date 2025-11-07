import { createRoot } from "react-dom/client";
import React from "react";
import "./App.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import AllProducts from "./pages/AllProducts.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
import Login from "./pages/Login.jsx";
import Admin from "./pages/Admin.jsx";
import { jwtDecode } from "jwt-decode";
import { UserProvider } from "./context/userContext.jsx";

const token = localStorage.getItem("token");
let decodedToken = null;
try {
  decodedToken = token ? jwtDecode(token) : null;
} catch (error) {
  console.error("Error decoding token:", error);
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <AllProducts /> },
      { path: "products/:id", element: <SingleProduct /> },
      { path: "login", element: <Login /> },
      { path: "admin", element: decodedToken ? <Admin /> : <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
