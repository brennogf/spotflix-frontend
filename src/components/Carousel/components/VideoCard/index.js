import React from "react";
import { VideoCardContainer } from "./styles";
import { Link } from "react-router-dom";

function getYouTubeId(youtubeURL) {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    "$7"
  );
}

function VideoCard({ videoURL }) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(
    videoURL
  )}/hqdefault.jpg`;
  const link = "../player/" + getYouTubeId(videoURL);

  return (
    <Link to={link}>
      <VideoCardContainer url={image} />
    </Link>
  );
}

export default VideoCard;
