import React, { useRef, useState } from "react";
import '../CSS/header.css'
export default Header 

import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineAddIcCall } from "react-icons/md";
import { MdMarkEmailUnread } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import homepik from  '../assets/pick1.jpg'
function Header() {
   
    const [listStylerState, setlistStyler] = useState(false)
  const listStyler = {
    visibility : listStylerState ? 'visible' : 'hidden'
  }
  const dispData = [
    {
        title : 'THE SOLUTION',
        paragraph : 'TO YOUR POBLEMS',
        content : 'I am capable of solving the day to day task at easy without being monitored'
    },
    {
        title : 'YOR SEFTEY',
        paragraph : 'MY RESPONSIBILITY',
        content : 'I am capable of managing cyber security attack from malitious programs'
    },
    {
        title : 'COMPITENT MANAGER',
        paragraph : 'IS WHAT YOU NEED',
        content : 'No need of woring about organizing your staff member, I will get that covered'
    }
  ]
const dispDatamapper = dispData.map((details) => 
    <div className=" bg-slate-500 bg-opacity-40" id="details-div">
        <h2>{details.title}</h2>
        <h1>{details.paragraph}</h1>
        <textarea disabled className=" text-slate-200">{details.content}</textarea>
    </div>
)
    return(
        <>
        
        <div id="main-headerDiv" >
            {/* top header */}
            <div className=" lg:text-white" id="top-header">
                <span>
                <IoLocationOutline className=" text-yellow-400" size={20} />
                     <p className="">Location {import.meta.env.VITE_lOCATION}</p>
                </span>
                
                <span>
                <MdOutlineAddIcCall className=" text-yellow-400" size={20} />
                    <p>Call: {import.meta.env.VITE_NUMBER}</p>
                    
                </span>
                
                <span>
                <MdMarkEmailUnread size={20} className=" text-yellow-400" />
                    <p>email {import.meta.env.VITE_EMAIL}</p>
                </span>
            </div>
            {/* for home pic */}
            <div   id="homePicDiv">
                    {/* <img src={homepik} alt="" /> */}
            </div>
            {/*botton header  */}
            <div id="botton-header">
                <div id="botton-header-name">
                    <span>NICHOLAS KARIUKI</span>
                </div>
                <div style={listStyler} id="botton-header-list">
                    <ul>
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>SERVICES</li>
                        <li>GUARDS</li>
                        <li>CONTACT US</li>
                    </ul>
                </div>
                <div id="botton-header-hamburger">
                <RxHamburgerMenu onClick={() => setlistStyler((e) => !e)} size={20} />

                </div>
            </div>

            {/* disp content part */}
            <div>
                <div id="disp-content">
                    {dispDatamapper}
                </div>
             
            </div>
        </div>
        
        </>
    )
}