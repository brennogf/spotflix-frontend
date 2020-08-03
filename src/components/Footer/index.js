import React from "react";
import { Link } from "react-router-dom";

import {
  FooterContainer,
  Items,
  ButtonService,
  Copyright,
  SocialIcons,
} from "./styles";

import { AiFillFacebook } from "react-icons/ai";
import {
  TiSocialInstagram,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";

export default function Footer() {
  function handleButton() {
    document.getElementById("serviceCode").innerHTML = "4002-8922";
  }
  return (
    <FooterContainer>
      <SocialIcons>
        <a href="https://www.facebook.com/AluraCursosOnline/">
          <AiFillFacebook color="gray" size="35" />
        </a>
        <a href="https://instagram.com/aluraonline">
          <TiSocialInstagram color="gray" size="35" />
        </a>
        <a href="https://twitter.com/aluraonline">
          <TiSocialTwitter color="gray" size="35" />
        </a>
        <a href="https://www.youtube.com/alura">
          <TiSocialYoutube color="gray" size="35" />
        </a>
      </SocialIcons>
      <Items>
        <ul>
          <li>
            <Link to="/">Idiomas e legendas</Link>
          </li>
          <li>
            <Link to="/">Imprensa</Link>
          </li>
          <li>
            <Link to="/">Privacidade</Link>
          </li>
          <li>
            <Link to="/">Entre em contato</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link to="/">Autodescrição</Link>
          </li>
          <li>
            <Link to="/">Relações com investidores</Link>
          </li>
          <li>
            <Link to="/">Avisos legais</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link to="/">Centro de ajuda</Link>
          </li>
          <li>
            <Link to="/">Carreiras</Link>
          </li>
          <li>
            <Link to="/">Preferências de cookies</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link to="/">Cartão pré-pago</Link>
          </li>
          <li>
            <Link to="/">Termos de uso</Link>
          </li>
          <li>
            <Link to="/">Informações corporativas</Link>
          </li>
        </ul>
      </Items>
      <ButtonService onClick={handleButton}>
        <span id="serviceCode">Código do serviço</span>
      </ButtonService>
      <Copyright>&#169; 2020-2020 Spotflix</Copyright>
    </FooterContainer>
  );
}
