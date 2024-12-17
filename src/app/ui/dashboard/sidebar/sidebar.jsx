import React from 'react'

import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import Menulink from './menuitems/menuitems';
import Image from 'next/image';


const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];
export default function sidebar() {
  return (
    <div className='sticky top-[40px]'>
      <div className='flex items-center gap-[20px] mb-[20px]'>
        <Image src="/1.jpg" alt='' width="50" height="50" className='object-cover rounded-[50%] w-[50px] h-[50px]' />
        <div className='flex-col flex'> 
          <span className='font-[500]'>Younes Namipoor</span>
          <span className='text-white font-[12px]'>Administrator</span>
        </div>
      </div>
      <ul>
        {menuItems.map((val)=>{
          return <li key={val.title}>
            <span className='font-bold font-[13px] text-white mt-[5px] mb-[5px]'>{val.title}</span>
            {val.list.map((item)=>{
              return <Menulink item={item} key={item.title} />
            })}
          </li>
        })}
      </ul>
      <button className='flex p-[20px] items-center cursor-pointer rounded-[10px] gap-[10px] mt-[5px] bg-transparent border-none outline-none w-full hover:bg-[#2e374a]'>
        <MdLogout />
        Logout</button>
    </div>
  )
}
