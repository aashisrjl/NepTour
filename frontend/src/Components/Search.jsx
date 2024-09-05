import React from "react";
import { FaSearch } from "react-icons/fa";


export default function Search() {
   return (
      <>
         <input
            type="text"
            placeholder="Find Your Next Adventure....."
            className="z-10 p-3 mt-4 px-10 outline-none w-[550px] rounded-full bg-transparent bg-white bg-opacity-30 text-white  border-none   placeholder:text-white placeholder:font-bold"
         />
         <FaSearch className=" text-2xl absolute top-7 right-5 text-primarycolor" />
      </>
   );
}
