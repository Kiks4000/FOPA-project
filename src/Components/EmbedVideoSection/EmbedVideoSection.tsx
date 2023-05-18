import React from "react";
import "./EmbedVideoSection.scss";

type EmbedVideoSectionProps = {
  videoLink: string;
};

const EmbedVideoSection: React.FC<EmbedVideoSectionProps> = ({ videoLink }) => {
  const getVideoId = (link: string) => {
    const url = new URL(link);
    const searchParams = new URLSearchParams(url.search);
    return searchParams.get("v");
  };

  const videoId = getVideoId(videoLink);
  console.log(videoId);
  return (
    <div className="embedVideoContainer">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        width="500"
        height="250"
        title="A YouTube video"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default EmbedVideoSection;
