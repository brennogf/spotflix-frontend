import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { BannerMainContainer, ContentAreaContainer, Muted } from "./styles";

function getYouTubeId(youtubeURL) {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    "$7"
  );
}

export default function BannerMain({ videoTitle, url }) {
  const [playing, setPlaying] = useState(true);
  const [color, setColor] = useState("#fff");
  const youTubeID = getYouTubeId(url);
  const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;
  const link = `player/${getYouTubeId(url)}`;

  return (
    <BannerMainContainer backgroundImage={bgUrl}>
      <ReactPlayer
        url={url}
        width="0"
        height="0"
        volume="0.1"
        playing={playing}
      />
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>{videoTitle}</ContentAreaContainer.Title>
          <Link to={link}>
            <ContentAreaContainer.Button>
              <ContentAreaContainer.Button.Arrow size={25} color="#000" />
              <span>Assistir</span>
            </ContentAreaContainer.Button>
          </Link>
          <a
            onClick={(e) => {
              playing ? setPlaying(false) : setPlaying(true);
              color == "#E50914" ? setColor("#fff") : setColor("#E50914");
            }}
          >
            <Muted size="20" color={color} />
          </a>
        </ContentAreaContainer.Item>
        <ContentAreaContainer.Item />
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
