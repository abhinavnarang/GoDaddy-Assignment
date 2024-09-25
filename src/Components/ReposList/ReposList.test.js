import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import Repos from "./ReposList";

jest.mock("../../Hooks/useFetch", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("Repos Component", () => {
  const mockRepos = [
    { id: 1, name: "Repo 1", description: "Description 1" },
    { id: 2, name: "Repo 2", description: "Description 2" },
  ];

  it("should display loading indicator when data is being fetched", () => {
    const useFetch = require("../../Hooks/useFetch").default;
    useFetch.mockReturnValue({
      data: [],
      loading: true,
      error: null,
    });

    render(
      <MemoryRouter>
        <Repos />
      </MemoryRouter>
    );

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("should render the repositories after fetching data", async () => {
    const useFetch = require("../../Hooks/useFetch").default;
    useFetch.mockReturnValue({
      data: mockRepos,
      loading: false,
      error: null,
    });

    render(
      <MemoryRouter>
        <Repos />
      </MemoryRouter>
    );

    expect(screen.getByText("Repo 1")).toBeInTheDocument();
    expect(screen.getByText("Repo 2")).toBeInTheDocument();
  });

  it("should filter repositories based on search query", async () => {
    const useFetch = require("../../Hooks/useFetch").default;
    useFetch.mockReturnValue({
      data: mockRepos,
      loading: false,
      error: null,
    });

    render(
      <MemoryRouter>
        <Repos />
      </MemoryRouter>
    );

    expect(screen.getByText("Repo 1")).toBeInTheDocument();
    expect(screen.getByText("Repo 2")).toBeInTheDocument();

    const searchInput = screen.getByPlaceholderText("Search repositories...");
    userEvent.type(searchInput, "1");

    expect(screen.getByText("Repo 1")).toBeInTheDocument();
    expect(screen.queryByText("Repo 2")).not.toBeInTheDocument();
  });
});
