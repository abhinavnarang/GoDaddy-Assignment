import React, { useEffect, useState } from "react";
import Repo from "../Repo/Repo";
import {
  RepoList,
  SearchContainer,
  SearchInput,
  LoaderContainer,
} from "./StyledReposList";
import CircularProgress from "@mui/material/CircularProgress";
import { GITHUB_REPOS_API } from "../../Utils/constants";

const Repos = (props) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(GITHUB_REPOS_API);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setRepos(data);
    } catch (error) {
      setError(error.message);
      return error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {loading ? (
        <LoaderContainer>
          <CircularProgress size={70} />
        </LoaderContainer>
      ) : (
        <>
          {!loading && (
            <SearchContainer>
              <SearchInput
                type="text"
                placeholder="Search repositories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </SearchContainer>
          )}
          {error ? (
            <div className="error">Error: {error}</div>
          ) : (
            filteredRepos.length > 0 && (
              <RepoList>
                {filteredRepos.map((repo) => (
                  <Repo
                    key={repo.id}
                    repo={repo}
                    handleSelect={props.handleSelect}
                  />
                ))}
              </RepoList>
            )
          )}
        </>
      )}
    </div>
  );
};

export default Repos;
