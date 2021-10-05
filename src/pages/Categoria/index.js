import React, { useState, useEffect } from "react";

import PageDefault from "../../components/PageDefault";
import { Spinner } from "../../components/Spinner";
import api from "../../services/api";
import Carousel from "../../components/Carousel";
import { Loading, Content } from "./styles";

export default function Categoria(props) {
  const [dadosIniciais, setDadosIniciais] = useState([]);
  const CATEGORIA = props.match.params.categoria;

  useEffect(() => {
    async function searchFilmesCategoria() {
      const response = await api.get(`/filmes/${CATEGORIA}`);
      setDadosIniciais(response.data);
    }
    searchFilmesCategoria();
  }, [CATEGORIA]);

  return (
    <PageDefault>
      {dadosIniciais.length === 0 && (
        <Loading>
          <Spinner />
        </Loading>
      )}

      <Content>
        {dadosIniciais.length > 0 &&
          dadosIniciais.map((atual) => {
            return <Carousel key={atual.name} category={atual} />;
          })}
      </Content>
    </PageDefault>
  );
}
