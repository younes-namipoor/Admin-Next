import React from 'react'
import Image from 'next/image'
import './transactions.css'
export default function Transactions() {
  return (
    <div className='bg-[#182237] p-[20px] rounded-[10px]'>
      <h2 className='text-white mt-[20px] font-[200]'>Latest Transactions</h2>
      <table className="w-full">
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex gap-[10px] items-center">
                <Image
                  src="/3.png"
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-[50%] w-[40px] h-[40px] object-cover"
                />
                Younes Nami
              </div>
            </td>
            <td>
              <span className="font-[14px] p-[5px] rounded-[5px] bg-[#f7cb7375] text-white">
                Pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
            <div className="flex gap-[10px] items-center ">
                <Image
                  src="/3.png"
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-[50%] w-[40px] h-[40px] object-cover"
                />
                Reza Hyrani
              </div>
            </td>
            <td>
              <span className="bg-[#afd6ee75] font-[14px] p-[5px] rounded-[5px] text-white">Done</span>
            </td>
            <td>17.03.2024</td>
            <td>$7.300</td>
          </tr>
          <tr>
            <td>
            <div className="flex gap-[10px] items-center ">
                <Image
                  src="/3.png"
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-[50%] w-[40px] h-[40px] object-cover"
                />
                Ali Khazaii
              </div>
            </td>
            <td>
              <span className="font-[14px] p-[5px] rounded-[5px] bg-[#f7737375] text-white">
                Cancelled
              </span>
            </td>
            <td>10.05.2024</td>
            <td>$5.400</td>
          </tr>
          <tr>
            <td>
            <div className="flex gap-[10px] items-center ">
                <Image
                  src="/3.png"
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-[50%] w-[40px] h-[40px] object-cover"
                />
                Sajad Sheikh
              </div>
            </td>
            <td>
              <span className="font-[14px] p-[5px] rounded-[5px] bg-[#f7cb7375] text-white">
                Pending
              </span>
            </td>
            <td>17.08.2024</td>
            <td>$8.500</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
