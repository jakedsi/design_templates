import React from 'react'

export default function Glassmorphism() {
  return (
    <div className='mt-5 bg-green-600 text-white flex justify-center flex-col items-center h-[35vh]'   style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/bg-img1.jpg'})`, backgroundPositionY: 'center', backgroundPositionX: 'center'}}>
        <h1 className='text-center'>GLASSMORPHISM</h1>
        <div className='h-[100px] w-[300px] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 m-5 p-5'>
          <h1 className='text-center'>Glassmorphism Test</h1>
        </div>
    </div>
  )
}
