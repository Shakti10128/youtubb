// import UseVideos from "../helper/UseVideos";
import { hideHeader } from "../utils/HeaderSlice";
import LeftSidbar from "./LeftSidbar";
import { useSearchParams, Link } from "react-router-dom";
import SuggestionVideoCard from "./SuggestionVideoCard";
import SimilarVideosShimmer from "./SimilarVideosShimmer";
import UseVideos from "../helper/UseVideos";

const WatchPage = () => {
  const [params] = useSearchParams();
  const id = params.get("v");
  const videos = UseVideos();
  return (
    <>
      {hideHeader && <LeftSidbar />}(
      <div className="watch-page text-white">
        <div className="watch-video-card">
          <iframe
            className="iframe"
            width="960"
            height="600"
            src={"https://www.youtube.com/embed/" + id}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div></div>
        </div>
        <div className="similar-videos">
          { videos.length === 0 ?<SimilarVideosShimmer/>: videos.map((item,index) => {
            return (
              <Link
                key={item?.video?.videoId + index}
                className="simlar-vid"
                to={`/watch?v=` + item?.video?.videoId}
              >
                <SuggestionVideoCard data={item} />
              </Link>
            );
          })}
        </div>
      </div>
      )
    </>
  );
};

export default WatchPage;
