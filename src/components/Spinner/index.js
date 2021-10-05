import styled from "styled-components";

export const Spinner = styled.span`
    margin-top: 30px;
    margin-left: 50px;
    border: 8px solid var(--white);
    border-left-color: var(--primary);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    animation: spinner 1s linear infinite;
    display: block;
  }
  
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
`;
