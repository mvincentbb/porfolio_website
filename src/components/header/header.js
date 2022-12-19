import React, {useState} from "react"
import LOGO from "../../assets/Logo.svg"
import {Link} from "react-router-dom";


// eslint-disable-next-line import/no-unresolved
// import LOGO from './assets/Logo.svg'



const Header = () => {
    const [hamburgerMenuSelected, setHamburgerMenuSelected] = useState(false)
  return (
    <nav className="relative container mx-auto px-10">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt-4">
          <Link to="/home" className="">
            <img src={LOGO} alt="" />
          </Link>
        </div>
        {/* Menu Item */}
        <div className="hidden md:flex space-x-60">

          <a href="#" className="hover:text-blue  hover:font-bold">
            BLOG
          </a>
          <Link to="/" className="hover:text-blue hover:font-bold">ABOUT</Link>

        </div>

            {/*  Hamburger Icon */}
          <button
            id="menu-btn"
            onClick={( )=> setHamburgerMenuSelected(!hamburgerMenuSelected)}
            className={ hamburgerMenuSelected === true ? `open
                        block hamburger md:hidden focus:outline-none`  : `block hamburger md:hidden focus:outline-none` } 
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
         
      </div>
         {/* Mobile Menu */}
         <div className="md:hidden">
          <div id="menu" 

        //   absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md
          className =  { hamburgerMenuSelected === true ?
            `absolute flex flex-col 
            items-center   
           self-end -mt-4 py-6 px-8 space-y-6 font-bold bg-white sm:w-auto 
           sm:self-center  right-12 drop-shadow-lg`:
            `hidden absolute flex flex-col 
           items-center   
          self-end -mt-4 py-6 px-8 space-y-6 font-bold bg-white sm:w-auto 
          sm:self-center  right-12 drop-shadow-lg`}>
            <a href="#">BLOG</a>
            <a href="#">ABOUT</a>
          </div>
        </div>
    </nav>
  )
}

export default Header
