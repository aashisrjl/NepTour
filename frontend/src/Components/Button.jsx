import React from "react";

function Button({
   children,
   type = "button",
   bg = "bg-primarycolor",
   txt = "text-white",
   className = "",
   onClick,
   ...props
   
}) {
   return (
      <button
         className={` ${bg} ${txt}  ${className} {...props}`}
         onClick={onClick}
      >
         {children}
      </button>
   );
}

export default Button;
