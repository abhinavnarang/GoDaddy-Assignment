import React, { useEffect } from "react";
import {
  Container,
  RepoInfo,
  BackButton,
  RepoHeader,
  RepoDetails,
  GitHubLink,
} from "./StyledRepoCard";
import { Link, useNavigate } from "react-router-dom";

const RepoCard = (props) => {
  const { repoCardDetails } = props;
  console.log(repoCardDetails);

  const navigate = useNavigate();

  useEffect(() => {
    if (!repoCardDetails || Object.keys(repoCardDetails).length === 0) {
      navigate("/");
    }
  }, [repoCardDetails, navigate]);

  if (!repoCardDetails || Object.keys(repoCardDetails).length === 0) {
    return null;
  }

  return (
    <Container>
      <Link to={"/"}>
        <BackButton>Back</BackButton>
      </Link>
      <RepoInfo>
        <RepoHeader>
          <h1>{repoCardDetails.name}</h1>
          <div className="owner-info">
            <img src={repoCardDetails.owner.avatar_url} alt="Author" />
            <h2>{repoCardDetails.owner.login}</h2>
          </div>
        </RepoHeader>
        <RepoDetails>
          <GitHubLink
            to={repoCardDetails.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Repository on GitHub
          </GitHubLink>
          <p>Language: {repoCardDetails.language}</p>
          <p>Description: {repoCardDetails.description}</p>
          <p>Visibility: {repoCardDetails.visibility}</p>
          <p>Forks: {repoCardDetails.forks}</p>
          <p>Open Issues: {repoCardDetails.open_issues}</p>
          <p>Watchers: {repoCardDetails.watchers}</p>
          <p>Default Branch: {repoCardDetails.default_branch}</p>
          <p>
            Date Created:{" "}
            {new Date(repoCardDetails.created_at).toLocaleDateString("en-US")}
          </p>
          <p>
            Last Commit:{" "}
            {new Date(repoCardDetails.pushed_at).toLocaleDateString("en-US")}
          </p>
        </RepoDetails>
      </RepoInfo>
    </Container>
  );
};

export default RepoCard;
