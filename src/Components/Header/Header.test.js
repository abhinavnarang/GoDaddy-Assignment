import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header Component", () => {
  it("should render the header with the title", () => {
    render(<Header />);
    expect(screen.getByText("GoDaddy's Repositories")).toBeInTheDocument();
  });

  it("should have the correct HTML structure", () => {
    const { container } = render(<Header />);
    expect(container.querySelector("header")).toBeInTheDocument();
    expect(container.querySelector("h1")).toBeInTheDocument();
  });
});
