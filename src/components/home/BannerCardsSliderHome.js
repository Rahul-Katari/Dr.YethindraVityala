import React from "react";
import Slider from "react-slick";
import BannerCard from "./BannerCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/styles/slider.css";

import card1 from "../../assets/images/home/book-doctor-appointment.png";
import card2 from "../../assets/images/home/find-your-doctors.png";
import card3 from "../../assets/images/home/health-package.png";
import card4 from "../../assets/images/home/online-consultancy.png";
import card5 from "../../assets/images/home/book-lab-test.png";
import AppointmentModalOpener from "../AppointmentModalOpener";

const bannerCardsData = [
  {
    imgSrc: card1,
    title1: "Book Doctor",
    title2: "Appointment",
  },
  {
    imgSrc: card2,
    title1: "Find Your",
    title2: "Doctors",
    href: "/bestDoctors",
  },
  {
    imgSrc: card3,
    title1: "Health",
    title2: "Package",
    href: "/healthCheckup",
  },
];

const BannerCardsSliderHome = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    initialSlide: 0,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    // <div className="slider-container">
    //   <Slider {...settings}>
    <div className="flex justify-center">
      {bannerCardsData.map((card, index) => {
        return card.href ? (
          <BannerCard
            key={index}
            imgSrc={card.imgSrc}
            title1={card.title1}
            title2={card.title2}
            href={card.href}
          />
        ) : (
          <AppointmentModalOpener
            key={index}
            Component={
              <BannerCard
                imgSrc={card.imgSrc}
                title1={card.title1}
                title2={card.title2}
                href={card.href}
              />
            }
          />
        );
      })}
    </div>
    //   </Slider>
    // </div>
  );
};

export default BannerCardsSliderHome;
