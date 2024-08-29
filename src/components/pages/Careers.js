"use client";
import AppointmentSchedule from "../AppointmentSchedule";
import banner from "../../assets/images/banners/careers.png";
import MoreBtn from "../common/MoreBtn";
import CareerCard from "../CareerCard";
import { useEffect, useState } from "react";
import { API_URL } from "../../controller/config";
import BreadCrumb from "../common/BreadCrumb";
import Heading from "../common/Heading";
import ChevronButton from "../home/ChevronButton";
import { getCareers } from "@/services/api";

const Careers = () => {
  const [careers, setCareers] = useState([]);
  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const response = await getCareers("");
        if (response && response.data) {
          setCareers(response.data);
        }
      } catch (error) {
        console.error('Error fetching careers:', error);
      }
    };

    fetchCareers();
  }, []);
  const breadCrumb = [{ href: "/careers", title: "Careers" }];
  return (
    <div>
      <div>
        <img
          src={banner.src}
          alt="banner"
          className="w-full banner-border-bottom"
        />
      </div>
      <div className="max-w-7xl container">
        <BreadCrumb linkData={breadCrumb} />
      </div>
      <section>
        <div className="max-w-7xl m-auto mobile-gap-x">
          <Heading text={"Careers"} center={true} />
          <div className="md:grid grid-cols-2 gap-20">
            {careers?.map((career) => {
              return <CareerCard career={career} key={career._id} />;
            })}
          </div>
          <div className="justify-end hidden">
            <MoreBtn btn="theme" btnText={"View More"} href={"/"} />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Careers;
