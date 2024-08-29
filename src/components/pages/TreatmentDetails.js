"use client";
import { useServicesData } from "@/controller/servicesDataContext";
import Heading from "../common/Heading";
import DoctorServices from "../DoctorServices";
import OurTopDoctors from "../common/OurTopDoctors";
import RequestCallBack from "../common/RequestCallBack";

import banner from "../../assets/images/banners/sogging.png"
import sogging from "../../assets/images/sagging-ear.png"

const TreatmentDetails = () => {
  const services = useServicesData()?.slice(0, 7);
  return (
    <>
      <section>
        <img src={banner.src} className="banner-border-bottom w-full mb-4" />
      </section>
      <div className="max-w-7xl mobile-gap-x mx-auto space-y-8">
        <Heading text={"Sagging of Ear Lobule Treatment"} center={true}/>
        <div className="grid md:grid-cols-2 gap-6">
          <img src={sogging.src} className="w-full"/>
          <div>
            <h3 className="text-xl font-medium">Best Pain Medicine Hospital in Hyderabad</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <section>
          <Heading text={"Sub-Specialities & Services"} center={true} />
          <DoctorServices services={services} />
        </section>
        <section>
          <OurTopDoctors heading={"Our Team of Expert"} />
        </section>
      </div>
      <RequestCallBack />
    </>
  );
};
export default TreatmentDetails;
