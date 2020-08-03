import React from "react";
import { VideoCardGroupContainer, CategoryLink } from "./styles";
import VideoCard from "./components/VideoCard";
import Slider, { SliderItem } from "./components/Slider";
import { Link } from "react-router-dom";

export default function Carousel({ ignoreFirstVideo, category }) {
  const link = "/categoria/" + category.name;
  return (
    <VideoCardGroupContainer>
      <CategoryLink>
        <Link to={link}>{category.name}</Link>
      </CategoryLink>

      <Slider>
        {category.filmes.map((filme, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={filme.titulo}>
              <VideoCard videoURL={filme.url} />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}
