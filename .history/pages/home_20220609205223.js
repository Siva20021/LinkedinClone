
import React from 'react'
import Image from "next/image"
function home() {
  return (
    <div>
        <header>
            <div>
                
                <Image src="." layout="fill" objectFit="contain" />
            </div>
        </header>
    </div>
  )
}

export default home