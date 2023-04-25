import UseVideos from "../helper/UseVideos"
import VideoCard from "./VideoCard";
import VideoCardShimmer from "./VideoCardShimmer";
import { Link } from "react-router-dom";


const VideoContainer = () => {
  const videosData = UseVideos();
  return (
    <div className='videoConatainer'>
           {
            videosData.length === 0?<VideoCardShimmer/>:
            videosData.map((item,index)=>{
              return <Link to={`/watch?v=`+item?.video?.videoId} key={item?.video?.videoId+index}><VideoCard  data = {item}/></Link>
            })
           }
    </div>
  )
}

export default VideoContainer