import React from "react";
import Slider from "react-slick";
import BlogCardInDetails from "./BlogCardInDetails";
import PatientTestimonialsCard from "./PatientTestimonialsCard";
import NewsYoutubeCard from "./NewsYoutubeCard";
import { ASSET_URL } from "../controller/config";

function BlogsSliderDetail({ card, blogsData, testimonials }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 3000,
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
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings} className="carousel">
        {card === "blog" &&
          blogsData?.map((blog, index) => {
            return (
              <div key={index}>
                <BlogCardInDetails
                  imgSrc={ASSET_URL + blog.displayimg}
                  title={blog.displayname}
                  blogid={blog._id}
                />
              </div>
            );
          })}
        {card === "testimonial" &&
          testimonials?.map((test, index) => {
            return <PatientTestimonialsCard testimonial={test} key={index} />;
          })}
        {card === "videos" &&
          blogsData?.map((video, index) => {
            return (
              <div key={index}>
                <NewsYoutubeCard
                  imgSrc={video.videosrc}
                  date={video.createdAt}
                  title={video.displayname}
                />
              </div>
            );
          })}
        {/* {(card === "testimonial") ? <div>
          <div>
              <PatientTestimonialsCard />
              </div>
              <div>
              <PatientTestimonialsCard />
              </div>
              <div>
              <PatientTestimonialsCard />
              </div>
              <div>
              <PatientTestimonialsCard />
              </div>
              <div>
              <PatientTestimonialsCard />
              </div>
            </div> : ''} */}
      </Slider>
    </div>
  );
}

export default BlogsSliderDetail;
