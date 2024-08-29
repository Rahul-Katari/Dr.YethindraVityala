"use client";
// pages/excellence-details/[serviceId].js
import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import BreadCrumb from "../../components/common/BreadCrumb";
import Accordion from "../common/Accordion";
import { ASSET_URL } from "../../services/api";
import ExcellenceContentTabs from "./ExcellenceContentTabs";
import { useRouter } from "next/navigation";
import { getMenu, getServiceDetails } from "@/services/api";
import "../../app/globals.css";

import banner from "../../assets/images/banners/sogging.png";
import ent from "../../assets/images/banners/ent.png";
import gastrologyBanner from "../../assets/images/banners/gastrology.png";
import Heading from "../common/Heading";
import DoctorServices from "../DoctorServices";
import RequestCallBack from "../common/RequestCallBack";
import OurTopDoctors from "../common/OurTopDoctors";
import FormatHtml from "../FormatHtml";


const ExcellenceDetails = ({ type, serviceId }) => {
  const entCategories = [
    {
      title: "Ear Treatments",
      category: 1,
    },
    {
      title: "Nose Treatments",
      category: 2,
    },
    {
      title: "Throat Treatments",
      category: 3,
    },
    {
      title: "General ENT Services",
      category: 4,
    },
    {
      title: "Hearing and Speech Services",
      category: 5,
    },
  ];
  const gastrologyCategories = [
    {
      title: "Conditions",
      category: 1,
    },
    {
      title: "Procedures",
      category: 2,
    },
  ];
  const [bannerImage, setBannerImage] = useState("");
  const [breadcrumb, setBreadcrumb] = useState([]);
  const [activeAccordion, setActiveAccordion] = useState(null);

  // let sortedServiceList = [];
  const sortServices = (servicesList) => {
    if (servicesList && Array.isArray(servicesList)) {
      const sortedServices = [...servicesList]?.sort((a, b) => {
        if (a.slug_name === serviceId) return -1;
        if (b.slug_name === serviceId) return 1;
        return 0;
      });
      setSortedServiceList(sortedServices);
      return sortedServices;
    }
  };

  const toggleAccordion = (accordionName) => {
    setActiveAccordion(
      activeAccordion === accordionName ? null : accordionName
    );
  };
  const [serviceType, setServiceType] = useState(
    type === 1 ? "ENT" : "gastrology"
  );
  const categories =
    serviceType === "ENT" ? entCategories : gastrologyCategories;
  const [services, setServices] = useState([]);
  const [sortedServiceList, setSortedServiceList] = useState([]);
  const [sortedServiceCategories, setSortedServiceCategories] = useState([]);
  const [serviceDetails, setServiceDetails] = useState();
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await getServiceDetails(serviceType, serviceId); // Fetch the blog post by ID
        setServiceDetails(res.data[0]);
      } catch (error) {
        console.error("Error fetching details:", error);
      }
    };

    fetchDetails();
    const fetchServices = async () => {
      try {
        const res = await getMenu(serviceType); // Fetch the blog post by ID
        setServices(res.data);
        // setSortedServiceList(sortServices(res.data));
        sortServices(res.data);
      } catch (error) {
        console.error("Error fetching details:", error);
      }
    };

    fetchServices();
  }, []);

  useEffect(() => {
    setSortedServiceCategories(categories);
    if (serviceDetails) {
      const breadCrumb = [
        { href: "/" + serviceType, title: serviceType },
        {
          href: `/${serviceType}/${serviceId}`,
          title: serviceId,
        },
      ];
      setBannerImage(serviceDetails?.banner_image);
      setBreadcrumb(breadCrumb);
      const activeCategoryNumber = serviceDetails?.category;
      const SortedCategories = categories.sort((a, b) => {
        if (a.category === activeCategoryNumber) return -1;
        if (b.category === activeCategoryNumber) return 1;
        return a.category - b.category;
      });
      setSortedServiceCategories(SortedCategories);
      SortedCategories?.forEach((cat) => toggleAccordion(cat.title));
      if (serviceType === "ENT") {
        setActiveAccordion(
          SortedCategories.find(
            (cat) => cat.category === serviceDetails?.category
          ).title
        );
      }
    }
  }, [serviceDetails]);

  return (
    <div className="excellence-details">
      <div>
        <Image
          src={serviceType === "ENT" ? ent.src : gastrologyBanner.src}
          alt="Banner Image"
          layout="responsive"
          width={1920}
          height={600}
          className="w-full"
        />
      </div>
      <div className="max-w-7xl mx-auto">
        <BreadCrumb linkData={breadcrumb} />
        <section className="mb-0">
          <div className="grid md:grid-cols-8 max-w-7xl lg:m-auto max-lg:m-4 max-sm:flex-col gap-10">
            <div className="md:col-span-2 max-sm:order-last hidden">
              <div
                className={` flex flex-col md:sticky top-[144px] ${serviceDetails?.servicecategory === 2
                  ? "flex-col-reverse"
                  : ""
                  }`}
              >
                {serviceType === "ENT"
                  ? sortedServiceCategories.map(({ title, category }) => (
                    <Accordion
                      key={title}
                      title={title}
                      accordionOpen={activeAccordion === title}
                      onToggle={() => toggleAccordion(title)}
                    >
                      <div className="flex flex-col bg-stone-100">
                        {sortedServiceList
                          ?.filter((service) => service.category === category)
                          ?.map((service) => (
                            <a
                              key={service.slug_name}
                              className={`p-3 ${service.slug_name === serviceId
                                ? "btn-theme"
                                : ""
                                } rounded-none hover:text-white hover:bg-theme-gradient`}
                              href={`/ent/${service.slug_name}`}
                            >
                              {service?.name}
                            </a>
                          ))}
                      </div>
                    </Accordion>
                  ))
                  : gastrologyCategories.map(({ title, category }) => (
                    <Accordion
                      key={title}
                      title={title}
                      accordionOpen={true}
                      onToggle={() => toggleAccordion(title)}
                    >
                      <div className="flex flex-col bg-stone-100">
                        {sortedServiceList?.map((service) => (
                          <a
                            key={service.slug_name}
                            className={`p-3 ${service.slug_name === serviceId
                              ? "btn-theme"
                              : ""
                              } rounded-none hover:text-white hover:bg-theme-gradient`}
                            href={`/gastroenterology/${service.slug_name}`}
                          >
                            {service?.name}
                          </a>
                        ))}
                      </div>
                    </Accordion>
                  ))}
              </div>
            </div>

            <div className="md:col-span-12">
              <Heading text={serviceDetails?.name} center={true} />
              <div className="grid md:grid-cols-2">
                <div>
                  <img src={ASSET_URL + serviceDetails?.image} />
                </div>
                <div>
                  <FormatHtml htmlString={serviceDetails?.brief} />
                </div>

              </div>
              <ExcellenceContentTabs serviceDetails={serviceDetails} />
              <Heading text={"Sub-Specialities & Services"} center={true} />
              <div className="my-8">
                <DoctorServices
                  services={sortedServiceList.filter(
                    (service) => service.category === serviceDetails?.category
                  )}
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <OurTopDoctors heading={"Our Team of Expert"} ent={serviceType === "ENT"} gastrology={serviceType !== "ENT"} />
        </section>
      </div>
      <RequestCallBack />
    </div>
  );
};

export default ExcellenceDetails;
