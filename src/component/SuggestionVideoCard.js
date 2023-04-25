import React from 'react'
import { MdVerified } from "react-icons/md";
const SuggestionVideoCard = ({ data }) => {
  const title = data?.video?.title;
  const youtuber_name = data?.video?.author?.title;
  const publishDate = data?.video?.publishedTimeText;
  const views = data?.video?.stats?.views?.toString();
  const thumbnails = data?.video?.thumbnails[0]?.url;
  // const avatar = data?.video?.author?.avatar[0]?.url;

  return (
    <div className="videos-suggestion-list ">

      <div className="suggestion-videoCard">
        <img className="video-image" src={thumbnails} alt="" />

        <div className="video-info">
          <h1 className="description">{title}</h1>
          <p className="flex">{youtuber_name}{<MdVerified className="verified mt-1 ml-3 text-blue-500"/>}</p>
          <p>{views?.slice(0,2)}M views - {publishDate}</p>
        </div>
      </div>

    </div>
  );
};
export default SuggestionVideoCard;