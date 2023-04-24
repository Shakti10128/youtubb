import { AiOutlineMenu } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { FaRegUserCircle, FaHistory } from "react-icons/fa";
import { BiBell, BiVideoPlus } from "react-icons/bi";

import { sidebar } from "../utils/HeaderSlice";
import logo from "../images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_SUGGESTIONS } from "../utils/constant";
import { setQuery } from "../utils/QuerySlice";
import {
  hideHeader,
  setSuggestionTrue,
  setSuggestionFalse,
  setShowRecentSearchTrue,
  setShowRecentSearchFalse,
} from "../utils/HeaderSlice";
import {
  showSuggestionContainer,
  hideSuggestionContainer,
} from "../utils/SearchSuggestionSlice";

const Header = () => {
  const [queryData, setQueryData] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [suggestionData, setSuggestionData] = useState([]);

  // subscribe the Store
  const recentQueries = useSelector((Store) => Store.querySlice.recentQuery);
  const suggestions = useSelector((Store) => Store.Header.suggestion);
  const recentSuggestions = useSelector((Store) => Store.Header.recent);
  const isHeaderTrue = useSelector((Store) => Store.Header.show);

  // const q = getQuery();
  const dispatch = useDispatch();

  // according to menu button set true or false
  const showHideSideBar = () => {
    dispatch(sidebar());
  };

  // make recent sugggestion & suggestion false
  const suggestion = () => {
    dispatch(setSuggestionFalse());
    dispatch(setShowRecentSearchFalse());
  };

  // search button pressed make suggestion false and put inputValue into query
  const searchButtonPressedQuery = () => {
    if (inputValue.length === 0) {
      return;
    }
    suggestion();
    dispatch(setQuery(inputValue));
    setInputValue("");
    dispatch(showSuggestionContainer());
  };

  // on input Focus
  const onInputFoucs = () => {
    if (isHeaderTrue) {
      dispatch(hideHeader());
    }
    dispatch(setShowRecentSearchTrue());
  };

  // Enter button pressed from the input & add into recent suggestion also
  const enterButtonPressedQuery = (e) => {
    if (e.key === "Enter" && inputValue.length === 0) {
      return;
    }
    if (e.key === "Enter") {
      dispatch(setShowRecentSearchFalse());
      dispatch(setSuggestionFalse());
      dispatch(setQuery(inputValue));
      dispatch(showSuggestionContainer());
      setInputValue("");
      return;
    }
  };

  // set query data
  const SetQueryData = (e) => {
    setInputValue(e.target.value);
    setQueryData(e.target.value);
    dispatch(setSuggestionTrue());
    inputValue.length === 0
      ? dispatch(setShowRecentSearchTrue())
      : dispatch(setShowRecentSearchFalse());
  };

  const setSuggestionDataIntoQuery = (item) => {
    setInputValue(item);
    dispatch(setQuery(item));
    setInputValue("");
    dispatch(showSuggestionContainer());
  };

  // calling api
  useEffect(() => {
    const timer = setTimeout(() => {
      getSuggsetions();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [queryData]);

  const getSuggsetions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS + queryData);
    const json = await data.json();
    setSuggestionData(json[1]);
  };

  return (
    <div className="header">
      <div className="menu-logo">
        <AiOutlineMenu className="menu" onClick={() => showHideSideBar()} />
        <Link to="/" className="logo">
          {" "}
          <img
            className="logo"
            src={logo}
            alt=""
            onClick={() => dispatch(hideSuggestionContainer())}
          />
        </Link>
      </div>

      <div className="search-div">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            value={inputValue}
            className="search-input rounded-l-full"
            onKeyUp={(e) => enterButtonPressedQuery(e)}
            onChange={(e) => SetQueryData(e)}
            onFocus={() => onInputFoucs()}
            onBlur={() => {
              suggestion();
            }}
          />
          <IoIosSearch
            className="search-button rounded-r-full"
            onClick={() => {
              searchButtonPressedQuery();
            }}
          />
        </div>
        {(recentSuggestions && (
          <div className="suggestions">
            {recentQueries.map((item, index) => {
              return (
                <div
                  key={index}
                  className="suggestion-search"
                  onMouseDown={() => setSuggestionDataIntoQuery(item)}
                >
                  <FaHistory className="recent mx-1 mt-2" />{" "}
                  <p
                    className="suggestion-name mx-1 cursor-pointer"
                    placeholder="nothing"
                  >
                    {item}
                  </p>
                </div>
              );
            })}
          </div>
        )) ||
          (suggestions && (
            <div className="suggestions">
              {suggestionData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="suggestion-search"
                    onMouseDown={() => setSuggestionDataIntoQuery(item)}
                  >
                    🔍{" "}
                    <p
                      className="suggestion-name mx-1 cursor-pointer"
                      placeholder="nothing"
                    >
                      {item}
                    </p>
                  </div>
                );
              })}
            </div>
          ))}
      </div>
      <div className="user">
        <BiVideoPlus className="video text-white" />
        <BiBell className="bell-icon text-white" />
        <FaRegUserCircle className="admin text-white" />
      </div>
    </div>
  );
};

export default Header;
