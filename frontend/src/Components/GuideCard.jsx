import manang from "../assets/Manang/m1.webp";

function GuideCard() {
   return (
      <>
         <div>
            <div className="flex p-4 items-center shadow-xl bg-white gap-5 w-[45vw] h-[40vh] mb-5 mt-5 mr-5">
               <div className="w-[50%] h-full">
                  <img
                     src={manang}
                     alt="photo"
                     className="object-cover h-full w-full"
                  />
               </div>
               <div className="flex flex-col">
                  <p className="font-bold text-2xl">Anupama</p>
                  <div className="text-gray-500">Kathmandu,Nepal</div>
                  <hr />
                  <div>
                     <p className="py-3 text-sm">
                        A girl who loves to travel and make new friends
                     </p>
                     <hr />
                     <div className="flex justify-between pt-2 px-10">
                        <div className="flex flex-col items-center justify-evenly">
                           <div>Review</div>
                           <div>12</div>
                        </div>
                        <div className="flex flex-col items-center justify-between">
                           <div>Rating</div>
                           <div className="flex items-center gap-2">5 star</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default GuideCard;
