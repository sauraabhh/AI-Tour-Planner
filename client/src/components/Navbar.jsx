import React from 'react';

function Navbar() {
  return (
    <div className='w-full h-[70px] bg-red-900 text-white flex justify-between items-center p-4 '>
      <h1>AI Trip Planner</h1>
      <div >
        <div class="links" className='flex gap-4'>
          <a href="#">ABOUT</a>
          <a href="#">ITINERARIES</a>
          <a href="#">COMMUNITY</a>
          <a href="#">OFFERS</a>
          <a href="#">HOME</a> 
        </div>
      </div>
    </div>
  )
}

export default Navbar;