
import Sidebar from './../ui/dashboard/sidebar/sidebar'
import Navbar from './../ui/dashboard/navbar/navbar'
import Footer from '../ui/dashboard/footer/footer'
export default function Layout({children}) {
  return (
    <div className='flex'>
        <div className=' grow-0 bg-[#182237] p-[20px]'>
            <Sidebar />
        </div>
        <div className=' grow-[3] p-[20px]'>
            <Navbar />
            {children}
            <Footer />
        </div>
    </div>
  )
}
