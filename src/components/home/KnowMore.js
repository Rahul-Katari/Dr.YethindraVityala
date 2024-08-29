import { IconPlus } from "@tabler/icons-react";
import { ASSET_URL } from "../../controller/config";
import FormatHtml from "../FormatHtml";
import Heading from "../common/Heading";
import MoreBtn from "../common/MoreBtn";
import Link from "next/link";

import ourDoctor from "../../assets/images/home/ourDoctors.png";
import vijayKumar from "../../assets/images/home/vijayKumar.png";
import { useEffect, useState } from "react";
import { getMenu } from "@/services/api";
import NewAppointments from "../banners/NewAppointments";

const KnowMore = ({ doctor }) => {
  const [services, setServices] = useState();
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
    fetchServices(doctor?.id === 1 ? "ENT" : "gastrology");
  }, []);
  // const services = doctor?.service;
  return (
    <div className="overflow-hidden">
      <NewAppointments doctor={doctor?.id} />

      <div className="py-5 max-w-7xl mx-auto">
        <Heading text={"Our Doctors"} center={true} />
        <div className="mx-auto md:grid max-w-2xl grid-cols-1 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-7 mobile-gap-x">
          <div className="lg:col-span-3" data-aos="fade-right">
            <img
              src={doctor.id === 1 ? ourDoctor.src : vijayKumar.src}
              alt="Product screenshot"
              className="rounded-md"
            />
            <div>
              <h2 className="text-2xl font-semibold">{doctor?.name}</h2>
              <p className="font-medium py-1 text-[#39657D]">
                {doctor?.designation}
              </p>
              <h3 className="text-highlight text-xl">
                Dr. Yethindra Vityala ENT & Gastro Liver Clinics
              </h3>
            </div>
          </div>
          <div className="max-sm:mt-4 lg:pr-8 lg:pt-4 lg:col-span-4">
            <div className="">
              <div>
                <div
                  className="line-clamp-4"
                  dangerouslySetInnerHTML={{
                    __html: doctor?.about,
                  }}
                />
              </div>
              {/* <div className="line-clamp-6">
                {doctor && (
                  <FormatHtml
                    htmlString={`<div className="line-clamp-6"><p className="mb-5 text-content">${doctor?.doctorabout?.replace(
                      /\n/g,
                      "</p>\n<p className='mb-5 text-content'>"
                    )}</p></div>`}
                  />
                )}
              </div> */}

              <div className="">
                <p className="text-xl font-medium underline">Specialities</p>

                <div className="text-sm">
                  <ul className={`list-disc list-disc-default max-sm:mb-0 ps-4 max-sm:line-clamp-6 md:grid ${services?.length > 10 && "grid-cols-2"}`}>
                    {services?.map((spec, index) => {
                      return <li key={index}>{spec.name}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:flex md:space-x-4 max-md:space-y-3 max-sm:mt-3">
              <Link
                className="btn-highlight rounded-full flex p-0.5 min-h-[40px] items-center"
                href={"/bookAppointment"}
              >
                <IconPlus className="bg-white rounded-full h-[38px] w-[38px] p-2 text-black" />
                <span className="text-white px-3">Book An Appointment</span>
              </Link>
              <Link
                className="bg-[#39657D] hover:bg-[rgb(16, 83, 121)] rounded-full flex p-0.5 min-h-[40px] items-center"
                href={doctor?.id === 1 ? "/drVijayaLakshmi" : "/drVijayKumar"}
              >
                <IconPlus className="bg-white rounded-full h-[38px] w-[38px] p-2" />
                <span className="text-white px-3">View More</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default KnowMore;
