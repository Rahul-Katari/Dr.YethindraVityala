"use client";
import MoreBtn from "./MoreBtn";
import { ASSET_URL } from "../../controller/config";
import { useBlogData } from "../../controller/blogDataContext";
import { useEffect, useState } from "react";
import Heading from "./Heading";
import { getDoctors } from "@/services/api";

import vijayaLaksmi from "../../assets/images/doctors/vijaya-lakshmi.png";
import vijayKumar from "../../assets/images/doctors/vijay-kumar.png";

const OurTopDoctors = ({ ent, gastrology, heading }) => {
  let doctors = [
    {
      name: "Dr. Vijaya Lakshmi",
      designation: "Ms.ENT, Sr. Consultant",
      img: vijayaLaksmi.src,
      url: "drVijayaLakshmi",
      department: "ENT",
    },
    {
      name: "Dr. Vijay Kumar M",
      designation: "MD, DM - Consultant Gastroenterologist",
      img: vijayKumar.src,
      url: "drVijayKumar",
      department: "Gastroenterologist",
    },
  ];
  doctors = ent ? doctors.slice(0,1) : gastrology ? doctors.slice(1,2) : doctors;
  return (
    <div data-aos="zoom-in">
      <div className="">
        <Heading text={heading ? heading : "Our Doctors"} center={true} />
        <div className="relative flex flex-col items-center my-10 mobile-gap-x max-w-3xl mx-auto">
          <div className="">
            <div className={`grid ${ent || gastrology ? "" : "md:grid-cols-2"} gap-10`}>
              {doctors?.map((doctor, index) => {
                return (
                  <div key={index} className="flex justify-end flex-col gap-3" data-aos="zoom-in" data-aos-delay={`${index * 100}`}>
                    <h3 className="text-center text-theme text-2xl font-medium">
                      Department of {doctor.department}
                    </h3>

                    <div className="shadow-2xl rounded-xl flex flex-col bg-white" data-aos="zoom-in">
                      <img src={doctor?.img} className="rounded-lg h-[300px]" />
                      <div className="px-3">
                        <h3 className="md:text-2xl text-xl font-semibold mt-4 text-highlight">
                          {doctor?.name}
                        </h3>
                        <p className="my-4 text-[#39657D] font-medium text-lg">
                          {doctor?.designation}
                        </p>
                        <MoreBtn
                          align={"end"}
                          btn={"primary"}
                          btnText={"View Profile"}
                          href={`/${doctor.url}`}
                          round={"full"}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTopDoctors;
