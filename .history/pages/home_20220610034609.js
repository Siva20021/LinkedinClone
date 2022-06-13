
import React from 'react'
import Image from "next/image"
import img from "../public/Linkedin-logo-png.png"
import HeaderLink from '../components/HeaderLink'
import ExploreIcon from "@mui/icons-material/Explore";
import GroupIcon from "@mui/icons-material/Group";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
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
                    <HeaderLink Icon={BusinessCenterIcon} text="Jobs"/>
                </div>
                <div className='pl-4'>
                    <button className='text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5 transition-all hover:border-2'>Sign In</button>
                </div>
            </div>
        </header>
        <main className='flex flex-col xl:flex-row items-center max-w-screen-lg mx-auto'>
            <div className='space-y-6 xl:space-y-10'>
                <h1 className='text-3xl md:text-5xl text-amber-800/80 max-w-xl !leading-snug pl-4 xl:pl-0'>Welcome to our professional Community</h1>
                <div className='space-y-4'>
                    <div className='intent'></div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default home