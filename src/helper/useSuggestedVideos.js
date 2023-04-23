import { useState,useEffect } from 'react'
import { getDataFromApi } from "../utils/constant";

const useSuggestedVideos = () => {
    const [SuggestedVideos,setSuggestedVideos] = useState([]);
    useEffect(()=>{
        fetchSelectedCategoriesData();
    },[]);
    
    const fetchSelectedCategoriesData =  (query) =>{
        getDataFromApi(`search/?q=${query}`).then(({contents})=>{
            console.log(contents);
            setSuggestedVideos(contents);
        })
    }
  return SuggestedVideos;
}

export default useSuggestedVideos