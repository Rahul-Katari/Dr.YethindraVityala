import React, { Component } from "react";
import Slider from "react-slick";

// import testCard from "../assets/images/home/testimonial-card.png";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import TestimonialCardHome from "./home/TestimonialCardHome";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    >
      <IconChevronRight stroke={2} size={48} className="p-3" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    >
      <IconChevronLeft stroke={2} size={48} className="p-3" />
    </div>
  );
}

function TestimonialSlide({ testimonials }) {
  const settings = {
    autoplay: true,
    dots:true,
    autoplaySpeed: 3000,
    className: "center",
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 4,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {testimonials?.map((review) => {
          return <TestimonialCardHome testimonial={review} key={review._id}/>;
        })}
      </Slider>
    </div>
  );
}

export default TestimonialSlide;
