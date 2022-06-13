import React from 'react'

function HeaderLink({Icon,text,avatar,feed}) {
  return (
    <div className={`cursor-pointer flex flex-col justify-center
    items-center $(feed ?"text-black/60 hover:text-black dark:text-white/75 dark:hover:text-white lg:-mb-1.5 space-y-1":"text-gray-500 )
    `}>
        <h4 className='text-sm'>{text}</h4>
    </div>
  )
}

export default HeaderLink