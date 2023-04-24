import { useEffect,useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constant'

const UseVideos = () => {
    const [videos,setVideos] = useState([]);
    useEffect(()=>{
        getVideos();
      },[])
      const getVideos = async ()=>{
        const data = await fetch(YOUTUBE_VIDEO_API);
        const json = await data.json();
        setVideos(json.items);
        console.log(json.items)
      }
  return videos
}

export default UseVideos