import React, { useEffect, useState } from "react";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import PageDefault from "../../components/PageDefault";
import ReactPlayer from "react-player/youtube";
import { Muted, Loading } from "./styles";
import { Spinner } from "../../components/Spinner";
import api from "../../services/api";

export default function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);
  const [playing, setPlaying] = useState(true);
  const [color, setColor] = useState("#fff");

  useEffect(() => {
    async function searchFilmes() {
      const response = await api.get("/filmes");
      setDadosIniciais(response.data);
    }
    searchFilmes();
  }, []);

  return (
    <>
      {dadosIniciais.length === 0 && (
        <PageDefault>
          <Loading>
            <Spinner />
          </Loading>
        </PageDefault>
      )}
      <PageDefault paddingAll={0}>
        {dadosIniciais.length > 0 && (
          <>
            <ReactPlayer
              url={dadosIniciais[0].filmes[0].url}
              width="0"
              height="0"
              volume="0.1"
              playing="true"
              playing={playing}
            />
            <BannerMain
              videoTitle={dadosIniciais[0].filmes[0].titulo}
              url={dadosIniciais[0].filmes[0].url}
            />
            <a
              onClick={(e) => {
                playing ? setPlaying(false) : setPlaying(true);
                color == "#E50914" ? setColor("#fff") : setColor("#E50914");
              }}
            >
              <Muted size="20" color={color} />
            </a>

            {dadosIniciais.map((atual, index) => {
              if (index === 0) {
                return (
                  <Carousel
                    key={atual.name}
                    ignoreFirstVideo
                    category={atual}
                  />
                );
              } else {
                return <Carousel key={atual.name} category={atual} />;
              }
            })}
          </>
        )}
      </PageDefault>
    </>
  );
}
