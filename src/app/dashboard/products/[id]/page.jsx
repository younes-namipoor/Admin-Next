import Image from 'next/image'
import React from 'react'
import './id.css'
export default function SinglePageProduct() {
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
        <label>Title</label>
        <input type="text" name="Title" placeholder=""/>
        <label>Price</label>
        <input type="number" name="Price" placeholder="" />
        <label>Stock</label>
        <input type="number" name="Stock" />
        <label>Color</label>
        <input type="text" name="Color" placeholder="" />
        <label>Size</label>
        <textarea type="text" name="Size" placeholder="" />
        <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder=""
          ></textarea>
        <button className='bg-teal-600 w-full p-[20px] mt-[30px] text-white rounded-[5px] border-none cursor-pointer'>Update</button>
      </form>
    </div>
  </div>
  )
}
