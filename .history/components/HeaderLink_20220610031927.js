import React from 'react'

function HeaderLink({Icon,text,avatar,feed}) {
  return (
    <div className={`cursor-pointer flex flex-col justify-center items-center`}>
        {avatar?<Icon className="!h-7 !w-7 lg:!-mb-1"}
        <h4 className='text-sm'>{text}</h4>
    </div>
  )
}

export default HeaderLink