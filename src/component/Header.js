import {AiOutlineMenu} from 'react-icons/ai'
import {IoIosSearch} from 'react-icons/io'
import {FaRegUserCircle} from 'react-icons/fa'
import {BiBell,BiVideoPlus} from 'react-icons/bi'

import { sidebar } from '../utils/HeaderSlice'
import logo from '../images/logo.png'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
  const dispatch = useDispatch();

  const showHideSideBar = ()=>{
    dispatch(sidebar());
  }

  return (
    <div className="header">
     <div className='menu-logo'>
      <AiOutlineMenu className='menu'
      onClick={()=>showHideSideBar()}
      />
      <Link to='/' className='logo'> <img className='logo' src={logo} alt="" /></Link>
     </div >
     
     <div className='search-bar'>
     <input type='text' placeholder='Search'
     className='search-input rounded-l-full'
     />
     <IoIosSearch className='search-button rounded-r-full'/>
     </div>

     <div className='user'>
      <BiVideoPlus className='video text-white' />
      <BiBell className='bell-icon text-white'/>
      <FaRegUserCircle className='admin text-white'/>
     </div>
    </div>
  );
};

export default Header;
