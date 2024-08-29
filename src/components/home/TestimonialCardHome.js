import React from "react";
import googleReviews from "../../assets/images/home/google-reviews.png";

import Image from "next/image";


const TestimonialCardHome = ({ testimonial}) => {
  return (
    <>
      <p className="my-4 max-sm:text-xs line-clamp-[7] ">{testimonial?.text} </p>
      {/* <div className="flex justify-between items-center mb-4">
        <div>
        {testimonial?.name}
        </div>
        <div>
          <Image src={googleReviews.src} width={100} height={100} alt="google review"/>
        </div>
      </div> */}
    </>
  );
};

export default TestimonialCardHome;
