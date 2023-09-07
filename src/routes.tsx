import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Layout from "./pages/Layout";
import MovieDetailsPage from "./pages/MovieDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "movies/:id", element: <MovieDetailsPage /> },
    ],
  },
]);

export default router;
