import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaLocationArrow } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import pic from "../assets/ContactImg.png";

export default function Contact() {
   return (
      <>
         <div className="absolute top-0 left-0 w-full z-10 ">
            <Navbar />
         </div>
         <img src={pic} alt="photo" className="h-[50vh] w-full object-cover" />
         <div className="flex lg:flex-row flex-col justify-between xl:px-32 md:px-10 px-3 bg-[#F4F3F3] p-20 font-outfit gap-3">
            <div className="bg-white lg:w-[55vw] w-[100%] md:p-10 p-3 lg:mt-0 mt-10">
               <p className="font-bold text-3xl text-primary">
                  Your <span className="text-orange-600"> Information</span>
               </p>
               <p className="text-[#6C6B6B] text-start pt-3">
                  Message for any inquiry and suggestion......
               </p>
               <form action="">
                  <div className="flex gap-[15px]">
                     <div className="w-[290px] mt-5">
                        <div className="mt-[8px] relative">
                           <input
                              type="text"
                              placeholder="First Name"
                              name="Surname"
                              className={`block w-full p-4  text-black placeholder-[#808080] placeholder:font-normal transition-all duration-200 border border-greyneutral rounded-[10px] bg-white focus:outline-none focus:border-orange-600 focus:bg-white caret-blue-600`}
                           />
                        </div>
                     </div>
                     <div className="w-[290px] mt-5">
                        <div className="mt-[8px] relative">
                           <input
                              type="text"
                              name="Nachname"
                              placeholder="Last Name  "
                              className={`block w-full p-4  text-black placeholder-[#808080] placeholder:font-normal transition-all duration-200 border border-greyneutral rounded-[10px] bg-white focus:outline-none focus:border-orange-600 focus:bg-white caret-blue-600`}
                           />
                        </div>
                     </div>
                  </div>
                  <div className="flex gap-[20px]">
                     <div className="w-[290px] mt-5">
                        <div className="mt-[8px] relative">
                           <input
                              type="text"
                              name="Firmenadresse"
                              placeholder="Address"
                              className={`block w-full p-4  text-black placeholder-[#808080] placeholder:font-normal transition-all duration-200 border border-greyneutral rounded-[10px] bg-white focus:outline-none focus:border-orange-600 focus:bg-white caret-blue-600
                             `}
                           />
                        </div>
                     </div>
                     <div className="w-[290px] mt-5">
                        <div className="mt-[8px] relative">
                           <input
                              type="text"
                              name="Telefonnummer"
                              placeholder="Phone Number                       "
                              className={`block w-full p-4  text-black placeholder-[#808080] placeholder:font-normal transition-all duration-200 border border-greyneutral rounded-[10px] bg-white focus:outline-none focus:border-orange-600 focus:bg-white caret-blue-600
                             `}
                           />
                        </div>
                     </div>
                  </div>
                  <div className="xl:w-[600px] w-[100%] mt-5">
                     <div className="mt-[8px] relative">
                        <input
                           type="email"
                           name="E-Mail-Adresse"
                           placeholder="E-Mail Address"
                           className={`block w-full p-4  text-black placeholder-[#808080] placeholder:font-normal transition-all duration-200 border border-greyneutral rounded-[10px] bg-white focus:outline-none focus:border-orange-600 focus:bg-white caret-blue-600
                           `}
                        />
                     </div>
                  </div>
                  <div className="xl:w-[600px] w-[100%] mt-5">
                     <div className="mt-[8px] relative">
                        <textarea
                           type="text"
                           name="Message"
                           placeholder="Message"
                           className={`block w-full p-4  text-black placeholder-[#808080] placeholder:font-normal transition-all duration-200 border border-greyneutral rounded-[10px] bg-white focus:outline-none focus:border-orange-600 focus:bg-white caret-blue-600`}
                        />
                     </div>
                  </div>
                  <button className="  bg-orange-600 mt-10 w-[180px] h-[50px] flex items-center justify-center rounded-lg font-outfit">
                     <a className="block  text-sm leading-5 px-4 font-semibold  text-white">
                        Submit
                     </a>
                  </button>
               </form>
            </div>
            <div className="flex flex-col gap-4">
               <div className="h-[90px] md:w-[350px] w-[90vw] p-6 bg-white flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full  bg-orange-600  flex items-center justify-center">
                     <FaPhoneAlt className=" text-white" />
                  </div>
                  <div>
                     <p className="font-bold text-xl">Phone Number</p>
                     <p className="font-normal text-sm text-[#6C6B6B]">
                        9803303524
                     </p>
                  </div>
               </div>
               <div className="h-[90px] md:w-[350px] w-[90vw] p-6 bg-white flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full  bg-orange-600  flex items-center justify-center">
                     <CiMail className=" text-white  " />
                  </div>
                  <div>
                     <p className="font-bold text-xl">E-Mail Address</p>
                     <p className="font-normal text-sm text-[#6C6B6B]">
                        neptour@gmail.com
                     </p>
                  </div>
               </div>
               <div className="h-[90px] md:w-[350px] w-[90vw] p-6 bg-white flex items-center gap-4 rounded-b-2xl">
                  <div className="h-14 w-14 rounded-full bg-orange-600  flex items-center justify-center">
                     <FaLocationArrow className="text-white  " />
                  </div>
                  <div className="rounded-xl">
                     <p className="font-bold text-xl">Location</p>
                     <p className="font-normal text-sm text-[#6C6B6B]">
                        Gongabu,Kathmandu
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div className="pt-12">
            <h1 className="font-bold text-4xl text-center">
               Find <span className="text-primarycolor">Us</span> On{" "}
               <span className="text-primarycolor">Google</span> Maps
            </h1>
            <p className="text-center p-4">
               We’d love to meet you! You can find us at our office location
               below. For directions, simply use the map to navigate to our
               address. We look forward to seeing you!
            </p>
            <div className="py-8">
               <iframe
                  className="w-full px-3 py-10"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3531.4167866324383!2d85.31019177500158!3d27.73528792425949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1724133413568!5m2!1sen!2snp"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
               ></iframe>
            </div>
         </div>
      </>
   );
}
