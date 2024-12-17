"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
export default function navbar() {
  const pathname = usePathname()
  return (
    <div className='flex justify-between items-center p-[20px] rounded-[10px] bg-[#182237]'>
      <div className='text-white font-bold capitalize'>{pathname.split("/").pop()}</div>
      <div className='flex items-center gap-[20px]'>
        <div className='flex items-center gap-[10px] bg-[#2e374a] rounded-[10px] p-[10px]'>
          <MdSearch className='cursor-pointer' />
          <input type='text' placeholder='Search' className='bg-transparent text-white border-none outline-none' />
        </div>
        <div className='flex gap-[20px] '>
          <MdOutlineChat className='cursor-pointer' size={20} />
          <MdNotifications className='cursor-pointer' size={20} />
          <MdPublic className='cursor-pointer' size={20} />
        </div>
      </div>
    </div>
  )
}
