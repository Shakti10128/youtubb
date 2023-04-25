import React from "react";

const VideoCardShimmer = () => {
  return (
    <div className="videos-list1">
      {
        Array(20).fill("").map((item,index)=>{
            return <div key={index} className="videoCard1">
            <div className="videoCard-img"></div>
            <div className="videoCard-info">
                <h1>hiiiiii</h1>
                <ul className="ul">
                    <li className="first_li">h</li>
                    <li className="second_li">h</li>
                </ul>
            </div>
          </div>
        })
      }
    </div>
  );
};

export default VideoCardShimmer;
