import React from 'react'

function HeaderLink({Icon,text,avatar,feed}) {
  return (
    <div className={`cursor-pointer flex flex-col justify-center
    items-center $(feed ?"text-black/60 hover:text-black dark:)
    `}>
        <h4 className='text-sm'>{text}</h4>
    </div>
  )
}

export default HeaderLink