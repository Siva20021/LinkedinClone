
import React from 'react'
import Image from "next/image"
import img from "../public/Linkedin-logo-png.png"
function home() {
  return (
    <div>
        <header>
            <div className='relative w-36 h-10'>
                <Image src={img} layout="fill" objectFit="contain" />
            </div>
            <div className='flex items-center sm:divide-x divide-gray-300'>
                <div className='hidden sm:flex space-x-8'>
                    {/*<headerLink/>/}
                </div>
            </div>
        </header>
    </div>
  )
}

export default home