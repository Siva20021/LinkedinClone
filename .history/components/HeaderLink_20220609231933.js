import React from 'react'

function HeaderLink({Icon,text,avatar}) {
  return (
    <div className='cursor-pointer'>
        {avatar?(<Icon classname="!h-7 !w-7 lg:!-mb-1
        "/>):(<Icon/>)}
        <h4 className='text-sm'>{text}</h4>
    </div>
  )
}

export default HeaderLink