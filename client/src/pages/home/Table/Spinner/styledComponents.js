import styled from 'styled-components';


export const StyledSpinner = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  font-size: 20px;
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin: auto;
  margin-top: 50px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
