import React from "react";
import TopSection from "../Components/TopSection";
import CardHome from "../Components/CardHome";
import Review from "../Components/Review";

export default function Home() {
   return (
      <>
         <TopSection />
         <div className="w-full">
            <div className="flex justify-center items-center mt-10">
               <div className="w-32 h-1 bg-primarycolor "></div>
               <div className="font-bold text-3xl p-3 ">
                  About <span className="text-primarycolor">Us</span>
               </div>
               <div className=" w-32 h-1 bg-primarycolor "></div>
            </div>
            <p className="text-center px-28 py-6">
               Welcome to our travel company, your trusted guide to discovering
               the wonders of Nepal. We specialize in helping tourists uncover
               the hidden gems and must-see destinations across this
               breathtaking country. From the towering peaks of the Himalayas to
               the serene temples of Kathmandu, we ensure that your journey
               through Nepal is filled with unforgettable experiences. Let us
               guide you to the best spots, rich in culture, history, and
               natural beauty, making your visit truly remarkable.
            </p>
            <div className="flex justify-center gap-10 mt-9">
               <CardHome />
            </div>
            <div className="flex flex-col items-center  justify-center mt-10 gap-6 p-8">
               <div>
                  <h1 className="font-semibold text-4xl ">
                     <span className="text-primarycolor">What</span> Our Client
                     Says
                  </h1>
               </div>
               <Review />
            </div>
         </div>
      </>
   );
}
