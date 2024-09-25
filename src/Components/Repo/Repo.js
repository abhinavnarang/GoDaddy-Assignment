import { useNavigate } from "react-router";
import { StyledRepo } from "./StyledRepo";

const Repo = (props) => {
  const { repo, handleSelect } = props;
  const navigate = useNavigate();

  const handleClick = (name) => {
    handleSelect(repo);
    navigate(name);
  };

  return (
    <StyledRepo onClick={() => handleClick(repo.name)}>
      <h1> {repo.name}</h1>
      <p>Description: {repo.description ? repo.description : "- -"}</p>
    </StyledRepo>
  );
};

export default Repo;
