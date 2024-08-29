import React from "react";
import Slider from "react-slick";

function ImageSlider({ slidesToShow, images }) {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    className: "slider variable-width",
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    prevArrow: null,
    nextArrow: null,
  };
  return (
    <div className="slider-container ">
      <Slider {...settings}>
        {images.map((img, index) => {
          return (
            <div key={index}>
              <img className=" max-sm:h-[200px] m-auto" src={img.src} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default ImageSlider;
