"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Menulink({item}) {
    const pathname = usePathname()
  return (
    <Link href={item.path} className={`${'p-[20px] mt-[5px] mb-[5px] rounded-[10px] hover:bg-[#2e374a] flex items-center gap-[10px]'} ${pathname === item.path && "bg-[#2e374a] "}`} >
        {item.icon}
        {item.title}
    </Link>
  )
}
