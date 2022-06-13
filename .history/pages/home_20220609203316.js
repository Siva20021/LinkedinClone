/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from "next/image"
function home() {
  return (
    <div>
        <header>
            <div>
                // eslint-disable-next-line jsx-a11y/alt-text
                <Image src="https://rb.gy/vtbzlp" layout="fill" objectFit="contain" />
            </div>
        </header>
    </div>
  )
}

export default home