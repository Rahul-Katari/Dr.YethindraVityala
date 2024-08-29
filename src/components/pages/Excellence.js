'use client'
import { useEffect, useState } from "react";
import banner from "../../assets/images/banners/services.png";
import DoctorServices from "../DoctorServices";
import { useServicesData } from "../../controller/servicesDataContext";
// import { Helmet } from "react-helmet-async";
import BreadCrumb from "../common/BreadCrumb";
// import { useLocation } from "react-router-dom";

const Excellence = () => {
  const [servicesData, setServicesData] = useState(null);
  // const { data: services, loading, error } = useApiData("services?reqtype=api");
  const services = useServicesData();
  // Define section data
  const serviceCategories = [
    { title: "Robotic Knee Replacement", category: 1 },
    { title: "Joint Replacement", category: 2 },
    { title: "Trauma Surgeries", category: 3 },
    { title: "Sports Medicine", category: 4 },
    { title: "General Orthopedics", category: 5 },
    { title: "Others", category: 6 },
  ];
  const breadCrumb = [{ href: "/ourservices", title: "Services" }];
  useEffect(() => {
    if (services) {
      setServicesData(services);
    }
  }, [services]);
  const scrollToSection = (sectionId) => {
    const navbarHeight = 150; // Adjust this value to match your navbar height
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // const location = useLocation();

  // useEffect(() => {
    // const handleScroll = () => {
    //   const hash = location.hash;
    //   if (hash) {
    //     const sectionId = hash.substring(1); // Remove the '#' from the hash
    //     // Use setTimeout to delay the scroll action
    //     setTimeout(() => {
    //       scrollToSection(sectionId);
    //     }, 0);
    //   }
    // };
    // Call handleScroll after the component has mounted
    // handleScroll();
    // Optionally, you can add an event listener if you need to handle changes dynamically
    // window.addEventListener('hashchange', handleScroll);

    // Cleanup event listener on component unmount
  //   return () => {
  //     window.removeEventListener('hashchange', handleScroll);
  //   };
  // }, [location]);
  return (
    <div>
      {/* <Helmet>
        <title>Dr. Vasudeva Juvvadi</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Helmet> */}
      <div>
        <img src={banner.src} className="w-full" />
      </div>
      <div className="max-w-7xl container">
        <BreadCrumb linkData={breadCrumb} />
      </div>
      <div className="max-w-7xl m-auto mobile-gap-x">
        {serviceCategories?.map((category, index) => {
          return (
            <div id={category.title.replace(/\s+/g, "")} key={index}>
              <h1 className="text-highlight text-xl font-medium my-6">
                {category.title}
              </h1>
              <DoctorServices
                services={servicesData?.filter(
                  (service) => service.servicecategory === category.category
                )}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Excellence;
