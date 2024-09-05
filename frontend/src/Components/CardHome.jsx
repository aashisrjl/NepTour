import React from "react";
import { Card_Home } from "../Constants/Constant";

export default function CardHome() {
   return (
      <>
         {Card_Home.map((card, key) => {
            return (
               <div
                  key={card.id}
                  className="shadow-lg shadow-gray-500 rounded-xl pb-3"
               >
                  <img
                     className="h-48 w-72 rounded-2xl object-cover"
                     src={card.image}
                     alt="Places"
                  />
                  <div className="flex flex-col items-center w-72">
                     <h2 className="font-bold">{card.label}</h2>
                     <p className="text-center text-sm">{card.description}</p>
                  </div>
               </div>
            );
         })}
      </>
   );
}
