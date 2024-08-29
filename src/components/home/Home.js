"use client";
import aboutBg from "../../assets/images/home/backgrounds/about.png";
import testimonialsBg from "../../assets/images/home/backgrounds/testimonials.png";
import ourDoctorsBg from "../../assets/images/home/backgrounds/ourDoctors.png";
import about from "../../assets/images/home/about.png";

import TestimonialSlide from "../TestimonialSlide";
import BlogsSlider from "../BlogsSliderHome";
import NewAppointments from "../banners/NewAppointments";
import Heading from "../common/Heading";
import { useBlogData } from "../../controller/blogDataContext";
import { useServicesData } from "../../controller/servicesDataContext";
import BannerOne from "./BannerOne";
import HomeBannerSlider from "./HomeBannerSlider";
import Image from "next/image";
import KnowAboutSlider from "./KnowAboutSlider";
import AutoRotatingTabs from "./AutoRotatingTabs";
import HealthTalks from "../common/HealthTalks";
import RequestCallBackForm from "../common/RequestCallBackForm";
import BlogsSection from "../common/BlogsSection";
import IconText from "../IconText";
import { IconAward, IconAwardFilled, IconCertificate, IconFileCertificate, IconFlagCheck, IconTarget } from "@tabler/icons-react";

export const testimonials = [
  {
    "_id": "1",
    "name": "Ramya Lakshmi",
    "text": "I would recommend Dr.Vijayalakshmi for any medical issues related to ENT. Excellent in her profession, friendly approach with smiling face. She studies the patient and disease meticulously and prefers surgery when it is required only. My elder son of 7 years old been operated by her for Adenotonsillectomy and he is doing fine. The kind of care that she showed while diagnosing the issue especially when it comes to kids world was awesome and the follow up care she took post the surgery was extraordinary, hardly find such non commercial Dr. In this era. Thank you so much for the care and support that you took on my kid. All the best!!!",
    "image": "",
    "rating": "5",
    "doctorid": "",
    "createdAt": "2024-05-14T19:07:18.116Z",
    "updatedAt": "2024-05-14T19:07:18.116Z",
    "__v": 0
  },
  {
    "_id": "2",
    "name": "Sandeep Padhi",
    "text": "We had our 7 year old daughter treated there for Adenoids and Tonsils. Vijay Lakshmi ma’am suggested surgery after a few tests she recommended like endoscopy (she does it herself) and CT scan.Initially we had a few apprehensions but she gave us confidence that nothing to worry about surgery (like many, we were also scared with the word surgery itself), so we took sometime to think. A week later after all the medication over, we finally took the decision to go for surgery since medicines didn’t help much (after all it’s for the betterment of our children).\nMa’am explained with all the advancements in technology, surgeries are now less invasive and done with Laser. So that gave us a bit more confidence. Finally surgery was done at a doctor recommended hospital and it’s been now 10 days and she is recovering fast.\nWe highly recommend Dr Vijay Lakshmi ma’am and appreciate her for her personal care and assistance during this whole process.",
    "image": "",
    "rating": "5",
    "doctorid": "",
    "createdAt": "2024-05-14T19:07:18.122Z",
    "updatedAt": "2024-05-14T19:07:18.122Z",
    "__v": 0
  },
  {
    "_id": "3",
    "name": "Tarun R",
    "text": "I'm grateful that I consulted Dr. Vijaya Lakshmi for Nose Polyp issue I've been suffering from. Her professionalism and attention to detail were evident throughout my surgery process. I feel much better after the surgery. Thank you doctor !",
    "image": "",
    "rating": "5",
    "doctorid": "",
    "createdAt": "2024-05-14T19:07:18.124Z",
    "updatedAt": "2024-05-14T19:07:18.124Z",
    "__v": 0
  },
  {
    "_id": "4",
    "name": "SriKrishna Myneni",
    "text": "Very Quick & Clear in Identifying the issue. Doctor is very good in explaining the queries raised. Finally i am relieved from my Ear Problem which is bothering me from last 15 days. Thank You Doctor Vijaya Lakshmi garu",
    "image": "",
    "rating": "5",
    "doctorid": "",
    "createdAt": "2024-05-14T19:07:18.130Z",
    "updatedAt": "2024-05-14T19:07:18.130Z",
    "__v": 0
  },
  {
    "_id": "5",
    "name": "sravan kumar",
    "text": "My wife recently had septoplasty surgery with the Wonderful experienced Dr. Vijaya lakshmi was a wonderful surgeon, and the staff was always helpful and kind. They ensured we had a smooth prep, surgery, and follow-up. I am so glad we choose highly qualified Surgeon and would recommend to anyone.",
    "image": "",
    "rating": "5",
    "doctorid": "",
    "createdAt": "2024-05-14T19:07:18.132Z",
    "updatedAt": "2024-05-14T19:07:18.132Z",
    "__v": 0
  },
  {
    "_id": "6",
    "name": "Santhosh Swanth ",
    "text": "Dr vijaya lakshmi is very good doctors who explains with lot of patience. Clinic is in Prime location above SBI Narsingi",
    "image": "",
    "rating": "5",
    "doctorid": "",
    "createdAt": "2024-06-24T15:20:57.502Z",
    "updatedAt": "2024-06-24T15:20:57.502Z",
    "__v": 0
  },
  {
    "_id": "7",
    "name": "Ravi Teja",
    "text": "Doctor was gentle in behaviour., impressed by the way she treated. Approach was friendly with good patience. Thank you.",
    "image": "",
    "rating": "5",
    "doctorid": "",
    "createdAt": "2024-06-24T15:20:57.507Z",
    "updatedAt": "2024-06-24T15:20:57.507Z",
    "__v": 0
  },
  {
    "_id": "8",
    "name": "Srikrishna Myneni",
    "text": "Very Quick & Clear in Identifying the issue. Doctor is very good in explaining the queries raised. Finally i am relieved from my Ear Problem which is bothering me from last 15 days. Thank You Doctor Vijaya Lakshmi garu.",
    "image": "",
    "rating": "5",
    "doctorid": "",
    "createdAt": "2024-06-24T15:20:57.509Z",
    "updatedAt": "2024-06-24T15:20:57.509Z",
    "__v": 0
  }
]
const bottomBanner = [
  { icon: IconTarget, mainText: "12", text1: "World Records" },
  { icon: IconAward, mainText: "6+", text1: "Awards" },
  { icon: IconCertificate, mainText: "23", text1: "Research Articles" },
  { icon: IconFlagCheck, mainText: "4", text1: "Memberships" },
];

const Homepage = () => {
  return (
    <>
      <div>
        {/* doctor  */}
        <div className="home-main-banner max-w-7xl mx-auto mobile-gap-x md:mt-28 mt-4">
          {/* {window.innerWidth < 1024 ? <BannerOne /> :  */}
          <HomeBannerSlider />
          {/* // } */}
        </div>

        <section>
          <div className="bg-banner rounded font-medium max-w-6xl grid md:grid-cols-4 grid-cols-2 items-center gap-y-12 container p-12 relative">
            {bottomBanner.map((banner, index) => {
              return (
                <IconText
                  key={index}
                  iconText={banner.mainText}
                  text1={banner.text1}
                  weight={"normal"}
                  Icon={banner.icon}
                />
              );
            })}
          </div>
        </section>
        {/* about section starts  */}
        <section>
          <div
            // style={{ backgroundImage: `url(${aboutBg.src})` }}
            className="bg-no-repeat bg-cover bg-[#dbecf7] mt-[-80px] pt-32"
          >
            <div className="max-w-7xl grid lg:grid-cols-11 gap-10 mobile-gap-x container pt-5 items-center">
              <div className="col-span-6 space-y-4">
                <Heading text={"About"} />
                <h1 className="md:text-3xl text-xl uppercase font-medium my-3" data-aos="fade-up">
                  Dr. Vityala Yethindra
                </h1>
                <p className="leading-6" data-aos="fade-up">
                  Dr. Vityala Yethindra is an ingenious doctor, a trailblazing researcher, prolific medical author, and an eloquent speaker. He was born on January 10, 1997, in Warangal, Telangana.
                </p>
                <p className="leading-6" data-aos="fade-left">
                  He is a 12-time world record holder, World’s Youngest Scientist in Medicine, and the recipient of national and international awards. He has completed 51 courses offered by esteemed universities and has authored two books and 23 publications in reputed journals.

                </p>
              </div>
              <div className="col-span-5 flex justify-end" >
                <div>
                  <img src={about.src} />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about section ends */}

        {/* tabs  */}
        {/* <section>
          <div className="bg-theme pb-28 pt-4">
            <Heading text={"Our Services"} center={true} color={"white"} />
            <p className="max-w-2xl mx-auto text-white mobile-gap-x">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys{" "}
            </p>
          </div>
          <div className="max-w-7xl container mt-[-140px] mobile-gap-x" data-aos="fade-up">
            <AutoRotatingTabs />
          </div>
        </section> */}

        {/* new patients appointments banner start */}
        <section className="mt-0">
          <div>
            {/* <NewAppointments /> */}
          </div>
        </section>
        {/* new patients appointments banner end */}

        {/* Our doctors section starts  */}
        {/* <section style={{ backgroundImage: `url(${ourDoctorsBg.src})` }} className="bg-no-repeat bg-cover">
          <div className="know-about">
            <KnowAboutSlider />
          </div>
        </section> */}
        {/* Our doctors section ends */}

        {/* Health talks section starts */}
        <HealthTalks />
        {/* testimonials section  */}
        <div id="homeTestimonials" className="mt-10 ">
          <div
            className="testimonial max-w-7xl container pt-10 pb-20 mobile-gap-x bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${testimonialsBg.src})` }}
          >
            <Heading text={"Latest News"} center={true} />
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
        {/* blogs section  */}
        <BlogsSection />
        {/* blogs section  */}
      </div>
    </>
  );
};
export default Homepage;
