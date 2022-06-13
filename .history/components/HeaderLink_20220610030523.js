import React from 'react'

function HeaderLink({Icon,text,avatar,feed}) {
  return (
    <div className={'cursor-pointer flex flex-col justify-center
    '}>
        <h4 className='text-sm'>{text}</h4>
    </div>
  )
}

export default HeaderLink