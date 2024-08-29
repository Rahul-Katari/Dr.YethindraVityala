// BlogDataContext.js
"use client"
import React, { createContext, useState, useEffect, useContext } from "react";
import useApiData from "./useApiData";

const ServicesDataContext = createContext();

export const useServicesData = () => useContext(ServicesDataContext);

export const ServicesDataProvider = ({ children }) => {
  const [servicesData, setServicesData] = useState(null);
  // Fetch Services data from the API
  const { data: services, loading, error } = useApiData("services?reqtype=api");
  useEffect(() => {
    if (services) {
      setServicesData(services?.result?.data?.services);
    }
  }, [services]);

  return (
    <ServicesDataContext.Provider value={servicesData}>
      {children}
    </ServicesDataContext.Provider>
  );
};
