import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
export default function Header() {
    const location = useLocation()
    const navigate = useNavigate()

    function pathMatchRoute(route) {
        if (route === location.pathname){
            return true
        }
    }

  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50 '>
        <header className='flex justify-between items-center px-5 max-w-6xl mx-auto'>
            <div>
                <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="logo" className='h-5 cursor-pointer' onClick={() => navigate("/")}/>
            </div>
            <div>
                <ul className='flex space-x-10'>
                    <li className={`py-3 text-sm font-semibold text-gray-400 cursor-pointer  ${pathMatchRoute('/') && "text-black border-b-[4px] border-b-red-500"}`} onClick={() => navigate("/")}>Home</li>
                    <li className={`py-3 text-sm font-semibold text-gray-400 cursor-pointer ${pathMatchRoute("/offers") && "text-black border-b-[4px] border-b-red-500"}`} onClick={() => navigate("/offers")}>Offers</li>
                    <li className={`py-3 text-sm font-semibold text-gray-400 cursor-pointer ${pathMatchRoute("/signin") && "text-black border-b-[4px] border-b-red-500 transition ease-in-out"}`} onClick={() => navigate("/signin")}>Sign In</li>
                </ul>
            </div>
        </header>
    </div>
  )
}
