import React from 'react'

export default function Fonts() {
  return (
    <div className='flex justify-center'>
        <table>
            <thead>
                <tr>
                    <td><div className='text-[40px] font-bold'>Good Fonts</div></td>
                    <td><div className='text-[40px] font-bold'>Alternate Fonts</div></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><div className='poppins text-[40px] '>Poppins</div></td>
                    <td><div className='cabinet text-[40px] '>Cabinet</div></td>
                </tr>
                <tr>
                    <td><div className='merriweather text-[40px] '>Merriweather</div></td>
                    <td><div className='inter text-[40px] '>Inter</div></td>
                </tr>
                <tr>
                    <td><div className='montserrat text-[40px] '>Montserrat</div></td>
                    <td><div className='satoshi text-[40px] '>Satoshi</div></td>
                </tr>
                <tr>
                    <td><div className='playfair text-[40px] '>Playfair Display</div></td>
                    <td><div className='lexend text-[40px] '>Lexend</div></td>
                </tr>
                <tr>
                    <td><div className='josefin text-[40px] '>Josefin Sans</div></td>
                    <td><div className='outfit text-[40px] '>Outfit</div></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
