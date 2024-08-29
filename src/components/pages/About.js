"use client";
import { useEffect } from "react";
import banner from "../../assets/images/banners/about-us.png";
import vision from "../../assets/images/about/vision.png";
import mission from "../../assets/images/about/mission.png";
import rightTechnique from "../../assets/images/about/right-technique.png";
import HowWeAre from "../../assets/images/about/how-we-are.png";
import vijayKumar from "../../assets/images/about/vijayKumar.png";
import vijayaLakshmi from "../../assets/images/home/doctor.png";

import Heading from "../common/Heading";
import "react-tabs-scrollable/dist/rts.css";
import {
  IconClockFilled,
  IconLocationFilled,
  IconMailFilled,
  IconPhoneFilled,
} from "@tabler/icons-react";
import Link from "next/link";

const About = () => {
  return (
    <>
      <section>
        <img src={banner.src} className="w-full banner-border-bottom" data-aos="zoom-in" />
      </section>
      <div className="flex flex-col max-md:flex-col-reverse">
        <section>
          <div className="flex flex-col md:flex-row justify-around bg-theme max-w-7xl mx-auto text-white space-y-6 md:space-y-0 mobile-space-x">
            {/* New Patients Section */}
            <div className="flex-1 p-4 border-r-4 border-gray-600">
              <h3 className="text-xl font-semibold" data-aos="zoom-in">
                <span className="text-highlight">|</span> New Patients
              </h3>
              <p className="mt-2 text-sm" data-aos="zoom-in">Accept New Patients Here....</p>
              <div className="mt-4" data-aos="zoom-in">
                <Link className="mt-4 bg-highlight text-white py-2 px-4 rounded-full" href={"#footerContact"}>
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Check Up Timings Section */}
            <div className="flex-1 p-4 border-r-4 border-gray-600">
              <h3 className="text-xl font-semibold" data-aos="zoom-in">
                <span className="text-highlight">|</span> Check Up Timings
              </h3>
              <div className="mt-2 text-sm" data-aos="zoom-in">
                <p className="flex items-center text-sm font-light" data-aos="zoom-in">
                  <IconClockFilled className="mr-2" /> Monday-Friday (10:30 AM To 09:00 PM)
                </p>
                <p className="flex items-center text-sm font-light mt-1" data-aos="zoom-in">
                  <IconClockFilled className="mr-2" /> Sunday (Holiday)
                </p>
              </div>
            </div>
            {/* Contact Info Section */}
            <div className="flex-1 p-4">
              <h3 className="text-xl font-semibold" data-aos="zoom-in">
                <span className="text-highlight">|</span> Contact Info
              </h3>
              <div className="mt-2 text-sm" data-aos="zoom-in">
                <p className="flex items-center text-sm font-light" data-aos="zoom-in">
                  <IconLocationFilled className="mr-2" />
                  3rd Floor, PSR Enclave, Above SBI Bank, DVR Diagnostics,
                  <br />
                  Opp: Max Showroom, Narsingi Main Road, Hyderabad
                </p>
                <a href="mailto:sriswasthagastroclinic@gmail.com" className="flex items-center text-sm font-light mt-2 hover:text-highlight hover:font-medium" data-aos="zoom-in">
                  <IconMailFilled className="mr-2" /> sriswasthagastroclinic@gmail.com
                </a>
                <a href="tel:081065 25621" className="flex items-center text-sm font-light mt-1 hover:text-highlight hover:font-medium" data-aos="zoom-in">
                  <IconPhoneFilled className="mr-2" /> <span>081065 25621</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* How we are starts  */}
        <section>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10 mobile-gap-x max-lg:mt-5">
            <div className="space-y-6 leading-8">
              <Heading text={"How We Are"} />
              <p className="leading-7" data-aos="zoom-in">
                At Dr. Yethindra Vityala ENT AND GASTRO LIVER CLINICS, we are dedicated to providing premier healthcare services in Narsingi, Hyderabad. Our clinic specializes in treating ear, nose, and throat (ENT) disorders and gastroenterology. Under the expert care of Dr. Vijaya Lakshmi, one of the best ENT doctors in Hyderabad and a gold medalist, and Dr. Vijay Kumar, Hyderabad&apos;s top gastroenterologist with extensive experience in gastro treatments, we offer a serene environment where patients receive personalized medical attention. Our comprehensive services include diagnostic, therapeutic, and surgical procedures tailored to individual needs. Equipped with state-of-the-art technology, we ensure precise diagnosis and effective treatment outcomes. At Dr. Yethindra Vityala ENT AND GASTRO LIVER CLINICS, patient care is our top priority.
              </p>
            </div>
            <div data-aos="zoom-in">
              <img src={HowWeAre.src} className="py-10" />
            </div>
          </div>
        </section>
        {/* How we are ends  */}
      </div>
      {/* our vision starts  */}
      <section className="bg-[#F2FDFF]">
        <div className=" lg:flex gap-20 p-6 max-w-5xl text-center mx-auto">
          <div className="w-1/2">
            <div data-aos="zoom-in">
              <img
                src={vision.src}
                className="w-10 h-10 object-contain mx-auto"
              />
            </div>
            <h3 className="text-theme text-2xl font-medium" data-aos="zoom-in">
              Our Vision
            </h3>
            <p className="py-3 " data-aos="zoom-in">
              We aim to create a healing environment where patients feel valued and understood, offering personalized, high-quality care tailored to each individual&apos;s needs. Through continuous innovation and education, we are dedicated to advancing medical practices and maintaining our position at the forefront of our specialties.
            </p>
            <p className="py-3" data-aos="zoom-in">
              Our commitment to excellence drives us to set new standards in healthcare and patient satisfaction. We envision a future where our clinic is synonymous with trust, integrity, and exceptional care. At Dr. Yethindra Vityala ENT AND GASTRO LIVER CLINICS, we are devoted to improving the health and well-being of our patients and the community we serve.

            </p>
          </div>
          <div className="w-1/2">
            <div data-aos="zoom-in">
              <img
                src={mission.src}
                className="w-10 h-10 object-contain mx-auto"
              />
            </div>
            <h3 className="text-theme text-2xl font-medium" data-aos="zoom-in">
              Our Mission
            </h3>
            <p className="py-3" data-aos="zoom-in">
              At Dr. Yethindra Vityala ENT AND GASTRO LIVER CLINICS, our mission is to provide exceptional care for ENT disorders and gastroenterology, focusing on liver health. We are dedicated to offering patient-centered care, utilizing advanced medical technologies, and promoting health education. Our team is committed to delivering high-quality, comprehensive healthcare services, fostering innovation, and engaging with the community to improve overall health and well-being. Through our expertise and compassionate approach, we strive to enhance the quality of life for our patients and ensure they receive the best possible medical care.
            </p>
          </div>
        </div>
      </section>
      {/* our doctors section start  */}
      <section className="my-10">
        <Heading text={"Our Doctors"} center={true} />
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 items-baseline gap-20">
          <div className="col-span-1 flex flex-col items-center" data-aos="zoom-in">
            <img src={vijayaLakshmi.src} />
            <div>
              <h2 className="text-highlight text-2xl font-semibold" data-aos="zoom-in">
                Dr. Vijaya Lakshmi
              </h2>
              <p className="text-[#39657D]" data-aos="zoom-in">	MS.ENT (Gold Medallist )</p>
              <p className="text-[#39657D]" data-aos="zoom-in">Sr. Consultant ENT</p>

            </div>
          </div>
          <div className="col-span-1 flex flex-col items-center" data-aos="zoom-in">
            <img src={vijayKumar.src} />
            <div>
              <h2 className="text-highlight text-2xl font-semibold" data-aos="zoom-in">
                Dr. Vijay Kumar M
              </h2>
              <p className="text-[#39657D]" data-aos="zoom-in">
                MD, DM
              </p>
              <p className="text-[#39657D]" data-aos="zoom-in">
                Sr. Consultant Gastroenterologist
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* right technique starts  */}
      <div className="grid md:grid-cols-2 py-12 max-w-5xl mx-auto p-4 md:gap-12 items-center relative">
        <div className="md:flex items-center justify-center " data-aos="zoom-in">
          <img src={rightTechnique.src} className="" />
          <div className="text-2xl font-semibold md:absolute top-[14%] whitespace-nowrap left-[72%] max-sm:mt-4" data-aos="zoom-in">
            <h1>Train with the Right Technique</h1>
            <h1 className="text-red-500" data-aos="zoom-in">
              For Best
            </h1>
          </div>
        </div>
        <div className="" data-aos="zoom-in">
          <p className="md:my-5" data-aos="zoom-in">
            Train with the right technique for the best results at the best clinic in Narsingi, Hyderabad and achieve your fitness goals.
          </p>
        </div>
      </div>
      {/* right technique ends  */}
    </>
  );
};

export default About;
