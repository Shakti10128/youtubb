import React from "react";
import { MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

const Playlist = ({ data }) => {
  const thumbnails = data?.playlist?.thumbnails[3].url;
  const playlistId = data?.playlist?.playlistId;
  const videoNumbers = data?.playlist?.stats?.videos;
  const authorName = data?.playlist?.author?.title;
  const title = data?.playlist?.title;
  return (
    <div className="playlist">
          <img className="img" src={thumbnails} alt=""/>
      <div className="playlist-info">
        <Link
          to={`/watch?v=` + playlistId}
          className="playlist-title hover:cursor-pointer"
        >
          <h1>{title}</h1>
        </Link>
        <div className="verified">
          <h1 className="playlist-author-name">{authorName}</h1>
          <MdVerified className="playlist-author-verified" />
        </div>
        <Link to={`/watch?v=` + playlistId} className="view-full-playlist">
          <h1 className="view_all">VIEW FULL PLAYLIST</h1>
        </Link>
      </div>
    </div>
  );
};

const Channel = ({ data }) => {
  const avatar = data?.channel?.avatar[0]?.url;
  const title = data?.channel?.title;
  const userName = data?.channel?.username;
  const description = data?.channel?.descriptionSnippet;
  const subscribers = data?.channel?.stats?.subscribersText;
  return (
    <div>
      <div className="chanel-info">
        <img className="youtuber-profile-image" src={avatar} alt="" />
        <div className="channel-details">
          <div className="channel">
            <h1 className="title">{title}</h1>
            <h1 className="username">{`${userName} - ${subscribers}`}</h1>
            <p className="description">{description}</p>
          </div>
          <button>Subscribe</button>
        </div>
      </div>
      {/* Channel */}
    </div>
  );
};

const SearchCard = ({ data }) => {
  const title = data?.video?.title;
  const videoId = data?.video?.videoId;
  const youtuber_name = data?.video?.author?.title;
  const publishDate = data?.video?.publishedTimeText;
  const views = data?.video?.stats?.views?.toString();
  const thumbnails = data?.video?.thumbnails[1]?.url;
  const avatar = data?.video?.author?.avatar[0]?.url;
  const descriptionSnippet = data?.video?.descriptionSnippet;
  const videoQuality = data?.video?.badges[0];
  
  if (data?.channel) {
    return <Channel data={data} />;
  } else if (data?.playlist) {
    return <Playlist data={data} />;
  }

  return (
    <div className="final-video-card">
      <div className="video-card">
        <div className="vd-image-section">
        <Link to={`/watch?v=` + videoId} className="video_image">
          <img className="vid_image" src={thumbnails} alt="" />
        </Link>
        </div>
        <div className="video-details">
          <div className="name_and_publish">
            <h1 className="vidoe_name">{title}</h1>
            <h1 className="vidoe_publish">
              {views?.slice(0, 1)+"M views - " + publishDate}
            </h1>
          </div>
          <div className="yt-logo">
            <img src={avatar} alt="" className="avatar rounded-full w-9" />
            <h1 className="youtuber_name">{youtuber_name}</h1>
            <MdVerified className="verified" />
          </div>
          <h1 className="descriptionSnippet">{descriptionSnippet}</h1>
          <h1 className="videoQuality">{videoQuality}</h1>
        </div>
      </div>
    </div>
  );
};
export default SearchCard;
