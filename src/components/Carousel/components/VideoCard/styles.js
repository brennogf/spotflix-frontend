import styled from "styled-components";

export const VideoCardContainer = styled.a`
  cursor: pointer;
  color: white;
  width: 230px;
  height: 130px;
  overflow: hidden;
  flex: 0 0 298px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: all 0.5s;
  &:hover,
  &:focus {
    opacity: 50%;
  }
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
