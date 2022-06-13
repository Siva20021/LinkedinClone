
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
            <div className='flex flex-c'
        </header>
    </div>
  )
}

export default home