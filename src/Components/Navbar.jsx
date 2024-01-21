import React from 'react'
import { BiSolidShoppingBags } from "react-icons/bi";
import { FaUser,FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-scroll';
const Navbar = () => {
  return (
    <div>
        <div className='flex flex-row justify-between p-5 md:px-32 px-5 bg-PrimaryColor shadow-md'>
        
            <div className='flex flex-row items-center cursor-pointer gap-2'>
                <Link to='home' spy={true} smooth={true} duration={300} className='cursor-pointer'>
                <span><BiSolidShoppingBags size={35} className='text-ExtraDarkColor' /></span>
                </Link>
                <Link to='home' spy={true} smooth={true} duration={300} className='cursor-pointer'>
                <h1 className='text-2xl font-semibold text-ExtraDarkColor cursor-pointer'>NexGen Goods</h1>
                </Link>
            </div>
            <nav className='flex flex-row items-center text-lg font-semibold gap-8 text-ExtraDarkColor'>
                <Link to='home' spy={true} smooth={true} duration={300} className='cursor-pointer hover:text-black transition duration-300 ease-in-out'>Home</Link>
                <Link to='shop' spy={true} smooth={true} duration={300} className='cursor-pointer hover:text-black transition duration-300 ease-in-out'>Shop</Link>
                <Link to='features' spy={true} smooth={true} duration={300} className='cursor-pointer hover:text-black transition duration-300 ease-in-out'>Features</Link>
                <Link to='products' spy={true} smooth={true} duration={300} className='cursor-pointer hover:text-black transition duration-300 ease-in-out'>Poducts</Link>
                <Link to='review' spy={true} smooth={true} duration={300} className='cursor-pointer hover:text-black transition duration-300 ease-in-out'>Review</Link>
            </nav>
            <div className='flex items-center gap-4 text-ExtraDarkColor'>
                <FaUser size={25}/>
                <FaShoppingCart size={25}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar
