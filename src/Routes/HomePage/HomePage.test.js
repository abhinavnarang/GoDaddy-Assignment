import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

jest.mock("../../Components/Header/Header", () => () => <div>Mock Header</div>);
jest.mock("../../Components/ReposList/ReposList", () => (props) => (
  <div>Mock Repos List</div>
));

describe("HomePage Component", () => {
  it("should render the Header and ReposList components", () => {
    const mockHandleSelect = jest.fn();

    render(<HomePage handleSelect={mockHandleSelect} />);

    expect(screen.getByText(/Mock Header/i)).toBeInTheDocument();
    expect(screen.getByText(/Mock Repos List/i)).toBeInTheDocument();
  });

  it("should pass handleSelect prop to ReposList", () => {
    const mockHandleSelect = jest.fn();

    render(<HomePage handleSelect={mockHandleSelect} />);

    const reposListComponent = screen.getByText(/Mock Repos List/i);
    expect(reposListComponent).toBeInTheDocument();
  });
});
