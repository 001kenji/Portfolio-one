import React from "react";
import '../CSS/about.css'
import pick from '../assets/pick1.jpg'

export default About 
function About () {

    return (
        <>
        <div id="master-about-card" className=" bg-slate-100">
            <div className=" flex flex-col" id="about-card">
                    <img className="  " src={pick} alt="" />
                
                <div  className="  shadow-md bg-slate-100 shadow-slate-400" id="about-card-details">
                    <h1>WHO AM I?</h1>
                    <p>
                        As a software developer with a passion for creating innovative solutions, I bring a blend of technical expertise and problem-solving skills to every project I undertake. My experience
                         in [relevant programming languages or frameworks] has enabled me to develop 
                         [specific projects or accomplishments], and I am eager to contribute my skills to your team.</p>
                    <button className=" bg-yellow-400 hover:text-yellow-400 text-sm sm:text-base text-white hover:bg-transparent ">READ MORE</button>
                </div>
            </div>
        </div>
        </>
    )
}