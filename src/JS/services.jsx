import React from "react";
import '../CSS/services.css'
import cyber from '../assets/security.png'
import network from '../assets/networking.png'
import binary from '../assets/binary.png'


export default Services 
function Services() {

const ourServices = [
    {
        title : 'Cyber Security',
        icon : cyber,
        descrition : ' In the ever-evolving realm of cybersecurity, I stand as a guardian, protecting the digital world from the ever-present threat of cyberattacks. With a keen eye and a robust arsenal of tools, I safeguard sensitive data, thwart malicious intrusions, and maintain the integrity of systems. My mission is simple yet profound: to ensure that the digital landscape remains secure and resilient.'
    },
    {
        title : 'Networking',
        icon : network,
        descrition : 'I have a strong understanding of all aspects of networking, including design, implementation, and troubleshooting. I am also a certified expert in several networking technologies, including Cisco, Juniper, and Microsoft. I am passionate about helping businesses improve their network performance and security. '
    },
    {
        title : 'Programming',
        icon : binary,
        descrition : ' I am a highly skilled and experienced programmer with a passion for creating innovative and efficient software solutions. I have a strong foundation in a variety of programming languages and technologies, and I am always eager to learn new ones. I am also an effective communicator and collaborator, and I am always willing to go the extra mile to get the job done.'
    }
]
const ourServicesMapper = ourServices.map((details) => 
    <div className=" bg-slate-200 rounded-md pl-4 pr-4 ml-3 mr-3" id="our-services-maped-div">
        <img src={details.icon} alt="" />
        <big>{details.title}</big>
        <p className=" sm:text-lg">{details.descrition}</p>
        <button className=" focus:bg-transparent focus:text-yellow-500 mt-3 mb-2 bg-yellow-400 text-slate-100 font-medium rounded-sm">Read More</button>
    </div>
)

    return (
        <>
        
        <div id="owningDiv-service" className=" bg-slate-950 mb-3 ">{/* owning container */}

            
        <div id="heading-service-div" >{/* heading div */}
        <big>MY SERVICES</big>
        <span className="flex justify-center w-8 h-2 sm:w-28 rounded-md bg-yellow-400" ></span>

        </div>

        <div id="mapped-services-host-div">{/* card div */}
            {ourServicesMapper}
        </div>

        </div>
        </>
    )
}