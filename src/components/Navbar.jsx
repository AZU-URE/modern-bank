import React, { useState } from 'react'
import { logo, close, menu } from "../assets"
import { navLinks } from "../constants"

const Navbar = () => {
    return (
        <nav className='flex w-full py-6 justify-between items-center navbar'>
            <img src={logo} alt="logo" className="w-[124px] h-[32px]" />
        </nav>
    )
}

export default Navbar