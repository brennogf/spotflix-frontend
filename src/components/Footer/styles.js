import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: var(--otherBlack);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  font-size: 13px;

  @media (max-width: 1000px) {
    display: block;
    margin: 0 auto;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  margin-left: 12rem;

  a {
    padding-right: 20px;
  }

  @media (max-width: 1000px) {
    margin-left: 0rem;
  }
`;

export const Items = styled.div`
  display: flex;
  margin-left: 3.4rem;

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

  @media (max-width: 1000px) {
    display: block;
    margin-left: -8.4rem;
  }
`;

export const ButtonService = styled.button`
  background-color: var(--otherBlack);
  color: var(--gray);
  border: 1px solid var(--gray);
  padding: 5px;
  cursor: pointer;
  margin-left: 12rem;

  &:hover {
    color: var(--white);
  }

  @media (max-width: 1000px) {
    margin-left: 0rem;
  }
`;

export const Copyright = styled.p`
  color: var(--gray);
  font-size: 11px;
  margin-left: 12rem;
  margin-top: 20px;

  @media (max-width: 1000px) {
    margin-left: 0rem;
  }
`;
