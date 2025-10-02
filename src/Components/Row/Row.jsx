import React from 'react'

function Row({item}) {
  return (
    <div className='grid md:grid-cols-4 grid-cols-2 md:px-34 mt-16 gap-x-0.5 gap-y-2'>
        {item}
    </div>
  )
}

export default Row