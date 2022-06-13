import React from 'react'

function HeaderLink({Icon,text,avatar}) {
  return (
    <div>
        {avatar?(<Icon classname="!h-7 !w-7 !g:!-mb-1
        "/>):(<Icon/>)}
        <h4>{text}</h4>
    </div>
  )
}

export default HeaderLink