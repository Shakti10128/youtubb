import React from "react";

const VideoCard = ({ data }) => {
  const channelName = data?.snippet?.channelTitle;
  const title = data?.snippet?.title;
  const thumbnails = data?.snippet?.thumbnails;
  // const commentCount = data?.statistics  ?.commentCount;
  // const likeCount = data?.statistics?.likeCount;
  const viewCount= data?.statistics?.viewCount;
  return (
    <div className="videos-list md:flex">

      <div className="videoCard">
        <img className="videoCardImage" src={thumbnails?.medium?.url} alt="" />
        <div className="thumnail">
          <img className="thumnail-image" src="https://i.insider.com/5e453e1996eee6566a38be32?width=700" alt="" />
        <div className="video-info">
          <h1 className="description">{title}</h1>
          <p>{channelName}</p>
          <p>{viewCount}M - 2 months age</p>
        </div>
        </div>
      </div>

    </div>
  );
};

export default VideoCard;
