import React from 'react';
import LOGO from '../../assets/Logo.svg'

const Header =  () =>{

    return ( 
        <nav className='relative container mx-auto px-10'>
            <div className="flex items-center justify-between">
                <div className='pt-4'>
                    <img src={LOGO}  alt="" /> 
                </div>
                <div className="hidden md:flex space-x-60">
                    <a href="#" className="hover:text-blue  hover:font-bold">BLOG</a>
                    <a href="#"className="hover:text-blue hover:font-bold">ABOUT</a>
                </div>
            </div>
        </nav>

    );
}

export default  Header;