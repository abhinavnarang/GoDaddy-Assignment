import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Routes/HomePage/HomePage";
import ErrorPage from "./Routes/ErrorPage/ErrorPage";
import RepoCard from "./Routes/RepoCard/RepoCard";
import { useState } from "react";

function App() {
  const [repoDetails, setRepoDetails] = useState({});
  const handleSelect = (repoDetails) => {
    setRepoDetails(repoDetails);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage handleSelect={handleSelect} />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/:name",
      element: <RepoCard repoCardDetails={repoDetails} />,
      errorElement: <ErrorPage />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
