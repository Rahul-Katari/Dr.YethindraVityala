"use client";

import { IconEar } from "@tabler/icons-react";
import ent from "../../assets/images/banners/ent.png";
import gastrologyBanner from "../../assets/images/banners/gastrology.png";
import deaf from "../../assets/images/home/deaf.png";
import Heading from "../common/Heading";
import OurTopDoctors from "../common/OurTopDoctors";
import { useEffect, useState } from "react";
import { ASSET_URL, getMenu } from "@/services/api";
import Link from "next/link";
import ServiceCards from "../services/serviceCards";

const Services = ({ gastrology, category }) => {
  const entCategories = [
    "Ear Treatments",
    "Nose Treatments",
    "Throat Treatments",
    "General ENT Services",
    "Hearing and Speech Services",
  ];
  const gasCategories = [
    "Conditions",
    "Procedures",
  ];
  const [services, setServices] = useState();
  useEffect(() => {
    const fetchServices = async (type) => {
      try {
        const res = await getMenu(type);
        if (res && res.data) {
          setServices(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    gastrology ? fetchServices("gastrology") : fetchServices("ENT");
  }, []);
  useEffect(() => { }, [services]);
  const categories = gastrology ? gasCategories : entCategories;
  return (
    <>
      <div data-aos="zoom-in">
        <img
          src={gastrology ? gastrologyBanner.src : ent.src}
          className="w-full border-highlight border-b-4"
        />
      </div>
      {/* treatments section starts  */}
      <div className="max-w-7xl mx-auto">
        <ServiceCards services={services} categories={categories} category={category} />
      </div>
      {/* our doctors  */}
      <div data-aos="zoom-in">
        <OurTopDoctors ent={gastrology ? false : true} gastrology={gastrology} />
      </div>
    </>
  );
};

export default Services;
