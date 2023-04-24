import React from "react";
// import Buttons from './Buttons'
import VideoContainer from "./VideoContainer";
import SearchContainer from "./SearchContainer";
import { useSelector } from "react-redux";

const Main = () => {
  const isTrue = useSelector((Store) => Store.searchSuggestion.isTrue);
  // console.log(isTrue);
  return (
    <div className=" main w-full bg-gray-600 z-0">
      {isTrue ? <SearchContainer /> : <VideoContainer />}
    </div>
  );
};

export default Main;
