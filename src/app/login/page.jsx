import Link from 'next/link'
import React from 'react'

export default function Login() {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
      <form action="" className="bg-[#182237] w-[500px] h-[500px] p-[50px] rounded-[10px] flex flex-col justify-center gap-[30px]">
      <h1 className='w-full text-center text-[50px]'>Login</h1>
      <input className='p-[30px] border-[2px] border-solid bg-[#182237] rounded-[5px] outline-none text-white' type="text" placeholder="username" name="username" />
      <input className='p-[30px] border-[2px] border-solid bg-[#182237] rounded-[5px] outline-none text-white' type="password" placeholder="password" name="password" />
      <Link href={"/dashboard"} >
      <button className='rounded-[5px] w-full p-[30px] bg-teal-600 text-white' >Login</button>
      </Link>
    </form>
    </div>
  )
}
