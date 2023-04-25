import { useEffect, useState } from "react";
import { getQueryDataFromApi } from "../utils/constant";
import { useSearchParams } from "react-router-dom";

const useSearchVideos = () => {
  const [params] = useSearchParams();
  const query = params.get("search_query");
  const [searchData, setSearchData] = useState([]);
  // console.log(query)

  useEffect(() => {
    fetchSelectedCategoriesData(query);
  }, [query]);

  const fetchSelectedCategoriesData = (query) => {
    getQueryDataFromApi(`search/?q=${query}`).then(({ contents }) => {
      setSearchData(contents);
      // console.log(searchData);
    });
  };
  return searchData;
};

export default useSearchVideos;
