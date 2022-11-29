import React from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
export default function Forms() {
  return (
    <div className='mb-5'>
        <h1 className='text-center my-5 text-[20px] font-medium'>Forms</h1>
        <div className='flex justify-center'>
            <div className='flex flex-col w-[250px] h-auto p-3 border-[1px] border-gray-300 rounded'>
                <h1 className='text-[13px] text-gray-500 font-medium'>Username</h1>
                <input type="text" className='text-[13px] mt-2 h-8 rounded-sm border border-gray-400 focus:outline-none focus:border-sky-300 focus:shadow-2xl text-black px-2' name='username'/>
                <h1 className='text-[13px] pt-3 text-gray-500 font-medium'>Password</h1>
                <input type="text" className='text-[13px] mt-2 h-8 rounded-sm border border-gray-400 focus:outline-none focus:border-sky-300 focus:shadow-2xl text-black px-2' name='password'/>
                <h1 className='text-[12px] pt-3 text-gray-500'>Password should be</h1>
                <div className='pl-1 flex items-center gap-2 pt-1 text-[13px]'><AiFillCheckCircle className='text-gray-500'/> <span className='text-[12px] text-gray-500 '>At least 8 characters</span></div>
                <div className='pl-1 flex items-center gap-2 pt-1 text-[13px]'><AiFillCheckCircle className='text-gray-500'/> <span className='text-[12px] text-gray-500 '>Minimum one uppercase</span></div>
                <div className='pl-1 flex items-center gap-2 pt-1 text-[13px]'><AiFillCheckCircle className='text-gray-500'/> <span className='text-[12px] text-gray-500 '>Minimum one number</span></div>
                <div className='pl-1 flex items-center gap-2 pt-1 text-[13px]'><AiFillCheckCircle className='text-gray-500'/> <span className='text-[12px] text-gray-500 '>Minimum one symbol</span></div>
            </div>
        </div>
    </div>
  )
}
