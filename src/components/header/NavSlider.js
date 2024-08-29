import React, { Component } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}

function NavSlider() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider-container" id="NavSlider">
      <Slider {...settings}>
        <div className="py-2 text-center bg-theme-gradient2 text-sm endocrinologist transform fade-left">
          Best Orthopedic Surgeon In Hyderabad
        </div>
        <div className="py-2 text-center bg-gradient-to-r from-[#07879A] to-[#97c7ce] text-sm generalSurgeon transform hidden fade-left">
          Top Robotic Knee and Hip Surgeon
        </div>
      </Slider>
    </div>
  );
}

export default NavSlider;
