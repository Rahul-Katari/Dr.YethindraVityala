"use client";
// import { useRouter } from "next/router";
import vijayaLaksmi from "../../assets/images/banners/vijayaLakshmi.png";
import vijayKumar from "../../assets/images/banners/vijayKumar.png";
import testimonialsBg from "../../assets/images/home/backgrounds/testimonials.png";
import faq from "../../assets/images/faq.png";

import DoctorServices from "../DoctorServices";
import NewAppointments from "../banners/NewAppointments";
import Heading from "../common/Heading";
import { useEffect, useRef, useState } from "react";
import AppointmentFormDetail from "./AppointmentFormDetail";
import { useBlogData } from "../../controller/blogDataContext";
import FormatHtml from "../FormatHtml";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import HealthTalks from "../common/HealthTalks";
import TestimonialSlide from "../TestimonialSlide";
import { getDoctorInfo, getMenu } from "@/services/api";
import FaqAccordion from "../FaqAccordion";
import BlogsSection from "../common/BlogsSection";
import { testimonials } from "../home/Home";

const DoctorDetails = ({ doctor }) => {
  const tabs = [
    { name: "About Us", href: "about" },
    { name: "Qualification", href: "qualification" },
    { name: "Services", href: "services" },
    { name: "Health Talks", href: "healthTalks" },
    { name: "Testimonials", href: "detailsTestimonials" },
    { name: "Blogs", href: "blogs" },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const [isFixed, setIsFixed] = useState(null);
  const [height, setHeight] = useState(0);
  const [doctorDetails, setDoctorDetails] = useState([]);
  const [services, setServices] = useState();
  const tabsRef = useRef([]);
  const sectionsRef = useRef([]);
  const bannerRef = useRef(null);
  const scrollToSection = (index) => {
    sectionsRef.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = bannerRef.current?.offsetHeight;
      const scrollPosition = window.pageYOffset;
      const scrollOffset = isFixed ? bannerHeight + 144 : bannerHeight;

      // Calculate the scroll position for each section
      const tabPositions = tabs.map((tab) => {
        const element = document.getElementById(tab.href);
        return element ? element.offsetTop - scrollOffset : 0; // Check if element exists
      });

      // Calculate the top position of each section relative to the scroll position
      const sectionTops = sectionsRef.current.map((section) => {
        return section?.offsetTop - scrollOffset;
      });

      // Find the index of the section currently in view
      let activeTabIndex = 0;
      for (let i = sectionTops.length - 1; i >= 0; i--) {
        if (scrollPosition >= sectionTops[i]) {
          activeTabIndex = i;
          break;
        }
      }
      // Find the index of the section currently in view
      let activeSectionIndex = -1;
      for (let i = 0; i < sectionTops.length; i++) {
        if (sectionTops[i] > 0 && sectionTops[i] < window.innerHeight / 2) {
          activeSectionIndex = i;
          break;
        }
      }

      // If no section is below the current scroll position, activate the last tab
      // setActiveTab(activeSectionIndex);
      // Update the active tab
      setActiveTab(activeTabIndex);

      // Set the fixed state based on the scroll position
      setIsFixed(scrollPosition > bannerHeight + 144);
    };

    const updateBannerHeight = () => {
      setHeight(bannerRef.current?.offsetHeight || 0); // Added optional chaining
    };

    updateBannerHeight(); // Initial height calculation

    // Attach event listener for scrolling
    if (window.innerWidth > 768)
      window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Add smooth scrolling behavior
    });
  };
  useEffect(() => {
    const fetchDoctors = async (id) => {
      try {
        const res = await getDoctorInfo(id);
        setDoctorDetails(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDoctors(doctor);
  }, []);
  useEffect(() => {
    const fetchServices = async (serviceType) => {
      try {
        const res = await getMenu(serviceType);
        if (res && res.data) {
          setServices(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    doctor === "1" ? fetchServices("ENT") : fetchServices("gastrology")
  }, []);
  useEffect(() => { }, [doctorDetails, services]);
  const topHeight = `top[144px ${height}px]`;
  const doctorBlogs = useBlogData()?.allblogs.filter(
    (blog) => blog.doctorid === doctorDetails?._id
  );
  // const testimonials = useBlogData()?.reviews.filter(
  //   (review) => review.doctorid === doctorDetails?._id
  // );
  useEffect(() => {
    // scrollPosition = window.pageYOffset;
    if (window.innerWidth <= 578) {
      const generalSurgeon = document.getElementsByClassName(
        "generalSurgeon"
      )[0];
      const endocrinologist = document.getElementsByClassName(
        "endocrinologist"
      )[0];

      if (doctorDetails?.department === "1") {
        generalSurgeon?.classList.add("hidden");
        endocrinologist?.classList.remove("hidden");
      } else {
        endocrinologist?.classList.add("hidden");
        generalSurgeon?.classList.remove("hidden");
      }
    }
  }, []);

  return (
    <div>
      <div className="doctor-details relative">
        <div>
          <div ref={bannerRef} className="relative">
            <img
              // src={ASSET_URL + doctorDetails?.doctorbanner}
              src={doctor === "1" ? vijayaLaksmi.src : vijayKumar.src}
              className="w-full"
            />
            <div className="md:absolute right-[15%] top-[50%] md:transform md:-translate-y-1/2 mobile-gap-x max-sm:mt-4">
              <AppointmentFormDetail details={doctorDetails} />
            </div>
          </div>
        </div>
        <div className="max-w-7xl m-auto sticky z-[1] top-[140px] max-sm:hidden">
          <div
            // className={`max-sm:hidden transition-all duration-300 fixed ${
            //   isFixed ? "top-[144px]" : topHeight
            // } z-[1]`}
            className="sticky top-0"
          >
            <div className="sticky top-0">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  ref={(el) => (tabsRef.current[index] = el)}
                  onClick={() => {
                    setActiveTab(index);
                    scrollToSection(index);
                  }}
                  className={`rounded-l-none rounded-lg flex w-[180px] my-1 p-2 px-4 bg-slate-200 hover:btn-theme-gradient ${activeTab === index &&
                    "btn-theme-gradient text-white font-medium"
                    }`}
                >
                  {tab.name}
                </button>
              ))}
              <button
                onClick={handleScrollToTop}
                className="rounded-l-none rounded-lg flex w-[180px] my-1 p-2 px-4 bg-slate-200 hover:btn-theme-gradient"
              >
                Back to Top
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-6xl md:mx-auto max-sm:mx-4 md:mt-[-310px]">
          <div className="md:ms-36">
            {/* about us section  */}
            <div id="about" ref={(el) => (sectionsRef.current[0] = el)}>
              <section>
                <div>
                  <h1 className="text-highlight text-4xl font-semibold mt-5">
                    {doctorDetails?.name}
                  </h1>
                  <p className="text-[#39657D] text-base font-medium my-3">
                    {doctorDetails?.designation}
                  </p>
                  <Heading text={"About us"} left={true} />
                  {/* <p className="mb-5 text-content"> */}
                  <div className="doctorAbout space-y-4 mb-5">
                    {doctorDetails ? (
                      <FormatHtml
                        htmlString={`<p className="mb-5 text-content">${doctorDetails?.about?.replace(
                          /\n/g,
                          "</p>\n<p className='mb-5 text-content'>"
                        )}</p>`}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <NewAppointments />

        <div className="max-w-6xl md:mx-auto max-sm:mx-4 my-5 mb-10">
          <div className="md:ms-36">
            {/* qualification section  */}
            <div id="qualification" ref={(el) => (sectionsRef.current[1] = el)}>
              <section>
                <Heading text={"Qualification"} left={true} />
                <div
                  dangerouslySetInnerHTML={{
                    __html: doctorDetails?.qualification,
                  }}
                />
                {/* <FormatHtml
                  htmlString={`<p className="mb-5 text-content">${doctorDetails?.qualification?.replace(
                    /\n/g,
                    "</p>\n<p className='mb-5 text-content'>"
                  )}</p>`}
                /> */}
                {/* <Qualifications
                  qualifications={doctorDetails?.qualification}
                  experience={doctorDetails?.experience}
                  extrainfo={doctorDetails?.extrainfo}
                /> */}
              </section>
            </div>
            {/* services section  */}
            <div id="services" ref={(el) => (sectionsRef.current[2] = el)}>
              <section>
                <div>
                  <Heading text={"SERVICES"} left={true} />
                  <DoctorServices
                    services={services}
                    speciality={"endo"}
                    fromDetails={true}
                  />
                </div>
              </section>
            </div>
          </div>
        </div>
        <section>
          <div id="healthTalks" ref={(el) => (sectionsRef.current[3] = el)}>
            <HealthTalks />
          </div>
        </section>
        {/* testimonials section  */}
        <div
          // id="detailsTestimonials"
          id="homeTestimonials"
          className="mt-10 "
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <div
            className="testimonial max-w-7xl container pt-10 pb-20 mobile-gap-x bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${testimonialsBg.src})` }}
          >
            <Heading text={"Testimonials"} center={true} />
            <p className="text-center mb-8">
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
        {/* testimonials start  */}
        <div
          id="blogs"
          className="bg-[#F2FDFF]"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <BlogsSection />

          {/* <div
          className="md:pb-4 pt-8 blogs flex flex-col justify-center container max-w-7xl mobile-gap-x"
          id="homeBlogs"
        >
          <div>
            <Heading text={"Blogs"} center={true} />
            <p className="mb-16 text-center">Library of Learnings</p>
            <div className="md:grid xl:grid-cols-12 lg:grid-cols-8 justify-end items-center">
              <div className="xl:col-span-3">
                <Image width={350} height={400} src={blog.src} />
              </div>
              <div className="xl:col-span-9 lg:col-span-7">
                <BlogsSlider slides={doctorBlogs} />
              </div>
            </div>
          </div>
        </div> */}
        </div>
        {/* faq section starts  */}
        <div>
          <div className="max-w-7xl container mt-4 mobile-gap-x">
            <Heading text={"Frequently Asked Questions"} center={true} />
            <p className="text-center mb-4">Get Your General Answer</p>
            <div className="grid md:grid-cols-5">
              <div className="col-span-2">
                <img src={faq.src} />
              </div>
              <div className="col-span-3">
                {Array(4)
                  .fill()
                  .map((index) => (
                    <FaqAccordion
                      title={
                        "What is an online doctor consultation or online medical consultation?"
                      }
                      accordionOpen={index === 0 ? true : false}
                      key={index}
                    >
                      Online doctor consultation or online medical consultation
                      is a method to connect patients and doctors virtually. It
                      is a convenient and easy way to get online doctor advice
                      using doctor apps or telemedicine apps or platforms, and
                      the internet.
                    </FaqAccordion>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DoctorDetails;
