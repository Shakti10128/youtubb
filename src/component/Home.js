import React from 'react'
import LeftSidebar from './LeftSidbar'
import Main from './Main'

const Home = () => {
  return (
       <div className='flex'>
       <LeftSidebar/>
        <Main/>
    </div>
  )
}

export default Home