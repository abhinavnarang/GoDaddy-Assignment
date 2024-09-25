import { useNavigate } from "react-router";
import { StyledRepo } from "./StyledRepo"; // Import the styled component

const Repo = (props) => {
  const { repo, handleSelect } = props;
  const navigate = useNavigate();

  const handleClick = (name) => {
    handleSelect(repo);
    navigate(name);
  };

  return (
    <StyledRepo onClick={() => handleClick(repo.name)}>
      <h1>{repo.name}</h1>
      <p>Author: {repo.owner.login}</p>
    </StyledRepo>
  );
};

export default Repo;
