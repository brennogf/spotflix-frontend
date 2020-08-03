import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";

import Header from "../../components/Header";
import { PlayerContainer } from "./styles";

export default function PlayerVideo(props) {
  const [volume, setVolume] = useState(0.5);
  const BASE_URL = "https://www.youtube.com/watch?v=";
  const REST_URL = props.match.params.id;

  return (
    <PlayerContainer>
      <Header />
      <ReactPlayer
        url={BASE_URL + REST_URL}
        width="100%"
        height="99.5vh"
        volume={volume}
        playing="true"
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
