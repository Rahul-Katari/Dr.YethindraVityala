// AppointmentFormDetail.js
import {
  IconCalendarFilled,
  IconClockHour3,
  IconPhoneFilled,
  IconUserFilled,
} from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import ApiService from "../../controller/apiService";
import AppointmentFormDetailInput from "../AppointmentFormDetailInput";

const AppointmentFormDetail = ({ details }) => {
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [selectedDate, setSelectedDate] = useState();
  const [availableTimes, setAvailableTimes] = useState();

  const [formData, setFormData] = useState({
    appointmentDate: "", // date
    appointmentTime: "", // time
    selectedDate: selectedDate,
    pastconsultation: "", // message
    patientName: "", // name
    patientGender: "", // gender
    patientAge: "", // age
    location: "", // location
    patientEmail: "", // email
    patientMobile: "", // phone
  });
  useEffect(() => {}, [formData]);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const submitResponse = await ApiService.post(
        "submitappointment",
        formData
      );
      if (submitResponse.status === 200) {
        window.alert(submitResponse.data.result.message);
        setFormData({
          preferredDoctor: "", // doctor
          preferredDepartment: "", // speciality
          appointmentDate: "", // date
          appointmentTime: "", // time
          selectedDate: "",
          pastconsultation: "", // message
          patientName: "", // name
          patientGender: "", // gender
          patientAge: "", // age
          location: "", // location
          patientEmail: "", // email
          patientMobile: "", // phone
          // doctorid: doctorid,
        });
      } else window.alert("form not submitted");
      // Handle response
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const fetchAndSetBookedAppointments = async () => {
      try {
        const bookedAppointments = await bookedSlots();
        const availableTimeSlots = times.filter(
          (time) => !bookedAppointments?.bookedslots?.includes(time)
        );
        setAvailableTimes(availableTimeSlots);
      } catch (error) {
        console.log(error);
      }
    };
    if (formData.appointmentDate) fetchAndSetBookedAppointments();
  }, [formData.appointmentDate]);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      preferredDoctor: details?._id, // doctor
      preferredDepartment: details?.department,
    });
  };
  const currentDate = new Date();
  const selDate = new Date(selectedDate);
  const isToday =
    selDate.getDate() === currentDate.getDate() &&
    selDate.getMonth() === currentDate.getMonth() &&
    selDate.getFullYear() === currentDate.getFullYear();

  const selectedHour = isToday ? currentDate.getHours() : 0;
  const selectedMinute = isToday ? currentDate.getMinutes() : 0;

  // Generate an array of times from the selected hour onwards
  const times = [];
  const startHour = 10; // Start hour (9 AM)
  const endHour = 17; // End hour (6 PM)

  for (let hour = startHour; hour <= endHour; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      let period = "am";
      let hour12 = hour;
      if (hour >= 12) {
        period = "pm";
        hour12 -= 12;
      }
      if (hour12 === 0) {
        hour12 = 12; // 12:00 AM should be displayed as 12:00 PM
      }
      const time = `${hour12
        .toString()
        .padStart(2, "0")}:${minute.toString().padStart(2, "0")} ${period}`;
      // Check if the time is in the future
      if (
        !isToday || // Include all times if selected date is not today
        hour > selectedHour ||
        (hour === selectedHour && minute >= selectedMinute)
      ) {
        times.push(time);
      }
    }
  }

  const bookedSlots = async () => {
    try {
      const response = await ApiService.post("getbookedslots", {
        date: formData.appointmentDate,
      });
      return response.data; // Assuming the data is in the format [{ date: 'YYYY-MM-DD', time: 'HH:mm' }, ...]
    } catch (error) {
      console.error("Error fetching booked appointments:", error);
      return [];
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white md:rounded-xl md:shadow-md">

      <div className="p-5">
        <h1 className="font-semibold text-theme text-center mb-4">
          Book an Appointment
        </h1>
        <form
          className="space-y-4 text-gray-700 text-xs"
          onSubmit={handleFormSubmit}
        >
          <AppointmentFormDetailInput
            Icon={IconUserFilled}
            type="text"
            placeholder="Name"
            value={formData.patientName}
            handleChange={handleChange}
            name={"patientName"}
          />
          <AppointmentFormDetailInput
            Icon={IconPhoneFilled}
            type="tel"
            placeholder="Phone Number"
            value={formData.patientMobile}
            name={"patientMobile"}
            handleChange={handleChange}
          />
          <AppointmentFormDetailInput
            Icon={IconCalendarFilled}
            type="date"
            placeholder="Appointment Date"
            value={formData.appointmentDate}
            name={"appointmentDate"}
            handleChange={handleChange}
            id={"appointmentDate"}
          />
          {/* <AppointmentFormDetailInput
            Icon={IconClockHour3}
            type="time"
            placeholder="Appointment Time"
            value={formData.appointmentTime}
            name={"appointmentTime"}
            handleChange={handleChange}
          /> */}
          <div className="p-1 border rounded-full flex">
            <div className="size-[30px]">
              <IconClockHour3
                className="bg-gray-200 rounded-full p-1.5 text-theme"
                size={30}
              />
            </div>
            <div className="w-full relative">
              <select
                name="appointmentTime"
                value={formData.appointmentTime}
                onChange={handleChange}
                className="py-0 size-full w-full outline-0 p-2 rounded grid grid-cols-3"
                required
                disabled={!formData.appointmentDate} // Disable if no date selected
              >
                {!formData.appointmentDate && ( // Render only if no date selected
                  <option value="">Please select a date first</option>
                )}
                {availableTimes?.map((time) => (
                  <option
                    key={time}
                    value={time}
                    style={{
                      width: "calc(100% / 3)",
                      display: "inline-block",
                      boxSizing: "border-box",
                    }}
                  >
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="btn-theme rounded-full px-8">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentFormDetail;
