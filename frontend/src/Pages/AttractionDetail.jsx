import React from "react";
import manang from "../assets/Manang/m1.webp";
import Navbar from "../Components/Navbar";

function AttractionDetail() {
   return (
      <>
         <div className="absolute top-0 left-0 w-full z-10 ">
            <Navbar />
         </div>
         <img
            src={manang}
            alt="photo"
            className="w-screen object-cover h-2/3"
         />
         <div className="px-11 py-4">
            <h1 className="font-semibold text-3xl  md:px-10 pb-1">Manang</h1>
            <p className="text-center">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
               sit ex ipsa, fugit pariatur amet nulla quidem quam vero assumenda
               nemo, blanditiis deserunt aspernatur esse necessitatibus
               veritatis ullam! Officia laboriosam ea magni assumenda placeat
               adipisci minima exercitationem ducimus corrupti accusantium rem
               at reprehenderit ipsa alias accusamus ipsum quis commodi
               necessitatibus soluta dolorum corporis, quisquam quibusdam saepe
               eaque? Rerum libero minus esse quas. Repellendus quaerat
               asperiores quibusdam, enim, consequuntur veritatis doloribus
               delectus non nulla iure iste. Soluta tempore perspiciatis
               officiis dolor. Necessitatibus unde exercitationem ratione
               debitis autem dolor odio quibusdam in quo cumque perspiciatis,
               veritatis, nesciunt veniam esse? Magnam, exercitationem pariatur?
            </p>
         </div>
         <div className="">
            <iframe
               className="w-full px-3 py-10"
               src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3531.4167866324383!2d85.31019177500158!3d27.73528792425949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1724133413568!5m2!1sen!2snp"
               height="450"
               allowfullscreen=""
               loading="lazy"
               referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
         </div>
      </>
   );
}

export default AttractionDetail;
