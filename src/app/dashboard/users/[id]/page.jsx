import Image from 'next/image'
import React from 'react'
import './id.css'
export default function SinglePage() {
  return (
    <div className="flex gap-[50px] mt-[20px]">
    <div className="grow-[1] rounded-[10px] text-white justify-center flex flex-col items-center h-[300px] bg-[#182237]">
      <div className="relative w-[80%] h-[200px]  mb-[20px] rounded-[10px] overflow-hidden">
        <Image  src="/3.png" alt="" fill  />
      </div>
      <span>younes nami</span>
    </div>
    <div className="p-[20px] rounded-[10px] bg-[#182237] grow-[3] ">
      <form action="" className="flex flex-col">
        <input type="hidden" name="id"/>
        <label>Username</label>
        <input type="text" name="username" placeholder=""/>
        <label>Email</label>
        <input type="email" name="email" placeholder="" />
        <label>Password</label>
        <input type="password" name="password" />
        <label>Phone</label>
        <input type="text" name="phone" placeholder="" />
        <label>Address</label>
        <textarea type="text" name="address" placeholder="" />
        <label>Is Admin?</label>
        <select name="isAdmin" id="isAdmin">
          <option value={true} >Yes</option>
          <option value={false} >No</option>
        </select>
        <label>Is Active?</label>
        <select name="isActive" id="isActive">
          <option value={true} >Yes</option>
          <option value={false}>No</option>
        </select>
        <button className='bg-teal-600 w-full p-[20px] mt-[30px] text-white rounded-[5px] border-none cursor-pointer'>Update</button>
      </form>
    </div>
  </div>
  )
}
