import React from 'react'

export default function Pagination() {
  
  return (
    <div className='flex p-[10px] justify-between'>
        <button className='py-[5px] px-[10px] cursor-pointer disabled:cursor-none bg-white rounded-[5px] text-slate-600 mt-[25px]'>Pervious</button>
        <button className='py-[5px] px-[10px] cursor-pointer  bg-white rounded-[5px] text-slate-600 mt-[25px]'>Next</button>
    </div>
  )
}
