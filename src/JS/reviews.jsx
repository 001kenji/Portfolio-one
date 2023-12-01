import React from "react";
import '../CSS/reviews.css'
import edwardImg from '../assets/EDWARD.jpg'
import mungaiImg from '../assets/MUNGAI.jpg'
import thuoImg from '../assets/thuo.png'
export default Reviews 
function Reviews() {

    const reviewData = [
        {
            imgSrc : edwardImg,
            name : 'Prof. EDWARD O.',
            description : 'I was so impressed with the team`s expertise and responsiveness. They were able to quickly solve my complex IT problem and get me back up and running.',
            contact : '0704362998'
        },
        {
            imgSrc : thuoImg,
            name : 'Egineer Thuo J.',
            description : 'This company is a lifesaver! They`ve helped me with everything from setting up my new computer to troubleshooting software issues. I highly recommend their services.',
            contact : '0741312946'
        },
        {
            imgSrc : mungaiImg,
            name : 'Dr. MUNGAI B.',
            description : 'I`m so glad I chose this company for my IT needs. They`re always professional, courteous, and affordable. I can`t say enough good things about them!',
            contact : '0794556959'
        }
    ]
    const reviewDataMapper = reviewData.map((details) => 
        <div className=" rounded-sm bg-slate-400" id='mapping-div'>
            <img className=" sm:w-44 sm:h-48 w-36 h-40 " src={details.imgSrc} alt="client image" />
            <big className=" text-slate-100 font-semibold">{details.name}</big>
            <textarea disabled className="  font-semibold w-72 text-center bg-transparent h-fit">{details.description}</textarea>
            <p className=" mt-1 text-cyan-500 p-1 bg-slate-900 font-semibold rounded-sm">{details.contact}</p>
        </div>
    )

    return(
        <>
         <div id="master-review-div" className="   bg-slate-100"> {/* owning div */}
         <div id="client-inner-div"  > {  /*header review div */}
                <big>WHAT MY CLIENT SAY</big>
                <span className=" text-center justify-center align-middle w-2 h-2 bg-yellow-300"></span>
         </div>

         <div id="review-host-div"> {/* content div */}
            {reviewDataMapper}
        </div>

        </div>
        
        </>
    )
}
