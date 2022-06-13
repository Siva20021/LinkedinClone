
import React from 'react'
import Image from "next/image"
import img from "../public/Linkedin-logo-png.png"
import HeaderLink from '../components/HeaderLink'
function home() {
  return (
    <div>
        <header className="flex justify-around items-center py-4 ">
            <div className='relative w-36 h-10'>
                <Image src={img} layout="fill" objectFit="contain" />
            </div>
            <div className='flex items-center sm:divide-x divide-gray-300'>
                <div className='hidden sm:flex space-x-8 pr-4'>
                    <HeaderLink Icon={ExploreIcon} text="Discover"/>
                    <HeaderLink Icon={GroupIcon} text="People"/>
                    <HeaderLink Icon={OndemandVideoSharpIcon} text="Learning"/>
                    <HeaderLink Icon={BusinessCenter/>
                </div>
            </div>
        </header>
    </div>
  )
}

export default home