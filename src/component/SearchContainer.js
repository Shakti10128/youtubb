import React from "react";
import useSearchVideos from "../helper/useSearchVideos";
import SearchCard from "./SearchCard";
import LeftSidbar from "./LeftSidbar";
import SearchCardShimmer from "./SearchCardShimmer";
const SearchContainer = () => {


  const searchVideos = useSearchVideos()

  return (
    <>
    <LeftSidbar/>
      <div className="search-container">
        { searchVideos.length === 0?<SearchCardShimmer/>:
        searchVideos.map((item, index) => {
          return <SearchCard key={index} data={item} />;
        })
        }
      </div>
    </>
  );
};

export default SearchContainer;
