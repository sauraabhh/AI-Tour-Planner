import React from 'react';
import Navbar from './components/Navbar';
import './app.css' ;

function App() {
  return (
    <div className='w-full h-screen '>
      <Navbar/>
      <div className='w-full h-[90vh] bg-blue-900'>
        <div className='ml-[5vw] pt-[8vw]' >
          <p>MOUNTAINS | MUSEUMS | BEACHES</p>
          <h1 className='mt-[2vw] text-4xl'>Life is a journey <br /> Not a destination</h1>
          <h1 className='mt-[5vw] text-3xl' >Plan your Next Adventure - </h1>
        </div>
        <div className='w-[90vw] h-[150px] p-8 ml-[5vw] mt-[3vw] rounded-2xl bg-red-500 flex justify-between items-center' >
          <div className='w-[75vw] h-[100px] bg-yellow-500 rounded-2xl flex'>
            <div className='w-[15%] h-[100px]  bg-pink-700'></div>
            <div className='w-[40%] h-[100px] bg-red-700'></div>
            <div className='w-[15%] h-[100px] bg-blue-700'></div>
            <div className='w-[15%] h-[100px] bg-yellow-700'></div>
            <div className='w-[15%] h-[100px] bg-blue-700'></div>
            
          </div>
          <div className='w-[8vw] h-[100px] bg-yellow-500 rounded-2xl flex justify-center items-center'>
            <h1 className='text-2xl'>Plan</h1>
          </div>
        </div>
        
      </div>
      <div className='w-full h-[80vh] bg-white flex'>
        <div className='w-[75%] h-[100%] bg-gray-700 flex justify-end p-2 items-center'> 
          <div className='w-[16vw] rounded-xl ml-5 h-[50vh] bg-red-700'></div>
          <div className='w-[16vw] rounded-xl ml-5 h-[50vh] bg-red-700'></div>
          <div className='w-[16vw] rounded-xl ml-5 h-[50vh] bg-red-700'></div>
          <div className='w-[16vw] rounded-xl ml-5 h-[50vh] bg-red-700'></div>
        </div>
        <div className='w-[25%] h-[100%] bg-gray-400 flex flex-col justify-center items-center'> 
          <h1 className='text-3xl'>Recommendations</h1>
          <p className='text-small mt-3 font-bold'>A list of the top 75 <br />Best Tourist Places <br />to See in a world for a <br />perfoliday or a trip</p>
          <button className='w-[180px] mt-3 h-[60px] bg-orange-400'>View More</button>
        </div>
      </div>
    </div>
  )
}

export default App;
