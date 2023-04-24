import { useState,useEffect } from 'react'
import { getDataFromApi } from "../utils/constant";

const useSuggestedVideos = () => {
    const [SuggestedVideos,setSuggestedVideos] = useState([]);
    useEffect(()=>{
        fetchSelectedCategoriesData();
    },[]);
    
    const fetchSelectedCategoriesData =  (query) =>{
        getDataFromApi(`search/?q=${query}`).then(({contents})=>{
            const data = contents.json()
            // console.log(data)
            setSuggestedVideos(data);
        })
    }
  return SuggestedVideos;
}

export default useSuggestedVideos