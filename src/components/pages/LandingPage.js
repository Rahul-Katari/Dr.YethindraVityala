"use client";

import banner from "../../assets/images/landing/banner.png";
import vijayKumar from "../../assets/images/landing/vijayKumar.png";
import training from "../../assets/images/landing/training.png";
import treatment from "../../assets/images/landing/treatment.png";
import vijaya from "../../assets/images/landing/vijaya.png";
import vijay from "../../assets/images/landing/vijay.png";
import heartbeat from "../../assets/images/landing/heartbeat.png";
import performing from "../../assets/images/landing/performing.png";
import BreadCrumb from "../common/BreadCrumb";
import Link from "next/link";
import Heading from "../common/Heading";
import TestimonialSlide from "../TestimonialSlide";
import AppointmentSchedule from "../AppointmentSchedule";
import { testimonials } from "../home/Home";


const LandingPage = ({ page }) => {
  const entCategories = [
    "Ear Treatments",
    "Nose Treatments",
    "Throat  Treatments",
    "General ENT Services",
    "Hearing and Speech Services",
  ];
  const gasCategories = ["Conditions", "Procedures"];
  const categories = page === "vijayaLakshmi" ? entCategories : gasCategories;
  const breadCrumb = [{ href: "/" + page, title: page }];
  return (
    <div>
      <div>
        <img
          src={page === "vijayaLakshmi" ? banner.src : vijayKumar.src}
          alt="banner"
          className="w-full banner-border-bottom"
        />
      </div>
      <div className="max-w-7xl container">
        <BreadCrumb linkData={breadCrumb} />
      </div>
      <div className="grid lg:grid-cols-12 max-w-7xl container mobile-gap-x gap-10">
        <div className="col-span-5">
          <img src={page === "vijayaLakshmi" ? vijaya.src : vijay.src} />
        </div>
        <div className="col-span-7">
          <Heading
            text={
              page === "vijayaLakshmi"
                ? "ENT Speciality"
                : "Gastroenterologist Specialist"
            }
          />
          <div className="space-y-2 mb-4">
            <h2 className="text-2xl text-highlight font-semibold">
              {page === "vijayaLakshmi"
                ? "Dr. Vijaya Lakshmi"
                : "Dr. Vijay Kumar"}
            </h2>
            <p className="text-[#39657D]">
              {page === "vijayaLakshmi" ? "Ms.ENT , Sr. Consultant" : "MD, DM"}
            </p>
          </div>
          <div className="space-y-5">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
      <div
        className="bg-cover mt-5"
        style={{ backgroundImage: `url(${training.src})` }}
      >
        <div className="max-w-7xl container grid lg:grid-cols-12 py-10 gap-10 mobile-gap-x">
          <div className="col-span-5 text-white space-y-10">
            <h3 className="text-2xl font-medium">
              Specialised Training Are As Below:
            </h3>
            <div className="space-y-5">
              <h5>Affiliations -</h5>
              <ul className="list-disc ps-6">
                <li>Lorem Ipsum is simply dummy text</li>
                <li>Lorem Ipsum is simply dummy text</li>
                <li>Lorem Ipsum is simply dummy text</li>
              </ul>
              <div>
                <Link href="#">Read More</Link>
              </div>
            </div>
          </div>
          <div className="col-span-7 grid md:grid-cols-2 gap-8">
            {Array(4)
              .fill()
              .map((index) => (
                <div
                  className="bg-white rounded flex py-16 space-x-10 p-5"
                  key={index}
                >
                  <img src={heartbeat.src} />
                  <p>Lorem Ipsum is simply dummy text</p>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl container mobile-gap-x my-10">
        <Heading text={"Our Services"} center={true} />
        <div className="grid lg:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-12 justify-items-center">
          {
            categories.map((cat, index) => (
              <div className="shadow rounded" key={index}>
                <img src={treatment.src} className="rounded w-full" />
                <div className="text-center p-4">
                  <h2 className="text-2xl font-semibold">{cat}</h2>
                
                  <div className="mt-5">
                    <Link href="/gastroenterology" className="underline text-highlight">
                      View All
                    </Link>
                  </div>
                </div>
              </div>
            ))
          }
          {/* {Array(5)
            .fill()
            .map((index) => (
              <div className="shadow rounded" key={index}>
                <img src={treatment.src} className="rounded w-full" />
                <div className="text-center p-4">
                  <h2 className="text-2xl font-semibold">Ear Treatments</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <div className="mt-5">
                    <Link href="#" className="underline text-highlight">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))} */}
        </div>
      </div>
      <div className="mobile-gap-x max-w-7xl my-16 container">
        <Heading text={`An ${page === "vijayaLakshmi"
          ? "ENT"
          : "Gastrology"} is Performed for the Following`} center={true} />
        <div className="max-w-3xl mx-auto space-y-5">
          {[...Array(4).keys()].map((index) => (
            <div
              className="relative shadow rounded py-3 ps-16 pe-3"
              key={index}
            >
              <div className="absolute top-[-10px] left-[-10px]">
                <div className="relative">
                  <img src={performing.src} />
                  <p className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-medium text-2xl">{index + 1}</p>
                </div>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industrys
                standard dummy text ever since the 1500s,
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* testimonials section  */}
      <div id="homeTestimonials" className="mt-10 ">
        <div
          className="testimonial max-w-7xl container pt-10 pb-20 mobile-gap-x bg-no-repeat bg-center"
        //   style={{ backgroundImage: `url(${testimonialsBg.src})` }}
        >
          <Heading text={"Testimonials"} center={true} />
          <p className="text-center mb-8 font-medium">
            Let Your Voice Be Heard!
            <br />
            “Your feedback is the key to unlocking better healthcare for you
            <br />
            and future patients, so share your experience
            <br />
          </p>
          <div className="flex flex-col justify-center relative">
            <TestimonialSlide testimonials={testimonials} />
          </div>
        </div>
      </div>
      <div>
        <AppointmentSchedule />
      </div>
    </div>
  );
};
export default LandingPage;
