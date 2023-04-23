import { AiOutlineMenu } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { BiBell, BiVideoPlus } from "react-icons/bi";

import { sidebar } from "../utils/HeaderSlice";
import logo from "../images/logo.png";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_SUGGESTIONS } from "../utils/constant";

const Header = () => {
  const [query, setQuery] = useState("");
  const [inputValue,setInputValue] = useState("");
  // const [isSuggestionClicked,setIsSuggestionClicked] = useState(false);
  const [showSearchBar,setShowSearchBar] = useState(false);
  const [suggestionData, setSuggestionData] = useState([]);
  const dispatch = useDispatch();

  const showHideSideBar = () => {
    dispatch(sidebar());
  };

  const setQueryData = (e)=>{
    setInputValue(e.target.value);
    setQuery(e.target.value);
}
  // const setSuggestionDataIntoInput = (item)=>{
  //   setQuery(item);

  // }

  useEffect(() => {
    const timer = setTimeout(() => {
      getSuggsetions();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  const getSuggsetions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS + query);
    const json = await data.json();
    setSuggestionData(json[1]);
    // console.log(json[1])
  };

  return (
    <div className="header">
      <div className="menu-logo">
        <AiOutlineMenu className="menu" onClick={() => showHideSideBar()} />
        <Link to="/" className="logo">
          {" "}
          <img className="logo" src={logo} alt="" />
        </Link>
      </div>

      <div className="search-div">

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            value={inputValue}
            className="search-input rounded-l-full"
            onChange={(e) =>setQueryData(e)}
            onFocus={()=>setShowSearchBar(true)}
            onBlur={()=>{setShowSearchBar(false)}}
          />
          <IoIosSearch className="search-button rounded-r-full" />
        </div>
        {showSearchBar && <div className="suggestions">
          {
            suggestionData.map((item,index)=>{
              return <div key={index} className="suggestion-search"
              onMouseDown={()=>setInputValue(item)}
              >🔍 <p className='suggestion-name mx-1 cursor-pointer'
              >{item}</p></div>
            })
          }
        </div>
        }
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
