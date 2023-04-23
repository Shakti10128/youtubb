import axios from "axios";

export const KEY = "AIzaSyBVx0Jq9RRnvLUSA6XCCqcaVPrPvj44R1A";
export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + KEY;

export const SEARCH_QUERY_API = 'https://www.youtube.com/results?search_query=';



const BASE_URL = "https://youtube138.p.rapidapi.com"

const options = {
  params: { hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const getDataFromApi = async (url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
}
