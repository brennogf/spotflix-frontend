import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import api from "../../services/api";

import Header from "../../components/Header";
import { PlayerContainer } from "./styles";

export default function PlayerVideo(props) {
  const [volume, setVolume] = useState(0.5);
  const BASE_URL = "https://www.youtube.com/watch?v=";
  const REST_URL = props.match.params.id;
  let proximoFilme;

  function getYouTubeId(youtubeURL) {
    return youtubeURL.replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      "$7"
    );
  }

  useEffect(() => {
    async function nextFilme() {
      const response = await api.get("/filmes");
      const vetor = [];

      for (let i = 0; i < response.data.length; i++) {
        for (let j = 0; j < response.data[i].filmes.length; j++) {
          vetor.push(response.data[i].filmes[j].url);
        }
      }

      const indexFilme = vetor.findIndex((url) => url.includes(REST_URL));
      if (indexFilme + 1 > vetor.length) {
        proximoFilme = `/player/${getYouTubeId(vetor[0])}`;
      } else proximoFilme = `/player/${getYouTubeId(vetor[indexFilme + 1])}`;
    }
    nextFilme();
  }, []);

  return (
    <PlayerContainer>
      <Header />
      <ReactPlayer
        url={BASE_URL + REST_URL}
        width="100%"
        height="99.5vh"
        volume={volume}
        playing="true"
        onEnded={() => (window.location.href = proximoFilme.toString())}
      />
      <input
        type="range"
        min="0"
        max="1"
        step="any"
        value={volume}
        onChange={(e) => setVolume(e.target.value)}
      />
    </PlayerContainer>
  );
}
