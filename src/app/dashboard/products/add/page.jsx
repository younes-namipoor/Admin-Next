import React from 'react'
import './add.css'
export default function Add() {
  return (
    <div className='bg-[#182237] rounded-[10px] p-[20px] mt-[20px]'>
      <form className='flex flex-wrap justify-between'>
        <input type="text" placeholder="title" name="title" required />
        <select name="cat" id="cat">
          <option value="general">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="number" placeholder="price" name="price" required />
        <input type="number" placeholder="stock" name="stock" required />
        <input type="text" placeholder="color" name="color" />
        <input type="text" placeholder="size" name="size" />
        <textarea className='w-full'
          required
          name="desc"
          id="desc"
          rows="16"
          placeholder="Description"
        ></textarea>
        <button type="submit" className='bg-teal-500 w-full text-white p-[30px] border-none rounded-[5px]'>Submit</button>
      </form>
    </div>
  )
}
