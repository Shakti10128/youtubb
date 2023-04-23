import React from 'react'
import Button from './Button'

const buttonList = ["All","Namaste JavaScript","Live","Kapil Sharma","Trailers","News","Gaming","Punjabi Songs","Cricket","Bollywood Songs","Tarak Mehta","Programming"]

const Buttons = () => {
  return (
    <div className='button-list'>
      {
        buttonList.map((item,index)=>
        <Button key={index} name={item}/>
        )
      }
    </div>
  )
}

export default Buttons