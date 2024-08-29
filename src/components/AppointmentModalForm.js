"use client";
import { useEffect, useRef, useState } from "react";
import banner from "../assets/images/banners/appointment.png";
import { Slots } from "./common/Slots";
import { handleFormSubmit, handleInpChange } from "./common/EnquireFormHandle";
import { specialities } from "@/services/api";
const AppointmentModalForm = ({ modal, close }) => {
  const doctors = [
    { name: "Dr. Vijaya lakshmi", value: 1 },
    { name: "Dr. Vijay Kumar", value: 2 },
  ];

  const [bookedSlots, setBookedSlots] = useState();
  const [formData, setFormData] = useState({
    name: "",
    Doctor: "",
    email: "",
    phone_number: "",
    date: "",
    time: "",
    datetime: "",
    notes: "",
    gender: "",
    speciality: "",
    age: ""
  });
  const slots = Slots(formData.date, bookedSlots);
  const handleChange = (e) => {
    handleInpChange(e, formData, setFormData, setBookedSlots);
  };
  const handleSubmit = (e) => {
    handleFormSubmit(e, formData, true);
  };

  const handleSpecialityChange = (e) => {
    const spec = Number(e.target.value);
    setFormData({
      ...formData,
      Doctor: spec < 6 ? 1 : 2,
      speciality: e.target.value
    })
  };
  useEffect(() => {

  }, [formData])
  const handleDateClick = (event) => {
    // Show the date picker
    event.target.showPicker();
  };
  return (
    <div>
      {!modal && (
        <div>
          <img src={banner.src} className="w-full" />
        </div>
      )}

      <div className={!modal ? "max-w-5xl m-auto md:p-8 px-8 py-4" : ""}>
        <form onSubmit={handleSubmit} className="text-black">
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-2 max-sm:text-xs">
            {/* Left Column */}
            <div className="md:space-y-4 space-y-2">
              <select
                name="speciality"
                value={formData.speciality}
                onChange={handleSpecialityChange}
                className="w-full border p-2 rounded bg-white"
                required
              >
                <option value="">-Select Speciality-</option>
                {specialities?.map((spec, index) => (
                  <option value={index + 1} key={index}> {spec}</option>
                ))}
              </select>
              <select
                name="Doctor"
                value={formData.Doctor}
                onChange={handleChange}
                className="w-full border p-2 rounded bg-white"
                required
              >
                <option value="">-Select Doctor-</option>

                {doctors?.map((doctor) => {
                  return (
                    <option
                      key={doctor.value}
                      id={doctor.value}
                      value={doctor.value}
                    >
                      {doctor.name}
                    </option>
                  );
                })}
              </select>
              <input
                id="appointmentDate"
                type="date"
                name="date"
                value={formData.selectedDate}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                className="w-full border p-2 rounded "
                required
                // ref={dateInputRef}
                onClick={handleDateClick}
              />
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full border p-2 rounded grid grid-cols-3 bg-white"
                required
                disabled={!formData.date} // Disable if no date selected
              >
                {!formData.date && ( // Render only if no date selected
                  <option value="">Please select a date first</option>
                )}
                <option value="">Please select a appointment time</option>

                {slots?.map((slot, index) => (
                  <option
                    key={index}
                    value={slot}
                    style={{
                      width: "calc(100% / 3)",
                      display: "inline-block",
                      boxSizing: "border-box",
                    }}
                  >
                    {slot}
                  </option>
                ))}
              </select>

              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Message"
                className="w-full border p-2 rounded "
              ></textarea>
            </div>
            <div className="md:space-y-4 space-y-2">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full border p-2 rounded "
                required
              />

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full border p-2 rounded bg-white"
              >
                <option value="">-Select Gender-</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Age"
                maxLength={2}
                className="w-full border p-2 rounded "
              />
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"
                className="w-full border p-2 rounded "
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full border p-2 rounded "
              />
              <input
                type="tel"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                placeholder="Phone No"
                className="w-full border p-2 rounded "
                required
              />
            </div>
          </div>

          <div className={` justify-end mt-3 ${!modal ? "flex" : "hidden"}`}>
            <button
              id="submitFormButton"
              // onClick={submitForm}
              className="btn-theme px-12 py-2"
            >
              Submit
            </button>
            <div className={`${modal ? "flex" : "hidden"} justify-end mt-3`}>
              <button
                // onClick={onClose}
                className="border px-12 border-black rounded-lg hover:bg-gray-300 py-2 rounded mr-4 text-sm"
              >
                Close
              </button>
              <button
                //  onClick={handleSubmit}
                className="btn-theme px-12 py-2"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModalForm;
