
// icons
import {AiFillHome} from 'react-icons/ai'
import {BiVideoPlus,BiLike,BiNews} from 'react-icons/bi'
import {MdSubscriptions,MdVideoLibrary,MdOutlineWatchLater,MdOutlineLiveTv} from 'react-icons/md'
import {FaHistory} from 'react-icons/fa'
import {RxVideo} from 'react-icons/rx'
import {HiFire} from 'react-icons/hi'
import {SiShopee,SiYoutubegaming} from 'react-icons/si'
import {SlMusicTone} from 'react-icons/sl'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const LeftSidbar = () => {
  
  const showHeader = useSelector((Store)=>Store.Header.show);

  return <>
{showHeader && 
  <div className="left-sidebar flex flex-col w-44 top-0 left-0 fixed  overflow-hidden">
       {/* Home */}
       <div className='flex w-64 ml-6 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
       <AiFillHome className="text-white"/>
        <Link to='/'><p className='text-base text-white ml-5 font-semibold' onClick={()=>console.log("hi")}>Home</p></Link>
      </div>

        {/* shorts */}
      <div className='flex w-64 ml-6 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
          <BiVideoPlus className="text-white"/>
        <ul>
          <li className='text-base text-white ml-5 font-semibold'>Shorts</li>
        </ul>
      </div>
      
      {/* subscriptions */}
      <div className='flex w-64 ml-6 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
          <MdSubscriptions className="text-white"/>
        <ul>
          <li className='text-base text-white ml-5 font-semibold'>Subscriptions</li>
        </ul>
      </div>
      <hr className='h-0.5 w-40 ml-5 m-3 bg-black'/>
      {/* library */}
      <div className='flex w-64 ml-6 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
          <MdVideoLibrary className="text-white"/>
        <ul>
          <li className='text-base text-white ml-5 font-semibold'> Library</li>
        </ul>
      </div>
      {/* history */}
      <div className='flex w-64 ml-6 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
          <FaHistory className="text-white"/>
        <ul>
          <li className='text-base text-white ml-5 font-semibold'>History</li>
        </ul>
      </div>
      {/* your videos */}
      <div className='flex w-64 ml-6 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
          <RxVideo className="text-white"/>
        <ul>
          <li className='text-base text-white ml-5 font-semibold'>Your vidoes</li>
        </ul>
      </div>
      {/* watch later */}
      <div className='flex w-64 ml-6 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
          <MdOutlineWatchLater className="text-white"/>
        <ul>
          <li className='text-base text-white ml-5 font-semibold'>Watch later</li>
        </ul>
      </div>
      {/* likded videos */}
      <div className='flex w-64 ml-6 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
          <BiLike className="text-white"/>
        <ul>
          <li className='text-base text-white ml-5 font-semibold'>Liked videos</li>
        </ul>
      </div>

      <hr className='h-0.5 w-40 ml-6 m-3 bg-black'/>
      <h1 className='text-base text-white font-bold ml-4'>Explore</h1>

      {/* treding */}
      <div className='flex w-64 ml-6 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
          <HiFire className="text-white"/>
        <ul>
          <li className='text-base text-white ml-5 font-semibold'>Treding</li>
        </ul>
      </div>
      {/* Shopping */}
      <div className='flex w-64 ml-6 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
          <SiShopee className="text-white"/>
        <ul>
          <li className='text-base text-white ml-5 font-semibold'>Shopping</li>
        </ul>
      </div>
      {/* Music */}
      <div className='flex w-64 ml-6 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
          <SlMusicTone className="text-white"/>
        <ul>
          <li className='text-base text-white ml-5 font-semibold'>Music</li>
        </ul>
      </div>
      {/* Live */}
      <div className='flex w-64 ml-6 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
          <MdOutlineLiveTv className="text-white"/>
        <ul>
          <li className='text-base text-white ml-5 font-semibold'>Live</li>
        </ul>
      </div>

      {/* Gaming */}
      <div className='flex w-64 ml-6 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
          <SiYoutubegaming className="text-white"/>
        <ul>
          <li className='text-base text-white ml-5 font-semibold'>Gaming</li>
        </ul>
      </div>
      {/* News */}
      <div className='flex w-64 ml-6 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
        <BiNews className="text-white"/>
        <ul>
          <li className='text-base text-white ml-5 font-semibold'>News</li>
        </ul>
      </div>
      {/* News */}
      <div className='flex w-64 ml-6 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
        <BiNews className="text-white"/>
        <ul>
          <li className='text-base text-white ml-5 font-semibold'>News</li>
        </ul>
      </div>
      {/* News */}
      <div className='flex w-64 ml-6 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
        <BiNews className="text-white"/>
        <ul>
          <li className='text-base text-white ml-5 font-semibold'>News</li>
        </ul>
      </div>
      {/* News */}
      <div className='flex w-64 ml-6 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
        <BiNews className="text-white"/>
        <ul>
          <li className='text-base text-white ml-5 font-semibold'>News</li>
        </ul>
      </div>
  </div>
}
  </>;
};

export default LeftSidbar;
