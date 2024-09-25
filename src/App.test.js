import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Routes/HomePage/HomePage";
import RepoCard from "./Routes/RepoCard/RepoCard";
import ErrorPage from "./Routes/ErrorPage/ErrorPage";

const mockRepoDetails = {
  id: 15684874,
  node_id: "MDEwOlJlcG9zaXRvcnkxNTY4NDg3NA==",
  name: "gdapi-perl",
  full_name: "godaddy/gdapi-perl",
  private: false,
  owner: {
    login: "godaddy",
    id: 1406546,
    node_id: "MDEyOk9yZ2FuaXphdGlvbjE0MDY1NDY=",
    avatar_url: "https://avatars.githubusercontent.com/u/1406546?v=4",
    html_url: "https://github.com/godaddy",
  },
  html_url: "https://github.com/godaddy/gdapi-perl",
  description: "A Perl client for Go Daddy® REST APIs",
  fork: false,
  created_at: "2014-01-06T20:58:10Z",
  updated_at: "2023-01-27T21:45:05Z",
  pushed_at: "2015-02-13T00:27:13Z",
  language: "Perl",
  stargazers_count: 1,
  watchers_count: 1,
  forks_count: 4,
  open_issues_count: 0,
  license: {
    key: "mit",
    name: "MIT License",
  },
  archived: true,
  visibility: "public",
  default_branch: "master",
};
describe("App component routing", () => {
  it("should render the HomePage by default", () => {
    const routes = [
      {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
    ];
    const router = createMemoryRouter(routes, { initialEntries: ["/"] });

    render(<RouterProvider router={router} />);

    expect(screen.getByText(/GoDaddy's Repositories/i)).toBeInTheDocument(); // Update based on the actual content of HomePage
  });

  it("should render RepoCard with mock repo details when navigating to /:name", async () => {
    const routes = [
      {
        path: "/:name",
        element: <RepoCard repoCardDetails={mockRepoDetails} />,
        errorElement: <ErrorPage />,
      },
    ];
    const router = createMemoryRouter(routes, {
      initialEntries: ["/gdapi-perl"],
    });

    render(<RouterProvider router={router} />);

    expect(await screen.findByText(/gdapi-perl/i)).toBeInTheDocument();
    expect(
      screen.getByText(/A Perl client for Go Daddy® REST APIs/i)
    ).toBeInTheDocument();
  });

  it("should render ErrorPage for unknown routes", () => {
    const routes = [
      {
        path: "*",
        element: <ErrorPage />,
      },
    ];
    const router = createMemoryRouter(routes, { initialEntries: ["/unknown"] });

    render(<RouterProvider router={router} />);

    expect(screen.getByText(/Oops!/i)).toBeInTheDocument(); // Update based on the actual content of ErrorPage
  });
});
