"use client";
import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandYoutube,
  IconLocationFilled,
  IconMailFilled,
  IconMap,
  IconMapPinFilled,
  IconPhoneFilled,
} from "@tabler/icons-react";
import FooterCard from "./FooterCard";
import SocialIcons from "../header/SocialIcons";
import PageLinks from "../header/PageLinks";
import footerLogo from "../../assets/images/footer/footer-logo.png";
import doctor from "../../assets/images/footer/doctor.png";
import doctorFemale from "../../assets/images/footer/doctor-female.png";
import location from "../../assets/images/footer/location.png";
import CallUs from "./CallUs";
import FooterBg from "../../assets/images/footer/footer-bg.png";
import logo from "../../assets/images/logoFooter.png";


// import { Link, useLocation } from "react-router-dom";
import NewAppointments from "../banners/NewAppointments";
import Topscroll from "../common/TopScroll";
import { useBlogData } from "../../controller/blogDataContext";
import { useEffect } from "react";
import { IconBrandFacebook } from "@tabler/icons-react";
import Link from "next/link";
import FooterContactForm from "./FooterContactForm";
import { usePathname } from "next/navigation";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "#" },
  { name: "Blogs", href: "#" },
  // { name: "Health Talk", href: "/healthTalk" },
];
const services = [
  {
    name: "Robotic Knee Replacement",
    href: "/ourservices#RoboticKneeReplacement",
  },
  {
    name: "Joint Replacement",
    href: "/ourservices#JointReplacement",
  },
  {
    name: "Sports Medicine",
    href: "/ourservices#SportsMedicine",
  },
  {
    name: "General Orthopedics",
    href: "/ourservices#GeneralOrthopedics",
  },
  {
    name: "Robotic Knee and Hip Surgeon in Hyderabad",
    href: "/landingRobotic",
  },
  {
    name: "Best Hip Replacement Surgeon Hyderabad",
    href: "/landingHip",
  },
  {
    name: "Best Knee Replacement Surgeon in Hyderabad",
    href: "/landingKnee",
  },
];

const cards = [
  {
    imgSrc: doctorFemale,
    title: "Dr. Vijaya Lakshmi",
    description1: "Ms.ENT",
    description2: "Sr. Consultant ENT",
    timing1: "10:30AM - 2:00 PM (Mon-sat)",
    timing2: "6:00 PM - 9:00 PM (Mon-sat)",
    href: "/vijayaLakshmi",
  },
  {
    imgSrc: doctor,
    title: "Dr. Vijay Kumar M",
    description1: "MD, DM",
    description2: "Sr. Consultant Gastroenterologist",
    timing1: "06:30PM - 08:30 PM (Mon-sat)",
    href: "/vijayKumar",
  },
];

const Footer = () => {
  const router = usePathname();
  const currentUrl = router;
  return (
    <div id="footer">
      <Topscroll />
      <div className="container max-w-screen-3xl">
        {currentUrl !== "/" &&
          !currentUrl.includes("Detail") &&
          !currentUrl.includes("bookAppointment") && !currentUrl.includes("ent") && <NewAppointments />}

        <div className="bg-highlight text-white pt-6 ">
          <div className="">
            <div className="container items-center md:grid lg:grid-cols-12 max-w-7xl md:pb-10 pb-6 xl:gap-16 lg:gap-5 space-y-6 mobile-gap-x">
              <div className="col-span-8 space-y-8">
                <div className="">
                  <img src={logo.src} alt="Dr. Yethindra Vityala Logo" className="h-16" />
                </div>
                <div className="grid xl:grid-cols-12 md:grid-cols-10 gap-10">
                  <div className="xl:col-span-6 col-span-5">
                    <p className="text-lg">
                      Dr. Vityala Yethindra is an ingenious doctor, a trailblazing researcher, prolific medical author, and an eloquent speaker. He was born on January 10, 1997, in Warangal, Telangana.
                    </p>
                    <a
                      href="mailto:dryethindravityala@gmail.com"
                      className="inline-flex gap-5 hover:text-theme hover:font-medium mt-5"

                    >
                      <IconMailFilled />
                      <h5 className="hover:underline">dryethindravityala@gmail.com</h5>
                    </a>
                    <SocialIcons/>
                  </div>
                  <div className="xl:col-span-6 col-span-5">
                    {/* <h4 className="text-xl font-medium">Contact</h4> */}
                    <h4 className="text-xl font-medium text-theme">Quick Links</h4>
                    <div className="flex gap-16 text-base">
                      <ul className="space-y-2 my-2">
                        {quickLinks.map((link, index) => {
                          return (
                            <li key={index}>
                              <Link href={link.href} className="hover:text-theme hover:font-medium hover:underline">
                                {link.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    {/* <div className="space-y-3 my-2 text-base">
                      <div className="flex gap-5" >
                        <IconLocationFilled />
                        <h5>
                          3rd Floor, PSR Enclave, Above
                          <br />
                          SBI Bank, DVR Diagnostics,
                          <br />
                          Opp: Max Showroom, Narsingi
                          <br />
                          Main Road, Hyderabad
                          <br />
                        </h5>
                      </div>
                      <a
                        href="https://maps.app.goo.gl/BpasWFSyhm7pCPqm8"
                        target="blank"
                        className="flex gap-5"

                      >
                        <IconMap />
                        <h5 className="hover:underline">View on Google Map</h5>
                      </a>
                      <a
                        href="mailto:Mail"
                        className="flex gap-5 hover:text-highlight"

                      >
                        <IconMailFilled />
                        <h5 className="hover:underline">sriswasthagastroclinic@gmail.com</h5>
                      </a>
                      <a
                        href="tel:081065 25621"
                        className="flex gap-5 hover:text-highlight"

                      >
                        <IconPhoneFilled />
                        <h5 className="hover:underline">0 8 1 0 6 5 2 5 6 2 1</h5>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-span-4 flex">
                <FooterContactForm />
              </div>
            </div>
            <div className="pt-3 pb-1 bg-highlight">
              <div className="max-w-7xl md:flex justify-center container md:text-lg text-sm mobile-gap-x">
                <h4 className="">
                  Copyright © 2024 Dr. Yethindra Vityala. All rights reserved.
                </h4>
                <Link href={"https://webbingprotechnologies.com/"} target="_blank" className="hover:text-theme hover:underline hover:font-medium">
                  <h4 className="">Developed by Webbingpro Technologies</h4>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
