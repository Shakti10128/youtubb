import React from "react";

const SimilarVideosShimmer = () => {
  return (
    <div className="simialVideoShimmer">
      {Array(20)
        .fill("")
        .map((item, index) => {
          return (
            <div key={index} className="video-info">
              <h1 className="video-image">hi</h1>
              <ul className="suggestion-ul">
                <li className="suggestion-l1">1</li>
                <li className="suggestion-l2">2</li>
                <li className="suggestion-l3">3</li>
              </ul>
            </div>
          );
        })}
    </div>
  );
};

export default SimilarVideosShimmer;
