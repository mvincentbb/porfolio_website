import React from 'react';
import MyPicture from '../../assets/my_picture.png'
// import LOGO from '../../assets/Logo.svg'

const Me =  () =>{

    return ( 
    <section id="hero">
        <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-20 space-y-0 md:space-y-0 md:flex-row">
            <div  className="flex flex-col mb-32 space-y-12 md:w-1/2">
                <div className="name">
                    <h1 className=" text-4xl font-bold text-center md:text-7xl md:text-left">
                    Vincent
                    </h1>
                    <h1 className=" text-4xl font-bold text-center md:text-7xl md:text-left">
                        Paul,
                    </h1>
                </div>
                <div className="profession">
                <h1 className=" text-2xl font-bold text-center md:text-5xl md:text-left">
                    Medical Doctor
                    </h1>
                    <h1 className=" text-2xl font-bold text-center md:text-5xl md:text-left">
                    Software Engineer
                    </h1>
                </div>

            
            </div>
            <div className="md:w-1/2">
            <img src={MyPicture} alt="" />

            </div>
        </div>
    </section>

    );
}

export default  Me;