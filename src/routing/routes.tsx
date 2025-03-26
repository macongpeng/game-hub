import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import GameDetailPage from "../pages/GameDetailPage";
import Homepage from "../pages/Homepage";
import Layout from "../pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "game/:slug", element: <GameDetailPage /> },
    ],
  },
]);

export default router;
