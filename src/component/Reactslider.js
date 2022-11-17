import React from 'react'
import { Splide, SplideSlide, SplideTrack} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {BiChevronRightCircle, BiChevronLeftCircle} from 'react-icons/bi'
import item1 from './assets/item1.jpg'
import item2 from './assets/item2.jpg'
export default function Reactslider() {
  return (
    <div className=''>
      <div className='flex justify-center pt-[20vh]'>
        
      <div className='w-[50vw]'>
        <h1 className='text-center p-5'>SPLIDE<br/></h1>
        <div className="w-full">
      <Splide
      options={{
          type: 'loop',
          perPage: 2,
          lazyLoad: 'nearby',
          pagination: 0,
          arrows: 2,
          gap: "1rem"
      }}
      aria-label="My Favorite Images"
      hasTrack={ false }
    >
      <SplideTrack>
        <SplideSlide>
          <img src={item1} alt="Imag1" className=' h-[25vh] w-full object-cover'/>
        </SplideSlide>
        <SplideSlide>
          <img src={item2} alt="Imag2" className=' h-[25vh] w-full object-cover'/>
        </SplideSlide>
        <SplideSlide>
          <img src={item1} alt="Imag3" className=' h-[25vh] w-full object-cover'/>
        </SplideSlide>
        <SplideSlide>
          <img src={item2} alt="Imag3" className=' h-[25vh] w-full object-cover'/>
        </SplideSlide>
      </SplideTrack>
      <div className="splide__arrows">
        <div className='flex absolute right-0 top-[-30px] w-[50px]'>
        <div className=' rotate-180'>
        <button className="splide__arrow splide__arrow--prev"><BiChevronLeftCircle fontSize="15px"/></button>
        </div>
        <div>
        <button className="splide__arrow splide__arrow--next"><BiChevronRightCircle fontSize="15px" /></button>
        </div>
        </div>
      </div>
    </Splide>
        </div>
      </div>
    </div>
  </div>
  )
}
