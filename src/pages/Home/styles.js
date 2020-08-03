import styled from "styled-components";
import { AiOutlineAudioMuted } from "react-icons/ai";

export const Muted = styled(AiOutlineAudioMuted)`
  position: absolute;
  margin-left: 16%;
  margin-top: -12%;
  cursor: pointer;
  color: var(--white);
  z-index: 10;

  @media (max-width: 800px) {
    margin-left: 50%;
    margin-top: -25%;
  }
`;

export const Loading = styled.h1`
  position: relative;
  margin-left: 45%;
  margin-top: 10%;
`;
