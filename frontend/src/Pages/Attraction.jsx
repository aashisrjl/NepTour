import React from "react";
import TopSection from "../Components/TopSection";
import manang from "../assets/Manang/m1.webp";
import Button from "../Components/Button";
import { Link } from "react-router-dom";

function Attraction() {
   return (
      <>
         <TopSection />
         <div className="flex flex-wrap justify-center items-center my-12 mx-16 gap-14">
            <div className="w-[21vw] h-64  shadow-lg shadow-gray-300 rounded-sm">
               <img
                  src={manang}
                  alt="photo"
                  className="w-full object-cover h-[60%]"
               />
               <h1 className="font-semibold px-3 py-1">Manang</h1>
               <div className="px-3">Rating</div>
               <div className="flex justify-around items-center">
                  <h3 className="">Review:13</h3>
                  <Button className="px-3 py-1 rounded-md">
                     <Link to="/detail">Explore More</Link>
                  </Button>
               </div>
            </div>
         </div>
      </>
   );
}

export default Attraction;
