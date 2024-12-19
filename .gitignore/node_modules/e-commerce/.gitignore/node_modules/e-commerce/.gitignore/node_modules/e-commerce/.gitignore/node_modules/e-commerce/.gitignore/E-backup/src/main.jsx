
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Products from "./components/pages/Products";
import Product from "./components/pages/Product";
import Home from "./components/pages/Home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/Home",
        element: <Home />,
      },
      { path: "/Products/:id", element: <Products></Products> },
      { path: "/Product/:id", element: <Product /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
