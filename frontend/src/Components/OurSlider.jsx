import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function OurSlider({ children }) {
   var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
   };
   return (
      <>
         <Slider {...settings}>{children}</Slider>
      </>
   );
}

export default OurSlider;
