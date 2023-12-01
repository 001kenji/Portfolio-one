import React, { useState } from "react";
import '../CSS/contact.css'
import fail from '../assets/fail.jpg'
import tick from '../assets/tick.jpg'
import loadImg from '../assets/loader.png' 
export default Contact
function Contact() {
    const btn = document.getElementById('button');
    const [emailData, setdata] = useState(
        {
            to_name : "NICHOLAS",
            from_name : "",
            message : "",
            email_id  : ""
        }
    )

    
    const [progError,seterror] = useState(false)
    const [progSuccess,setSuccess] = useState(false)
    const [progLoad, setload] = useState(false)
    const progressSuccess = {
        display : progSuccess ? 'flex' : 'none'
    }
    const progressError = {
        display : progError ? 'flex' : 'none'
    }
    const progressLoad = {
        display : progLoad ? 'flex' : 'none'
    }
  
    const errorDiv = document.getElementsByName('errorDiv')
    const successDiv = document.getElementsByName('successDiv')
    const loadDiv = document.getElementsByName('loadDiv')
   
   
    function Showerror(props){
        if(props == 'show'){
           seterror(true)
        }else if(props == 'hide'){
            seterror(false)
        }
    }
    function ShowSuccess(props){
        if(props == 'show'){
            setSuccess(true)
        }else if(props == 'hide'){
            setSuccess(false)
        }
    }
    function ShowLoad(props){
        const loadDiv = document.getElementsByName('loadDiv')
        if(props == 'show'){
            setload(true)
        }else if(props == 'hide'){
            setload(false)
        }
    }

    function Handlechange(event) {
        const {value, name} = event.target
    
        setdata((e) => {
            return {
                ...e,
                [name] : value
            }
        })
        console.log(emailData)
    }

    function SubmitForm(event) {
       event.preventDefault();
    
       btn.innerHTML = 'Sending...';
        ShowLoad('show')
       const serviceID = 'service_sg63kre';
       const templateID = 'template_66y53lj';
       console.log(emailData)
    
        emailjs.send(serviceID, templateID, emailData)
        .then(() => {
          btn.innerHTML = 'Send';
          ShowLoad('hide')
          ShowSuccess('show')
          setTimeout(() => {
            ShowSuccess('hide')
          }, 2000);

          
        }, (err) => {
          btn.innerHTML = 'Send';
          ShowLoad('hide')
          Showerror('show')
          setTimeout(() => {
            Showerror('hide')
          }, 3000);
        });


    };    

    return (
        <>

            <div style={progressError} className="top-0 sticky" name='errorDiv' id="notifier">
                <img className="w-6 animate-ping p-1.5 sm:w-8 "  src={fail} alt="" />
              <p className="text-sm font-semibold text-slate-100  sm:text-base" id="error">Error</p>   
            </div>
            <div style={progressSuccess} className="top-0 sticky" name='successDiv' id="notifier" > 
                <img className="w-6 sm:w-8 "  src={tick} alt="" />
                <p className="bg-black  text-sm sm:text-base rounded-sm top-1 text-green-500 font-bold p-2 mx-auto w-fit">Successfull</p>
           </div>
            <div style={progressLoad} className="top-0 sticky" name='loadDiv' id="notifier">
                <img className="w-6 bg-blue-500 p-1 animate-spin sm:w-8 "  src={loadImg} alt="" />
                <p className="bg-black animate-pulse text-sm sm:text-base rounded-sm top-1 text-blue-500 font-bold p-2 mx-auto w-fit" >Loading...</p>
            </div>
         
        <div id="master-contact-div" className="grid   justify-center align-middle text-center">  {/*owning div */}
        <div className=" md:bg-slate-500 rounded-sm md:bg-opacity-25 m-4" id="header-contact-div" >{/*heading div */}
            <big className="text-slate-100">GET IN TOUCH</big>
            <span className=" bg-yellow-400"></span>
        </div>
        

            <div>{/*contact div */}

            <form onSubmit={SubmitForm} id="form">
                <div  id="field">
                    {/* <label for="to_name">to_name</label> */}
                    <input required  value='NICHOLAS'  type="text" name="to_name" id="to_name" />
                </div>
                <div class="field2">
                    {/* <label for="from_name">from_name</label> */}
                    <input onChange={Handlechange} placeholder="FULL NAME" type="text" name="from_name" id="from_name"  />
                </div>
                <div class="field3">
                    {/* <label for="message">message</label> */}
                    <input required onChange={Handlechange} placeholder="MESSAGE" type="text" name="message" id="message"  />
                </div>
                <div class="field4">
                    {/* <label for="email_id">email_id</label> */}
                    <input required onChange={Handlechange} placeholder="EMAIL" type="text" name="email_id" id="email_id"  />
                </div>

                <button className=" text-white focus:bg-transparent focus:text-yellow-400 font-semibold bg-yellow-400" type="submit" id="button">SEND</button>
                </form>


            </div>
        </div>
        
        </>
    )

}