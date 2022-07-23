
import React from 'react';
import Header from '../components/header/header';
// import Me from './components/Me/Me';
import Me  from '../components/Me/Me';
import Nav from '../components/menu/Nav';

export default function Home(){
    return(
        <div>
            <Header/>
            <Me/>
            <Nav/> 
        </div>  
    )
}