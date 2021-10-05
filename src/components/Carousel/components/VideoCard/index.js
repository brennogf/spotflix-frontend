import React from "react";
import { Link } from "react-router-dom";
import { VideoCardContainer } from "./styles";

function getYouTubeId(youtubeURL) {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    "$7"
  );
}

function VideoCard({ videoURL, videoTitle }) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(
    videoURL
  )}/hqdefault.jpg`;
  const link = `../player/${getYouTubeId(videoURL)}`;

  return (
    <Link to={link}>
      <VideoCardContainer url={image} title={videoTitle} />
    </Link>
  );
}

export default VideoCard;
