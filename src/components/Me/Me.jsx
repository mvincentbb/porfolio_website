import React from 'react';
import {useState} from 'react'
import MyPicture from '../../assets/my_picture.avif'
// import LOGO from '../../assets/Logo.svg'
// import LOGO from '../../assets/Logo.svg'

const Me =  () =>{

    return ( 
    <section id="hero">
        <div className="container flex flex-col items-center px-6 mx-auto space-y-0 md:space-y-0 md:flex-row">
            <div  className="flex flex-col mb-10  md:w-1/2">
                <div className="name md:my-12">
                    <h1 className=" text-4xl font-bold text-center md:text-7xl   md:text-left">
                    Vincent
                    </h1>
                    <h1 className=" text-4xl font-bold text-center md:text-7xl md:text-left">
                        Bakpatina
                    </h1>
                </div>
                <div className="profession mt-6">
                {/* <h1 className=" text-2xl font-bold text-center md:text-5xl md:text-left">
                    Medical Doctor
                    </h1> */}
                    <h1 className=" text-2xl font-bold text-center md:text-5xl md:text-left">
                    Software Engineer
                    </h1>
                </div>
                <div className="quote md:max-w-xs  md:mt-24 ">
                    <h1 className="text-2xl font-bold text-left md:text-6xl md:text-left">
                    “
                    </h1>
                    <h2 className="md:md:text-xl">
                    Helping people around me is my passion;
                     programming and healing is one way to do it
                    </h2>
                    <h1 className="text-2xl  font-bold text-right md:text-6xl md:text-right">
                    ”
                    </h1>
                </div>
            </div>
            <div className="md:w-1/2 rounded-[44px] bg-gray-200 " >
            <img  className="container relative  bg-center " src={MyPicture} alt="" />

            </div>
        </div>
    </section>

    );
}

export default  Me;
