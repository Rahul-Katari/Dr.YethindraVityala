import React from "react";
import quote from "../assets/images/landing/quote.png";

function PatientTestimonialsCard({ testimonial }) {
  return (
    <div className="text-white">
      <img src={quote} />
      <p className=" leading-snug my-4 line-clamp-[6]">{testimonial.text}</p>
      <p className="text-sm">{testimonial.name}</p>
      {/* <p className="text-xs italic">on finding her happy place</p> */}
    </div>
  );
}

export default PatientTestimonialsCard;
