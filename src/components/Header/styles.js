import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 68px;
  z-index: 100;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 5%;
  padding-right: 5%;
  background: var(--otherBlack);

  @media (max-width: 800px) {
    height: 40px;
  }
`;

export const Logo = styled.div`
  img {
    max-width: 92.5px;
  }

  @media (max-width: 800px) {
    img {
      max-width: 80px;
    }
  }
`;

export const MenuPrincipal = styled.div`
  ul {
    position: relative;
    list-style: none;
    color: var(--white);
    font-size: 14px;

    li {
      display: inline;
      padding: 15px;
      cursor: pointer;
      transition: opacity 0.3s;
    }

    li:hover,
    li:focus {
      opacity: 0.7;
    }

    li a {
      text-decoration: none;
    }

    @media (max-width: 800px) {
      li {
        display: none;
      }
    }
  }
`;

export const MenuPerfil = styled.div`
  position: absolute;
  margin-left: 85%;
  margin-top: -5px;

  @media (max-width: 800px) {
    margin-left: 65%;

    img {
      width: 35px;
      height: 35px;
    }
  }

  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    cursor: pointer;
  }

  ul ul {
    position: absolute;
    margin-left: -100%;
    background-color: var(--black);
    opacity: 0.8;
    color: var(--white);
    width: 140px;
    height: 80px;
    border-radius: 5%;
    padding: 10px;
    list-style: none;
    font-size: 14px;
  }

  ul li {
    list-style: none;
    padding-top: 10px;
  }

  ul ul {
    display: none;
  }

  /* ul li:hover > ul {
    display: block;
  } */

  ul ul li a {
    text-decoration: none;
  }

  ul ul li a:hover {
    text-decoration: underline;
    transition: 0.5s;
  }
`;
