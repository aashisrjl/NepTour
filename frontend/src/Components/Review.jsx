import sliderbackground from "../assets/feedback.png";
import { ReviewsOfClients } from "../Constants/Constant";
import OurSlider from "./OurSlider";

export default function Review() {
   return (
      <>
         <div className="w-full h-auto">
         <OurSlider>
            {ReviewsOfClients.map((review, key) => {
               return (
                  <div key={review.id} className="relative w-[80%] mb-32">
                     <img
                        className="h-40 w-full "
                        src={sliderbackground}
                        alt="photo"
                     />
                     <div className="absolute top-6 ">
                        <p className="text-center text-white w-full px-5">
                           {review.description}
                        </p>
                        <div className="flex flex-col mt-6 items-center">
                           <img
                              className="h-20 w-20 object-cover border-2 rounded-md border-white "
                              src={review.image}
                              alt="photo"
                           />
                           <h3 className="font-semibold ">{review.name}</h3>
                           <p className="text-sm">{review.address}</p>
                        </div>
                     </div>
                  </div>
               );
            })}
            </OurSlider>
            </div>
      </>
   );
}
