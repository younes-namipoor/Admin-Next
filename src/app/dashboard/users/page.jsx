"use client"
import Search from '@/app/ui/dashboard/search/search'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import './users.css'
import Pagination from '@/app/ui/dashboard/pagination/pagination'
export default function Users() {
  const [data , setData] = useState()
  useEffect(()=>{
    fetch('https://6760c5656be7889dc35ecf4b.mockapi.io/curd')
    .then(res => {
      if(res.ok) return res.json()
      Promise.reject(err)
  })
  .then(data => {
    setData(data)  
  })
  .catch((err)=>console.log(err))
  },[])
 

  return (
    <div className='bg-[#182237] p-[20px] rounded-[10px] mt-[20px]'>
      <div className='flex justify-between items-center'>
      <Search placeholder="Search For a User" />
      <Link href={"/dashboard/users/add"}>
      <button className='p-[10px] bg-[#5d57c9] text-white rounded-[5px] border-none cursor-pointer'>Add New</button>
      </Link>
      </div>
      <table className='w-full mt-[20px]'>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
            {data && data.map((val, i)=>{
             
                
              
              return <tr key={val.id}>
              <td>
                <div className=" flex items-center gap-[10px]">
                  <Image
                    src={val.img}
                    alt=""
                    width={40}
                    height={40}
                    className="object-cover rounded-[50%]"
                  />
                  {val.username}
                </div>
              </td>
              <td>{val.email}</td>
              <td>{val.create}</td>
              <td>{val.isadmin ? "Admin" : "Client"}</td>
              <td>{val.isactive ? "Active" : "Passive"}</td>
              <td>
                <div className='flex gap-[10px]'>
                  <Link href={`/dashboard/users/${val.username}`}>
                    <button className="px-[10px] py-[5px] rounded-[5px] cursor-pointer text-white border-none bg-teal-600">
                      View
                    </button>
                  </Link>
                  <form>
                    <input type="hidden" name="id"/>
                    <button className="px-[10px] py-[5px] rounded-[5px] cursor-pointer text-white border-none  bg-red-600">
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          })}
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}
