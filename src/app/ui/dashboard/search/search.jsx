
import React from 'react'
import { MdSearch } from 'react-icons/md'

export default function Search({placeholder}) {

  
  
  return (
    <div className='flex gap-[10px] items-center bg-[#2e374a] p-[10px] rounded-[10px] w-max'>
        <MdSearch className='cursor-pointer' />
        <input placeholder={placeholder} type='text'  className='bg-transparent text-white border-none outline-none text-white' />
    </div>
  )
}
