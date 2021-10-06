import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import LogoNetflix from "../../assets/img/logo.png";
import IconePerfil from "../../assets/img/icone_perfil.png";
import api from "../../services/api";

import { HeaderContainer, Logo, MenuPrincipal, MenuPerfil } from "./styles";

export default function Header() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function searchCategories() {
      const response = await api.get("/categorias");
      setCategorias(response.data);
    }
    searchCategories();
  }, []);

  return (
    <HeaderContainer>
      <Logo>
        <Link to="/">
          <img src={LogoNetflix} alt="Spotflix" />
        </Link>
      </Logo>

      <MenuPrincipal>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          {categorias.map((atual, index) => {
            if (index < 3) {
              const link = `/categoria/${atual.name}`;
              return (
                <li>
                  <Link to={link}>{atual.name}</Link>
                </li>
              );
            }
            return atual;
          })}
        </ul>
      </MenuPrincipal>

      <MenuPerfil>
        <ul>
          <li>
            <img src={IconePerfil} alt="Ícone do Perfil" />
            <ul>
              <li>
                <Link to="/cadastro/musica">Nova música</Link>
              </li>
              <li>
                <Link to="/cadastro/categoria">Nova Categoria</Link>
              </li>
            </ul>
          </li>
        </ul>
      </MenuPerfil>
    </HeaderContainer>
  );
}
