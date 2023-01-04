import React from "react";
import { fallbackEpisodeImg } from "./data";

const Episode = (props) => {
  const { episode } = props;
  const { id, image, name, season, number, summary, runtime } = episode;
  const imgsrc = image || fallbackEpisodeImg;

  // console.log("episode: ", episode);

  return (
    <div className="episode" data-testid="ep-kutusu" key={id}>
      <img
        className="episode-image"
        src={imgsrc}
        alt={imgsrc}
        data-testid="ep-img"
      />
      <div className="episode-info">
        <p className="episode-number" data-testid="ep-no">
          Season {season}, Episode {number}
        </p>
        <h3 data-testid="ep-name">{name}</h3>
        <p data-testid="ep-sum">{summary}</p>
        <div className="flex-spacer" />
        <p className="episode-runtime" data-testid="ep-dur">
          {runtime} minutes
        </p>
      </div>
    </div>
  );
};

export default Episode;
