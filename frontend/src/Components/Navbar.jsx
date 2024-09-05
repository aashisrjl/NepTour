import React, { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { NAV_LINKS } from "../Constants/Constant";
import LoginSignup from "../Pages/LoginSignup";
export default function Navbar() {
   const [showModal, setShowModal] = useState(false);

   const handleShowModal = () => {
      setShowModal(true);
   };
   const handleCloseModal = () => {
      setShowModal(false);
   };
   return (
      <>
         <nav className="">
            <ul className="flex justify-start cursor-pointer items-center px-24 gap-5 h-16 text-white font-semibold">
               <NavLink to="/">
                  <img className="h-14 w-24 " src={logo} alt="Logo" />
               </NavLink>
               {NAV_LINKS.map((nav, key) => {
                  return (
                     <li className="" key={nav.id}>
                        <NavLink
                           to={nav.path}
                           className={({ isActive }) =>
                              `${isActive ? "text-primarycolor" : "text-white"}`
                           }
                        >
                           {nav.label}
                        </NavLink>
                     </li>
                  );
               })}
               <li onClick={() => setShowModal(true)}>Login/Register</li>
            </ul>
         </nav>
         <LoginSignup showModal={showModal} onClose={handleCloseModal} />
      </>
   );
}
