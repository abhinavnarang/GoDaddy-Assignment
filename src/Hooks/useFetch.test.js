import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import useFetch from "./useFetch";

const MockComponent = ({ url }) => {
  const { data, loading, error } = useFetch(url);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {data.map((repo) => (
        <p key={repo.id}>{repo.name}</p>
      ))}
    </div>
  );
};

describe("useFetch Hook", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve([
            { id: 1, name: "Repo 1" },
            { id: 2, name: "Repo 2" },
          ]),
      })
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should display loading initially and then fetch data successfully", async () => {
    render(<MockComponent url="https://api.example.com/data" />);

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

    await waitFor(() =>
      expect(screen.getByText(/Repo 1/i)).toBeInTheDocument()
    );
    expect(screen.getByText(/Repo 2/i)).toBeInTheDocument();
  });

  it("should handle fetch errors", async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.reject(new Error("Failed to fetch"))
    );

    render(<MockComponent url="https://api.example.com/data" />);

    await waitFor(() =>
      expect(screen.getByText(/Error: Failed to fetch/i)).toBeInTheDocument()
    );
  });
});
