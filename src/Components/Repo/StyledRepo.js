import styled from "styled-components";

export const StyledRepo = styled.div`
  width: 400px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e0f7fa;
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }

  h1 {
    font-size: 20px;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: #666;
  }
`;
