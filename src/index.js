import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './page/home'
import Blog from './page/blog'
import About from './page/about'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

<BrowserRouter>
  <Routes>
    <Route path='/' element ={<About/>}/>
    <Route path='/blog' element ={<Blog/>} />
    <Route path ='/home' element = {<Home/>}/>

  </Routes>

</BrowserRouter>

);
// ReactDOM.render(<App />, document.getElementById("root"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

