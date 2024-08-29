import React, { useState } from "react";
import {
  IconBrandInstagram,
  IconBrandTwitterFilled,
  IconBrandFacebookFilled,
  IconPlus,
} from "@tabler/icons-react";

import linkedin from "../../assets/images/icons/linkedin.png";
import youtube from "../../assets/images/icons/youtube.png";
import logo from "../../assets/images/logo.png";
import Image from "next/image";
import { handleFormSubmit, handleInpChange } from "../common/EnquireFormHandle";

const inputData = [
  {
    type: "text",
    placeholder: "Name",
    required: true,
    value: "name",
    name: "name",
  },
  {
    type: "tel",
    placeholder: "Phone Number",
    required: true,
    value: "phonenumber",
    name: "phonenumber",
  },
  {
    type: "email",
    placeholder: "Email ID",
    value: "email",
    name: "email",
  },
];

const FooterContactForm = () => {
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

    // handleFormSubmit(e, formData);

    // Clear form after submission
    setFormData({
      name: "",
      doctor: "",
      email: "",
      phonenumber: "",
      date: "",
      datetime: "",
      message: "",
    });
  };

  return (
    <div className="flex items-center justify-center" id="footerContact">
      <div className="bg-white rounded-xl p-4 shadow-lg w-full max-w-md">
        <h1 className="text-4xl font-semibold text-center text-black">
          Contact <span className="text-highlight">me</span>
        </h1>
        <p className="text-center text-gray-600">Let&apos;s get in touch!</p>
        <form className="space-y-6 text-black" onSubmit={handleSubmit}>
          {inputData.map((input, index) => (
            <input
              key={index}
              type={input.type}
              placeholder={input.placeholder}
              required={input.required}
              value={formData[input.value]}
              name={input.name}
              className="w-full border-b border-gray-300 p-2 outline-none focus:border-black"
              onChange={handleChange}
              min={input.min}
              id={input.id}
            />
          ))}
          <textarea
            onChange={handleChange}
            name="message"
            value={formData.message}
            placeholder="Write Your Enquiry"
            className="w-full border border-gray-300 p-2 outline-none h-[70px] focus:border-black rounded"
          ></textarea>
          <button className="bg-highlight rounded-full flex p-0.5 px-3 min-h-[40px] items-center font-medium mx-auto">
            {/* <IconPlus className="bg-white text-black rounded-full h-[38px] w-[38px] p-2" /> */}
            <span className="text-white px-2">Submit</span>
          </button>
        </form>
      
      </div>
    </div>
  );
};

export default FooterContactForm;
