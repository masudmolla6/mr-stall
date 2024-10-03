import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../page/Home/Home/Home";
import Products from "../../page/Products/Products/Products";
import ProductDetails from "../../page/Products/ProductDetails/ProductDetails";
import Login from "../../page/Login/Login";
import SignUp from "../../page/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/products", element: <Products></Products> },
      {
        path: "/products/:id",
        element: <ProductDetails></ProductDetails>,
          loader: ({params}) => {
            return fetch(
              `http://localhost:5000/products/${params.id}`
            );
        }
      },
      {
          path: "/login",
          element:<Login></Login>
      },
      {
            path: "/signup",
            element:<SignUp></SignUp>
      }
    ],
  },
]);



export default router;