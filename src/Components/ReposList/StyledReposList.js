import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 15px;
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  @media (max-width: 768px) {
    min-height: 50vh;
  }
`;

export const SearchInput = styled.input`
  width: 30%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
  }

  @media (max-width: 768px) {
    width: 80%;
    padding: 8px;
  }
`;

export const RepoList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
    gap: 15px;
  }
`;
