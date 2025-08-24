import React from 'react'

function Row({item}) {
  return (
    <div className='flex items-center justify-between pl-34 pr-34 mt-16 w-full m-auto'>
        {item}
    </div>
  )
}

export default Row