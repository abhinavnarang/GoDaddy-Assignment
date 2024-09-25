import { render, screen } from "@testing-library/react";
import ErrorPage from "./ErrorPage";

describe("ErrorPage Component", () => {
  it("should render the error message correctly", () => {
    render(<ErrorPage />);

    expect(screen.getByRole("heading", { name: /oops!/i })).toBeInTheDocument();
    expect(
      screen.getByText(/sorry, an unexpected error has occurred./i)
    ).toBeInTheDocument();
  });
});
