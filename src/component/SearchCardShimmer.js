import React from 'react'

const SearchCardShimmer = () => {
  return (
        <div className='finalSearchCard'>
          {Array(20).fill("").map((item,index)=>{
            return <div key={index} className="searchCard">
            <p className="searchCardImage"></p>
              <div className="searchChanel">
                <h1 className="searchTitle">h1</h1>
                <h1 className="searchUsername">h1</h1>
                <p className="searchDescription">p</p>
              </div>
          </div>
          })}
        </div>
  );
}

export default SearchCardShimmer