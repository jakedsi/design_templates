import React from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'

export default function Forms() {
  const [pwdValidation, pwdValidationFunction] = React.useState({
    eightChar : false,
    oneUpper : false,
    oneNumber : false,
    oneSymbol : false
  })
  function monitorThis(event){
    var symbols = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    // 8 character
    event.target.value.length >= 8 ? pwdValidationFunction(prevObj => ({...prevObj, eightChar:true})) : pwdValidationFunction(prevObj => ({...prevObj, eightChar: false}))
    // one upper
    event.target.value !== event.target.value.toLowerCase() ? pwdValidationFunction(prevObj => ({...prevObj, oneUpper:true})) : pwdValidationFunction(prevObj => ({...prevObj, oneUpper: false}))
    // one number
    if(/\d/.test(event.target.value)){
      pwdValidationFunction(prevObj => ({...prevObj, oneNumber:true}))
    }else{
      pwdValidationFunction(prevObj => ({...prevObj, oneNumber:false}))
    }
    // symbols
    if(symbols.test(event.target.value)){
      pwdValidationFunction(prevObj => ({...prevObj, oneSymbol:true}))
    }else{
      pwdValidationFunction(prevObj => ({...prevObj, oneSymbol:false}))
    }
  }

  return (
    <div className='mb-5'>
        <h1 className='text-center my-5 text-[20px] font-medium'>Forms</h1>
        <div className='flex justify-center'>
            <div className='flex flex-col w-[250px] h-auto p-3 border-[1px] border-gray-300 rounded'>
                <h1 className='text-[13px] text-gray-500 font-medium'>Username</h1>
                <input type="text" className='text-[13px] mt-2 h-8 rounded-sm border border-gray-400 focus:outline-none focus:border-sky-300 focus:shadow-2xl text-black px-2' name='username'/>
                <h1 className='text-[13px] pt-3 text-gray-500 font-medium'>Password</h1>
                <input type="text" className='text-[13px] mt-2 h-8 rounded-sm border border-gray-400 focus:outline-none focus:border-sky-300 focus:shadow-2xl text-black px-2' name='password' onChange={monitorThis}/>
                <h1 className='text-[12px] pt-3 text-gray-500'>Password should be</h1>
                <div className='pl-1 flex items-center gap-2 pt-1 text-[13px]'>
                  <AiFillCheckCircle className={pwdValidation.eightChar ? 'text-green-500' : 'text-gray-500'}/> 
                  <span className='text-[12px] text-gray-500 '>At least 8 characters</span>
                </div>
                <div className='pl-1 flex items-center gap-2 pt-1 text-[13px]'>
                  <AiFillCheckCircle className={pwdValidation.oneUpper ? 'text-green-500' : 'text-gray-500'}/> 
                  <span className='text-[12px] text-gray-500 '>Minimum one uppercase</span>
                </div>
                <div className='pl-1 flex items-center gap-2 pt-1 text-[13px]'>
                  <AiFillCheckCircle className={pwdValidation.oneNumber ? 'text-green-500' : 'text-gray-500'}/> 
                  <span className='text-[12px] text-gray-500 '>Minimum one number</span>
                </div>
                <div className='pl-1 flex items-center gap-2 pt-1 text-[13px]'>
                  <AiFillCheckCircle className={pwdValidation.oneSymbol ? 'text-green-500' : 'text-gray-500'}/> 
                  <span className='text-[12px] text-gray-500 '>Minimum one symbol</span>
                </div>
            </div>
        </div>
    </div>
  )
}
