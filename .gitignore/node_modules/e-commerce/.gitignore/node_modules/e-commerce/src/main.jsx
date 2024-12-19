import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Products from "./components/Products/Products.jsx";
import Home from "./components/Home/Home.jsx";
import Product from "./components/Product/Product.jsx";
import { Provider } from "react-redux";
import Store from "./reducer/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/Product/:id", element: <Product /> },
      { path: "/Products/:id", element: <Products/> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
  <Provider store={Store}>
  <App></App>
  </Provider>
  </RouterProvider>
);
