import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: var(--otherBlack);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  font-size: 13px;

  @media (max-width: 800px) {
    margin-left: 20%;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  margin-left: 17%;

  @media (max-width: 800px) {
    margin-left: 0;
  }

  a {
    padding-right: 20px;
  }
`;

export const Items = styled.div`
  display: flex;
  margin-left: 7.8%;

  @media (max-width: 800px) {
    display: block;
    margin-left: -35%;
  }

  ul {
    list-style: none;
    color: var(--gray);
    cursor: pointer;
    margin-left: 100px;

    a {
      text-decoration: none;
    }

    li {
      padding-bottom: 15px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const ButtonService = styled.button`
  background-color: var(--otherBlack);
  color: var(--gray);
  border: 1px solid var(--gray);
  padding: 5px;
  cursor: pointer;
  margin-left: 17%;

  @media (max-width: 800px) {
    margin-left: 20%;
  }

  &:hover {
    color: var(--white);
  }
`;

export const Copyright = styled.p`
  color: var(--gray);
  font-size: 11px;
  margin-left: 17%;
  margin-top: 20px;
`;
