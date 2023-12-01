import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import '../CSS/footer.css'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineAddIcCall } from "react-icons/md";
import { MdMarkEmailUnread } from "react-icons/md";
export default Footer 
function Footer() {

    const date = new Date()
    const year = date.getFullYear()

   

    return(
        <>
         <div id="master-footer-div" className=" bg-slate-800"> {/*owner div */}
            <div className="  bg-opacity-30 bg-slate-500 text-slate-100" id="summery-div"> {/*summery div */}
                <big className=" text-slate-50">NICHOLAS</big>
                <p>As a software developer with a passion for creating innovative solutions, I bring a blend of technical expertise and problem-solving skills to every project I undertake.</p>
            </div>
            <div className=" bg-opacity-30 bg-slate-500 rounded-sm text-slate-100" id="link-div">{/*link div */}

                <div className='text-slate-50 flex sm:gap-12 flex-row gap-8 p-3 sm:justify-end justify-center dark:text-slate-100 ' id='socialDiv' >
                  
                  <a href="https://www.facebook.com/profile.php?id=100090430154934"><FaFacebook className=' text-blue-600 text-2xl p-1 bg-white rounded-md' /></a>
                  
                  <a href="https://wa.me/qr/DDQ3RHQ7JRZQB1"><RiWhatsappFill className=' text-green-600  text-2xl p-1 bg-white rounded-md' /></a>
                  
                  <a href="https://instagram.com/kariukinicholas2023?igshid=NzZlODBkYWE4Ng=="><FaInstagramSquare className=' bg-black text-pink-600 text-2xl p-1  rounded-md' /></a>
                  
                  <a href="https://twitter.com/Nicolae_karis"><FaSquareTwitter className=' text-blue-600  text-2xl p-1 bg-white rounded-md' /></a>
                  
                  <a href=""><FaTelegram className=' text-blue-600  text-2xl p-1 bg-white rounded-md' /></a>
                


                </div>
            </div> 
            <div className=" bg-opacity-30 bg-slate-500 text-slate-100"  id="contact-div">{/*contact us div */}
                <big>Contact Us</big>
                <div id="contact-inner-div" className="" >
                <span>
                <IoLocationOutline className=" text-yellow-400" size={20} />
                     <p>Location {import.meta.env.VITE_lOCATION}</p>
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

            </div> 
           
        </div>

         <div className=" bg-slate-800 text-slate-100 top-0" id="copyright-div">
                <span>
                &#169; {year} All Rights Reserved. Design be Brian Njuguna
                </span>
            </div>
        </>
    )
}