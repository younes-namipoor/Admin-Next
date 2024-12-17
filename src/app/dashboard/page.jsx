"use client"
import React from 'react'
import Card from './../ui/dashboard/card/card'
import Rightbar from '../ui/dashboard/rightbar/rightbar'
import Transactions from './../ui/dashboard/transactions/transactions'
import Chart from '../ui/dashboard/chart/chart'
export default function Dashboard() {
  return (
    <div className='flex gap-[20px] mt-[20px]'>
      <div className='flex grow-[100] flex-col gap-[20px]'>
        <div className='flex gap-[20px] justify-between'>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className='flex grow-[1]'>
        <Rightbar />
      </div>
    </div>
  )
}
