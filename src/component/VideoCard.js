import React from "react";
import { MdVerified } from "react-icons/md";

const VideoCard = ({ data }) => {
  const title = data?.video?.title;
  // const videoId = data?.video?.videoId;
  const youtuber_name = data?.video?.author?.title;
  const publishDate = data?.video?.publishedTimeText;
  const views = data?.video?.stats?.views?.toString();
  const thumbnails = data?.video?.thumbnails[0]?.url;
  const avatar = data?.video?.author?.avatar[0]?.url;
  // const descriptionSnippet = data?.video?.descriptionSnippet;
  // const videoQuality = data?.video?.badges[0];

  return (
    <div className="videos-list md:flex">
      <div className="videoCard">
        <img className="videoCardImage" src={thumbnails} alt="" />
        <div className="thumnail">
          <img className="thumnail-image" src={avatar} alt="" />
        <div className="video-info">
          <h1 className="description">{title}</h1>
          <p className="flex">{youtuber_name}{<MdVerified className="verified mt-1 ml-3 text-blue-500"/>}</p>
          <p>{views?.slice(0,2)}M views - {publishDate}</p>
        </div>
        </div>
      </div>

    </div>
  );
};

export default VideoCard;
