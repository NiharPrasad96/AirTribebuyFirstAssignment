import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./container/AppLayout";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Login/>
      },
      {
        path: "/:productId",
        element: <ProductDetailsPage />,
      },
      {
        path: "/cart",
        element: <p>User cart</p>,
      },
      {
        path: "/checkout",
        element: <p>Checkout page</p>,
      },
      {
        path:"/home",
        element: <HomePage/>,
      }
    ],
  },
]);

export default function MainAppRouter() {
  return <RouterProvider router={router} />;
}
