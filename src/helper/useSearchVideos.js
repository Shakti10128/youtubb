import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getQueryDataFromApi } from "../utils/constant";

const useSearchVideos = () => {
  const [searchData, setSearchData] = useState([]);
  const querydata = useSelector((Store) => Store.querySlice.recentQuery);
  const query = querydata[0];
  console.log(query);

  useEffect(() => {
    fetchSelectedCategoriesData(query);
  }, [query]);

  const fetchSelectedCategoriesData = (query) => {
    getQueryDataFromApi(`search/?q=${query}`).then(({ contents }) => {
      setSearchData(contents);
      console.log(searchData);
    });
  };
  return searchData;
};

export default useSearchVideos;
