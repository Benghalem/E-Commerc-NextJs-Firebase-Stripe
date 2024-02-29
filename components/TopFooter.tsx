import React from 'react'

export const TopFooter = () => {
  return (
    <div className='w-full bg-lightBlue'>
        <div className='py-10 flex flex-col gap-4 items-center justify-center4'>
            <p className=' font-medium'>We will love to hear what you think!</p>
            <button className=' w-36 h-9 border-[1px] border-black bg-white rounded-full
            hover:border-[2px] transation-all duration-200'>Give feedback</button>
        </div>
    </div>
  )
}
