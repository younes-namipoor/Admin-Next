"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter() // استفاده از useRouter برای ریدایرکت

  const handleLogin = (e) => {
    e.preventDefault()
    if (username === 'admin' && password === 'admin') {
      // اگر نام کاربری و رمز عبور درست باشند، به صفحه بعدی ریدایرکت می‌کنیم
      setError('')
      router.push('/dashboard') // ریدایرکت به صفحه داشبورد
    } else {
      // اگر نام کاربری یا رمز عبور اشتباه باشد، پیام خطا نشان داده می‌شود
      setError('Invalid username or password')
    }
  }

  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
      <form onSubmit={handleLogin} className="bg-[#182237] w-[500px] h-[500px] p-[50px] rounded-[10px] flex flex-col justify-center gap-[30px]">
        <h1 className='w-full text-center text-[50px]'>Login</h1>
        <input 
          className='p-[30px] border-[2px] border-solid bg-[#182237] rounded-[5px] outline-none text-white' 
          type="text" 
          placeholder="username" 
          name="username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          className='p-[30px] border-[2px] border-solid bg-[#182237] rounded-[5px] outline-none text-white' 
          type="password" 
          placeholder="password" 
          name="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        {error && <p className="text-red-500 text-center">{error}</p>}
        <button className='rounded-[5px] w-full p-[30px] bg-teal-600 text-white' type="submit">
          Login
        </button>
      </form>
    </div>
  )
}
