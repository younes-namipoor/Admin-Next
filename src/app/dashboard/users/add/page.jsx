import React from 'react'
import './add.css'
export default function Add() {
  return (
    <div className='bg-[#182237] rounded-[10px] p-[20px] mt-[20px]'>
      <form className='flex flex-wrap justify-between'>
      <input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <input type="phone" placeholder="phone" name="phone" />
        <select name="isAdmin" id="isAdmin">
          <option value={false}>
            Is Admin?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true}>
            Is Active?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
        className='w-full'
          name="address"
          id="address"
          rows="16"
          placeholder="Address"
        ></textarea>
        <button type="submit" className='bg-teal-500 w-full text-white p-[30px] border-none rounded-[5px]'>Submit</button>
      </form>
    </div>
  )
}
