import React from 'react'
import img1 from './assets/item1.jpg'
import img2 from './assets/item2.jpg'
export default function Card() {
  return (
    <div className='mb-5'>
        <h1 className='text-center my-5 text-[20px] font-medium'>Card Design</h1>
        <div className='flex justify-center gap-5'>
        <div className='flex w-[250px] h-[100px] p-2 rounded border-gray-600 items-center shadow-2xl gap-5'>
            <img src={img1} alt="" className='rounded-full h-[70px] w-[70px]'/>
            <div className='flex flex-col'>
                <h1 className='text-[14px] font-semibold mb-1'>Admin Smith</h1>
                <h1 className='text-[11px] text-gray-500'>Full Stack Developer</h1>
                <h1 className='text-[11px] text-purple-500'>@adamsmith</h1>
            </div>
        </div>
        <div className='flex w-[250px] h-[100px] p-2 rounded border-gray-600 items-center shadow-2xl gap-5'>
            <img src={img2} alt="" className='rounded-full h-[70px] w-[70px]'/>
            <div className='flex flex-col'>
                <h1 className='text-[14px] font-semibold mb-1'>Sandra Sanders</h1>
                <h1 className='text-[11px] text-gray-500'>Frontend Developer</h1>
                <h1 className='text-[11px] text-purple-500'>@ssanders</h1>
            </div>
        </div>
        </div>
    </div>
  )
}

