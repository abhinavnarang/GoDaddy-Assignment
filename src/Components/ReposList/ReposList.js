import React, { useState } from "react";
import Repo from "../Repo/Repo";
import {
  RepoList,
  SearchContainer,
  SearchInput,
  LoaderContainer,
} from "./StyledReposList";
import CircularProgress from "@mui/material/CircularProgress";
import { GITHUB_REPOS_API } from "../../Utils/constants";
import useFetch from "../../Hooks/useFetch";

const Repos = (props) => {
  const { data: repos, loading, error } = useFetch(GITHUB_REPOS_API);
  const [searchQuery, setSearchQuery] = useState("");

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
            <div>Error: {error}</div>
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
