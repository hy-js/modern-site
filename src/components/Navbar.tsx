import Link from "next/link"
import React from "react"
import { Socials } from "./Socials"


const Navbar = async () => {


  return (
    <div className='fixed inset-x-0 top-0 bg-[#5E6873] z-[10] h-fit p-2 opacity-40'>
      <div className='flex items-center justify-between h-full mx-auto '>
        {/* Logo */}
        <Link href={"/"} className='flex items-center'>
          <div className='text-xl font-bold '>
            Rhys Dawson
          </div>
        </Link>
        <div className='flex items-center'>
          <Socials />
        </div>
      </div>
    </div>
  )
}

export default Navbar
