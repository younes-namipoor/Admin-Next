import Image from 'next/image'
import React from 'react'
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md'

export default function Rightbar() {
  return (
    <div className='w-[300px] relative'>
      <div className=''>
    <div className='relative bg-gradient-to-t mr-[20px] from-[#182237] to-[#253352] pt-[20px] pb-[20px] rounded-[10px] mb-[20px]'>
        <div className='absolute bottom-0 right-0 w-[50%] h-[50%]'>
          <Image src="/2.png" width={50} height={50} alt='' className='w-[100%] h-[100%] object-contain opacity-[.2]' />
        </div>
        <div className='flex flex-col gap-[24p] pl-[20px]'>
          <span className='font-bold'>
          🔥 Available Now
          </span>
          <h3 className='font-[500] font-[13px] text-white'>How to use the new version of the admin dashboard?</h3>
          <span>Takes 4 minutes to learn</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit eius libero perspiciatis recusandae possimus.</p>
          <button className='flex mt-[10px] p-[10px] items-center gap-[10px] w-max bg-[#5d57c9] border-none rounded-[5px] cursor-pointer text-white'>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className='bg-gradient-to-t from-[#182237] to-[#253352] pt-[20px] pb-[20px] rounded-[10px] mb-[20px] mr-[20px]'>
        <div className='flex flex-col gap-[24px] pl-[20px]'>
          <span className='font-bold'>
          🚀 Coming Soon
          </span>
          <h3 className='font-[500] font-[13px] text-white'> New server actions are available, partial pre-rendering is coming
          up!</h3>
          <span>Boost your productivity</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit eius libero perspiciatis recusandae possimus.</p>
          <button className='flex p-[10px] items-center gap-[10px] w-max bg-[#5d57c9] border-none rounded-[5px] cursor-pointer text-white' >
            <MdReadMore />
            Learn More
          </button>
        </div>
      </div>
      </div>
    </div>
  )
}
