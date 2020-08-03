import React from "react";
import { BannerMainContainer, ContentAreaContainer } from "./styles";
import { Link } from "react-router-dom";

function getYouTubeId(youtubeURL) {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    "$7"
  );
}

export default function BannerMain({ videoTitle, videoDescription, url }) {
  const youTubeID = getYouTubeId(url);
  const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;
  const link = "player/" + getYouTubeId(url);

  return (
    <BannerMainContainer backgroundImage={bgUrl}>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>{videoTitle}</ContentAreaContainer.Title>
          {/* <ContentAreaContainer.Description>
            {videoDescription}
          </ContentAreaContainer.Description> */}
          <Link to={link}>
            <ContentAreaContainer.Button>
              <ContentAreaContainer.Button.Arrow size={25} color="#000" />
              <span>Assistir</span>
            </ContentAreaContainer.Button>
          </Link>
        </ContentAreaContainer.Item>
        <ContentAreaContainer.Item />
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
