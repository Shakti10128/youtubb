import { useEffect, useState } from "react";
import { getHomeData } from "../utils/constant";

const UseVideos = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchSelectedCategoriesData("query");
  }, []);
  const fetchSelectedCategoriesData = () => {
    getHomeData(`search/?q=${"new songs"}`).then(({ contents }) => {
      setVideos(contents);
      // console.log(contents);
    });
  };
  return videos;
};

export default UseVideos;
