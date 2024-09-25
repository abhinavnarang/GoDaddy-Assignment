import React from "react";
import Header from "../../Components/Header/Header";
import Repos from "../../Components/ReposList/ReposList";

const HomePage = (props) => {
  return (
    <div>
      <Header></Header>
      <Repos handleSelect={props.handleSelect}></Repos>
    </div>
  );
};

export default HomePage;
