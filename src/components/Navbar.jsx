import React from 'react'
import './Navbar.css'
import {FaBars} from 'react-icons/fa'
const Navbar = () => {
    return (
        <div id='nav-container' className='h-[56px] bg-[#0f0e17] flex justify-between items-center px-3 border-b'>
            <h1 id='nav-title' className='text-[#fffffe] text-2xl font-bold'>Atam's Portofolio</h1>
            <ul id='nav-lists' className='hidden md:text-[#fffffe] md:flex md:gap-6'>
                <li>Home</li>
                <li>Projects</li>
                <li>Certificate</li>
            </ul>
            <FaBars color='#fffffe' className='md:hidden'/>
        </div>
    )
}

export default Navbar