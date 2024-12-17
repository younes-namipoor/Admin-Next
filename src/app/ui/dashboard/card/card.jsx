import React from 'react'
import { MdSupervisedUserCircle } from 'react-icons/md'
export default function Card() {
  return (
    <div className='flex w-full hover:bg-[#2e374a] rounded-[10px] p-[20px] gap-[20px] cursor-pointer bg-[#182237]'>
        <MdSupervisedUserCircle />
        <div className='flex flex-col gap-[20px]'>
            <span>Total users</span>
            <span className='font-[24px]'>10.287</span>
            <span className='font-[14px]'>
                <span className='text-green-600'>%12</span> than previous week
            </span>
        </div>
    </div>
  )
}
