
// icons
import {AiFillHome} from 'react-icons/ai'
import {BiVideoPlus,BiLike,BiNews} from 'react-icons/bi'
import {MdSubscriptions,MdVideoLibrary,MdOutlineWatchLater,MdOutlineLiveTv} from 'react-icons/md'
import {FaHistory} from 'react-icons/fa'
import {RxVideo} from 'react-icons/rx'
import {HiFire} from 'react-icons/hi'
import {SiShopee,SiYoutubegaming} from 'react-icons/si'
import {SlMusicTone} from 'react-icons/sl'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { hideHeader } from '../utils/HeaderSlice'
import { hideSuggestionContainer,showSuggestionContainer } from '../utils/SearchSuggestionSlice'

const LeftSidbar = () => {

  let navigate = useNavigate(); 
  const routeChange = (item) =>{ 
    let path = `/results?search_query=`+item; 
    navigate(path);
  }
  
  const showHeader = useSelector((Store)=>Store.Header.show);
  // console.log(showHeader);
  const dispatch = useDispatch();

  const takeIntoSearchQueryPage = ()=>{
    dispatch(hideHeader());
    dispatch(showSuggestionContainer());
  }
// hide sidebar and take into homepage
  const HideHeader = ()=>{
    dispatch(hideHeader());
  }

   const takeIntoHomePage = ()=>{
    dispatch(hideHeader());
    dispatch(hideSuggestionContainer());
   }
  return <>
{showHeader && 
  <div className="left-sidebar flex flex-col w-44 top-0 left-0 fixed  overflow-hidden">
       {/* Home */}
       <div className='flex w-64 ml-6 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
       <AiFillHome className="text-white"/>
        <Link to='/'><p
        onClick={()=>takeIntoHomePage()}
         className='text-base text-white ml-5 font-semibold'>Home</p></Link>
      </div>

        {/* shorts */}
      <div className='flex w-64 ml-6 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
          <BiVideoPlus className="text-white"/>
          <Link to='/'><p
        onClick={()=>HideHeader()}
        onMouseDown={()=>routeChange("shorts")}
         className='text-base text-white ml-5 font-semibold'>shorts</p></Link>
      </div>
      
      {/* subscriptions */}
      <div className='flex w-64 ml-6 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
          <MdSubscriptions className="text-white"/>
          <Link to='/'><p
        onClick={()=>takeIntoSearchQueryPage()}
         className='text-base text-white ml-5 font-semibold'>subscriptions</p></Link>
      </div>
      <hr className='h-0.5 w-40 ml-5 m-3 bg-black'/>
      {/* library */}
      <div className='flex w-64 ml-6 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
          <MdVideoLibrary className="text-white"/>
          <Link to='/'><p
        onClick={()=>takeIntoSearchQueryPage()}
         className='text-base text-white ml-5 font-semibold'>library</p></Link>
      </div>
      {/* history */}
      <div className='flex w-64 ml-6 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
          <FaHistory className="text-white"/>
          <Link to='/'><p
        onClick={()=>takeIntoSearchQueryPage()}
         className='text-base text-white ml-5 font-semibold'>history</p></Link>
      </div>
      {/* your videos */}
      <div className='flex w-64 ml-6 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
          <RxVideo className="text-white"/>
          <Link to='/'><p
        onClick={()=>takeIntoSearchQueryPage()}
         className='text-base text-white ml-5 font-semibold'>your videos</p></Link>
      </div>
      {/* watch later */}
      <div className='flex w-64 ml-6 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
          <MdOutlineWatchLater className="text-white"/>
          <Link to='/'><p
        onClick={()=>takeIntoSearchQueryPage()}
         className='text-base text-white ml-5 font-semibold'>watch later</p></Link>
      </div>
      {/* likded videos */}
      <div className='flex w-64 ml-6 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
          <BiLike className="text-white"/>
          <Link to='/'><p
        onClick={()=>takeIntoSearchQueryPage()}
         className='text-base text-white ml-5 font-semibold'>likded videos</p></Link>
      </div>

      <hr className='h-0.5 w-40 ml-6 m-3 bg-black'/>
      <h1 className='text-base text-white font-bold ml-4'>Explore</h1>

      {/* treding */}
      <div className='flex w-64 ml-6 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
          <HiFire className="text-white"/>
          <Link to='/'><p
        onClick={()=>takeIntoSearchQueryPage()}
         className='text-base text-white ml-5 font-semibold'>treding</p></Link>
      </div>
      {/* Shopping */}
      <div className='flex w-64 ml-6 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
          <SiShopee className="text-white"/>
          <Link to='/'><p
        onClick={()=>takeIntoSearchQueryPage()}
         className='text-base text-white ml-5 font-semibold'>Shopping</p></Link>
      </div>
      {/* Music */}
      <div className='flex w-64 ml-6 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
          <SlMusicTone className="text-white"/>
          <Link to='/'><p
        onClick={()=>takeIntoSearchQueryPage()}
         className='text-base text-white ml-5 font-semibold'> Music
         </p></Link>
      </div>
      {/* Live */}
      <div className='flex w-64 ml-6 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
          <MdOutlineLiveTv className="text-white"/>
          <Link to='/'><p
        onClick={()=>takeIntoSearchQueryPage()}
         className='text-base text-white ml-5 font-semibold'>Live</p></Link>
      </div>

      {/* Gaming */}
      <div className='flex w-64 ml-6 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
          <SiYoutubegaming className="text-white"/>
          <Link to='/'><p
        onClick={()=>takeIntoSearchQueryPage()}
         className='text-base text-white ml-5 font-semibold'>Gaming</p></Link>
      </div>
      {/* News */}
      <div className='flex w-64 ml-6 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
        <BiNews className="text-white"/>
        <Link to='/'><p
        onClick={()=>takeIntoSearchQueryPage()}
         className='text-base text-white ml-5 font-semibold'>News</p></Link>
      </div>
  </div>
}
  </>;
};

export default LeftSidbar;
