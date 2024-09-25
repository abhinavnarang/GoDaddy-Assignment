import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Repo from "./Repo";

const mockNavigate = jest.fn();
jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useNavigate: () => mockNavigate,
}));

describe("Repo Component", () => {
  const mockRepo = {
    id: 1,
    name: "Test Repo",
    description: "",
  };

  const mockHandleSelect = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the repo name and default description", () => {
    render(
      <MemoryRouter>
        <Repo repo={mockRepo} handleSelect={mockHandleSelect} />
      </MemoryRouter>
    );

    expect(screen.getByText("Test Repo")).toBeInTheDocument();
    expect(screen.getByText("Description: - -")).toBeInTheDocument();
  });

  it("should render the repo description if provided", () => {
    const repoWithDescription = {
      ...mockRepo,
      description: "Test description",
    };

    render(
      <MemoryRouter>
        <Repo repo={repoWithDescription} handleSelect={mockHandleSelect} />
      </MemoryRouter>
    );

    expect(
      screen.getByText("Description: Test description")
    ).toBeInTheDocument();
  });

  it("should call handleSelect and navigate when clicked", () => {
    render(
      <MemoryRouter>
        <Repo repo={mockRepo} handleSelect={mockHandleSelect} />
      </MemoryRouter>
    );

    const repoElement = screen.getByText("Test Repo");
    userEvent.click(repoElement);

    expect(mockHandleSelect).toHaveBeenCalledTimes(1);
    expect(mockHandleSelect).toHaveBeenCalledWith(mockRepo);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith("Test Repo");
  });
});
