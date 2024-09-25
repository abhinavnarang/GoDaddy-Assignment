import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import RepoCard from "./RepoCard";

const mockRepoDetails = {
  id: 15684874,
  name: "gdapi-perl",
  owner: {
    login: "godaddy",
    avatar_url: "https://avatars.githubusercontent.com/u/1406546?v=4",
  },
  html_url: "https://github.com/godaddy/gdapi-perl",
  language: "Perl",
  description: "A Perl client for Go Daddy® REST APIs",
  visibility: "public",
  forks: 4,
  open_issues: 0,
  watchers: 1,
  created_at: "2014-01-06T20:58:10Z",
  pushed_at: "2015-02-13T00:27:13Z",
  default_branch: "master",
};

describe("RepoCard Component", () => {
  it("should render repo details correctly", () => {
    render(
      <MemoryRouter>
        <RepoCard repoCardDetails={mockRepoDetails} />
      </MemoryRouter>
    );

    expect(screen.getByText(/gdapi-perl/i)).toBeInTheDocument();
    expect(screen.getByText(/godaddy/i)).toBeInTheDocument();
    expect(
      screen.getByText(/A Perl client for Go Daddy® REST APIs/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Language: Perl/i)).toBeInTheDocument();
    expect(screen.getByText(/Visibility: public/i)).toBeInTheDocument();
    expect(screen.getByText(/Forks: 4/i)).toBeInTheDocument();
    expect(screen.getByText(/Open Issues: 0/i)).toBeInTheDocument();
    expect(screen.getByText(/Watchers: 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Date Created: 1\/7\/2014/i)).toBeInTheDocument();
    expect(screen.getByText(/Last Commit: 2\/13\/2015/i)).toBeInTheDocument();
    expect(screen.getByText(/Default Branch: master/i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /View Repository on GitHub/i })
    ).toHaveAttribute("href", "https://github.com/godaddy/gdapi-perl");
  });

  it("should return null if no repo details are provided", () => {
    const { container } = render(
      <MemoryRouter>
        <RepoCard repoCardDetails={{}} />
      </MemoryRouter>
    );

    expect(container).toBeEmptyDOMElement();
  });
});
