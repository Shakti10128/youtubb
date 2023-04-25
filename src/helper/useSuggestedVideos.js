import { useState,useEffect } from 'react'
import { getDataFromApi } from "../utils/constant";

const useSuggestedVideos = () => {
    const [videos,setVideos] = useState([]);
    useEffect(()=>{
        getVideos();
      },[])
      const getVideos = async ()=>{
        const data = await fetch(YOUTUBE_VIDEO_API);
        const json = await data.json();
        setVideos(json.items);
        // console.log(json.items)
      }
  return videos
}

export default useSuggestedVideos