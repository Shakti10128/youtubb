import React from 'react'

const SuggestionVideoCard = ({ data }) => {
  const channelName = data?.snippet?.channelTitle;
  const title = data?.snippet?.title;
  const thumbnails = data?.snippet?.thumbnails?.medium?.url;

  const viewCount= data?.statistics?.viewCount[1];
  return (
    <div className="videos-suggestion-list">
      
      <div className="suggestion-videoCard">
        <img className='video-image' src={thumbnails} alt="" />
        <div className='details'>
          <h1>{title}</h1>
          <p>{channelName}</p>
          <p>{viewCount}M - 2 months age</p>
        </div>
      </div>

    </div>
  );
};
export default SuggestionVideoCard;