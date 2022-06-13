
import React from 'react'
import Image from "next/image"
import img from "../public/Linkedin-logo-png.png"
function home() {
  return (
    <div>
        <header>
            <div>
                
                <Image src={img} layout="fill" objectFit="contain" />
            </div>
        </header>
    </div>
  )
}

export default home