// AppointmentFormDetail.js
import {
  IconCalendarFilled,
  IconPhoneFilled,
  IconUserFilled,
} from "@tabler/icons-react";
import React, { useState } from "react";
import AppointmentFormDetailInput from "./AppointmentFormDetailInput";
import { Slots } from "../common/Slots";
import { handleFormSubmit, handleInpChange } from "../common/EnquireFormHandle";
const handleDateClick = (event) => {
  // Show the date picker
  event.target.showPicker();
};

const inputData = [
  {
    icon: IconUserFilled,
    type: "text",
    placeholder: "Name",
    required: true,
    value: "name",
    name: "name",
  },
  {
    icon: IconPhoneFilled,
    type: "tel",
    placeholder: "Phone Number",
    required: true,
    value: "phonenumber",
    name: "phonenumber",
  },
  {
    icon: IconCalendarFilled,
    type: "date",
    placeholder: "Date",
    required: true,
    value: "date",
    name: "date",
    min: new Date().toISOString().split("T")[0],
    id: "appointmentDate",
    onclick: handleDateClick
  },
];

const AppointmentFormDetail = ({ details }) => {
  const [bookedSlots, setBookedSlots] = useState();
  const [formData, setFormData] = useState({
    name: "",
    Doctor: "",
    email: "",
    phone_number: "",
    date: "",
    time: "",
    date_time: "",
    note: "",
  });
  const slots = Slots(formData.date, bookedSlots);
  const handleChange = (e) => {
    handleInpChange(e, formData, setFormData, setBookedSlots);
  };
  const handleSubmit = (e) => {
    handleFormSubmit(e, formData, true);
  };

  return (
    <div className=" bg-white rounded-xl shadow-md">
      <div className="flex-shrink-0">
        <div className="bg-highlight rounded-t-xl text-white px-6 py-1.5 font-semibold text-center flex items-center justify-center">
          <IconPhoneFilled
            className="border  rounded-full p-1 me-2"
            size={30}
          />
          +91 73400 40097
        </div>
      </div>
      <div className="p-5">
        <h1 className="font-semibold text-center mb-4 text-xl text-theme">
          Book an Appointment
        </h1>
        <form
          className="space-y-3 text-gray-700 max-sm:text-sm"
          onSubmit={handleSubmit}
        >
          {inputData.map((input, index) => {
            return (
              <AppointmentFormDetailInput
                Icon={input.icon}
                type={input.type}
                placeholder={input.placeholder}
                value={formData[input.value]}
                handleChange={handleChange}
                name={input.name}
                required={input.required}
                key={index}
                id={input.id}
                onClick={input.onclick}
              />
            );
          })}
          <div className="">
            <div className="w-full relative flex border rounded-full p-1">
              <div className="size-[30px]">
                <IconCalendarFilled
                  className="bg-gray-200 rounded-full p-1.5 text-theme"
                  size={30}
                />
              </div>
              <select
                id="time-list"
                required={true}
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="outline-0 w-full px-2 rounded-full"
              >
                {!formData.date ? (
                  <option value="">-Please Select a Date first-</option>
                ) : (
                  <>
                    <option value="">-Select Time -</option>
                    {slots.map((slot, index) => (
                      <option key={index} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </>
                )}
              </select>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-theme text-white px-20 py-2 rounded-full flex items-center">
              Submit{" "}
              {/* <IconChevronRight
                className="border rounded-full md:px-5 px-3 max-sm:py-1 md:h-8 h-6 md:ms-5 ms-2"
                size={60}
              ></IconChevronRight>{" "} */}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentFormDetail;
