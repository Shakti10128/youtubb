import UseVideos from "../helper/UseVideos"
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";


const VideoContainer = () => {
  const videosData = UseVideos();
  // console.log(videosData)


  return (
    <div className='videoConatainer'>
        {
          videosData.map((item)=>{
            return <Link to={`/watch?v=` + item.id} key={item.id}><VideoCard  data = {item}/></Link>
          })
        }
    </div>
  )
}

export default VideoContainer