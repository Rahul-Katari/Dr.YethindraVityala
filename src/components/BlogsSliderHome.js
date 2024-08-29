import React, { Component, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/styles/slider.css";
import BlogCardInDetails from "./BlogCardInDetails";
import BlogListCard from "./BlogListCard";
import BlogsPageCard from "./BlogsPageCard";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
// import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
// import { IconChevronRight } from "@tabler/icons-react";
// import { IconChevronLeft } from "@tabler/icons-react";


function BlogsSlider({ slides }) {
  const [oldSlide, setOldSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <IconArrowRight stroke={2} size={40} className="p-3" />
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <IconArrowLeft stroke={2} size={40} className="p-3" />
      </div>
    );
  }
  const settings = {
    // className: "center",
    // centerMode: true,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    speed: 1000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // rtl: true,
    beforeChange: (current, next) => {
      setOldSlide(current);
      setActiveSlide(next);
    },
    afterChange: (current) => setActiveSlide2(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
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
        {slides?.map((slide, index) => {
          // return <BlogListCard blogData={slide} key={slide._id} />;
          return slide?.displayimg ? <BlogListCard blogData={slide} key={slide._id} /> : <BlogsPageCard blogData={slide} key={slide._id} slider={true} />;
        })}
      </Slider>
    </div>
  );
}

export default BlogsSlider;
