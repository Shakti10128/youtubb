import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEO_API } from "../utils/constant";

const useRelatedVideo = () => {
  // const [params] = useSearchParams();
  // const id = params.get("v");
    const [videos,setVideos] = useState([]);
    useEffect(()=>{
        getVideos();
      },[])
      const getVideos = async ()=>{
        const data = await fetch(YOUTUBE_VIDEO_API);
        const json = await data.json();
        setVideos(json.items);
      }
  return videos
};

export default useRelatedVideo;
