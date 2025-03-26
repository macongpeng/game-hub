import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage";
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
      { path: "/games/:gameId", element: <GameDetailPage /> },
    ],
  },
]);

export default router;
