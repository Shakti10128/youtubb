import React from "react"
import useSearchVideos from "../helper/useSearchVideos"
import SearchCard from './SearchCard'
const SearchContainer = () => {
const searchVideos = useSearchVideos();
// const orignalData = Object.values(searchVideos);
console.log(searchVideos);

  return (
    <div className="search-container">
      {
        searchVideos.map((item,index)=>{
          return <SearchCard key={index} data={item}/>
        })
      }

    </div>
  )
}

export default SearchContainer