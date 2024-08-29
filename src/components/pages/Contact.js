"use client"
import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";

import banner from "../../assets/images/banners/contact.png";
import doctor from "../../assets/images/contact-doctor.png";
import BreadCrumb from "../common/BreadCrumb";
import { doctorsList, googleMapUrl, specialities } from "@/services/api";
import { handleFormSubmit, handleInpChange } from "../common/EnquireFormHandle";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Contact() {
  const breadCrumb = [
    { href: "/contact", title: "Contact Us" },
  ];
  const [formData, setFormData] = useState({
    name: "",
    doctor: "",
    email: "",
    phonenumber: "",
    date: "",
    datetime: "",
    message: "",
  });

  const handleChange = (e) => {
    handleInpChange(e, formData, setFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumberPattern = /^[0-9]{10}$/; // Simple pattern for a 10-digit phone number

    if (!phoneNumberPattern.test(formData.phonenumber)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    handleFormSubmit(e, formData);

    // Clear form after submission
    setFormData({
      name: "",
      doctor: "",
      email: "",
      phonenumber: "",
      date: "",
      datetime: "",
      message: "",
      speciality: ''
    });
  };
  return (
    <div>
      <div>
        <img src={banner.src} className="w-full " />
      </div>
      <div className="max-w-5xl container">
        <BreadCrumb linkData={breadCrumb} />
      </div>
      <div className="grid md:grid-cols-5 max-w-5xl m-auto  my-6 p-4 rounded-xl shadow">
        <div className="col-span-2">
          <img src={doctor.src} className="md:h-[500px] hidden md:block" />
        </div>
        <div className="col-span-3">
          <h3 className="text-xl font-semibold text-header mb-8 highlight-border highlight-border-left">
            Contact Us
          </h3>
          <p>Your Path to Health Starts Here.</p>
          <div>
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-12"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <div>
                    <input
                      required
                      placeholder="Name"
                      type="text"
                      name="name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <input
                    required
                    placeholder="Phone Number"
                    type="tel"
                    name="phonenumber"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0  py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <div>
                    <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <div>
                    {/* <label for="speciality" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label> */}
                    <select
                      name="speciality"
                      required
                      // onChange={handleSpecialityChange}
                      id="speciality"
                      className="ring-1 border-0 ring-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 placeholder:text-gray-400 dark:border-gray-600 dark:placeholder-gray-400  focus:ring-indigo-600 bg-white"
                      onChange={handleChange}
                    >
                      <option value="">-Select Speciality-</option>
                      {
                        specialities?.map((spec, index) => (
                          <option className="text-black" value={index + 1} key={index}> {spec}</option>
                        ))
                      }
                    </select>
                  </div>
                </div>
                <div>
                  <div>
                    <select
                      name="doctor"
                      required
                      id="doctor"
                      className="bg-white border-0 ring-gray-300 ring-1 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 placeholder:text-gray-400 dark:border-gray-600 dark:placeholder-gray-400   focus:ring-indigo-600"
                      onChange={handleChange}
                    >
                      <option value="">-Select Doctor-</option>
                      {doctorsList?.map((doctor) => {
                        return (
                          <option key={doctor?.value} value={doctor?.value}>
                            {doctor.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                      onChange={handleChange}
                      defaultValue={""}
                      placeholder="message"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-5 flex justify-end">
                <button className="rounded-full bg-theme-gradient block px-20 py-2.5 text-center text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <iframe src={googleMapUrl}
          className="w-full h-[600px]" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}
