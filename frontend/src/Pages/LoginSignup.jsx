import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import InputBox from "../Components/InputBox";
import { IoMail } from "react-icons/io5";
import Button from "../Components/Button";
import { FaLock, FaUser } from "react-icons/fa";

function LoginSignup({showModal,onClose}) {
  if (!showModal) return null;
   const [state, setState] = useState("Login");

   return (
      <>
         <div className="fixed inset-0 w-screen  bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
            <div className="w-1/3 flex flex-col bg-white">
               <IoMdClose onClick={onClose} className="place-self-end text-3xl font-bold m-2 hover:drop-shadow-lg hover:cursor-pointer text-primarycolor" />
               <div className="">
                  <h1 className="font-semibold text-black text-4xl text-center">
                     {state === "Login" ? (
                        <>
                           Log<span className="text-primarycolor">in</span>
                        </>
                     ) : (
                        <>
                           Sign<span className="text-primarycolor">Up</span>
                        </>
                     )}
                  </h1>

                  <div className="mt-8">
                     <InputBox
                        placeholder="Enter your username"
                        Icon={FaUser}
                     />
                     <InputBox placeholder="Enter your email" Icon={IoMail} />
                     <InputBox
                        type="password"
                        placeholder={
                           state === "Login" ? "Password" : "Set password"
                        }
                        Icon={FaLock}
                     />
                     {state === "Signup" && (
                        <>
                           <InputBox
                              type="password"
                              placeholder="Confirm password"
                              Icon={FaLock}
                           />
                        </>
                     )}
                  </div>
                  {state === "Login" && (
                     <p className="text-center text-black">
                        Forgot password?{" "}
                        <a href="#" className="text-primarycolor">
                           Click Here
                        </a>
                     </p>
                  )}
               </div>
               <div className="flex justify-evenly py-4">
                  <Button className="py-2 px-11 rounded-3xl">
                     {state === "Login" ? "Login" : "Signup"}
                  </Button>
                  <Button
                     onClick={() => {
                        if (state === "Login") {
                           setState("Signup");
                        } else {
                           setState("Login");
                        }
                     }}
                     className="py-2 px-9 rounded-3xl font-semibold "
                     bg="bg-gray-300"
                     txt="text-black"
                  >
                     {state === "Signup" ? "Login" : "Signup"}
                  </Button>
               </div>
            </div>
         </div>
      </>
   );
}

export default LoginSignup;
