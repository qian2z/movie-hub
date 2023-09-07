import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Homepage from "./pages/Homepage";
import Layout from "./pages/Layout";
import MovieDetailsPage from "./pages/MovieDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "movies/:id", element: <MovieDetailsPage /> },
    ],
  },
]);

export default router;
