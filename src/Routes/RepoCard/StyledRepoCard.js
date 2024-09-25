import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
export const Container = styled.div`
  max-width: 1000px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f9f9f9;
`;

export const RepoInfo = styled.div`
  margin-top: 20px;
`;
export const GitHubLink = styled(RouterLink)`
  color: #0366d6;
  font-weight: bold;
  text-decoration: underline;
  margin-bottom: 20px;
  &:hover {
    color: #0056b3; // Darker shade on hover
  }
`;
export const BackButton = styled.button`
  background-color: #4a90e2;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #357abd;
  }
`;

export const RepoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 24px;
    font-weight: bold;
  }
  .owner-info {
    display: flex;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 10px;
    }
    h2 {
      font-size: 18px;
    }
  }
`;

export const RepoDetails = styled.div`
  margin-top: 20px;
  p {
    margin: 17px 0;
  }
  a {
    display: inline-block;
    margin-top: 10px;
    color: #4a90e2;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
