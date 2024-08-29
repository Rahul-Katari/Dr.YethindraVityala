import BreadCrumb from "../common/BreadCrumb";
import banner from "../../assets/images/banners/book-appointment.png";
import { useEffect, useState } from "react";
import ApiService from "../../controller/apiService";
import { useParams } from "react-router-dom";
import useApiData from "../../controller/useApiData";

const HealthCheckUpForm = () => {
  const [selectedDate, setSelectedDate] = useState();
  const { packageId } = useParams();
  const [packageData, setPackageData] = useState(null);
  const [availableTimes, setAvailableTimes] = useState();
  // Fetch blog data from the API
  const { data: healthPackages, loading, error } = useApiData(
    "healthPackages?reqtype=api"
  );
  useEffect(() => {
    if (healthPackages) {
      setPackageData(healthPackages?.result?.data.packages);
    }
  }, [healthPackages]);
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    if (name === "date") {
      setSelectedDate(value);
      const dateParts = value.split("-");
      const formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
      value = formattedDate;
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      packageid: packageId,
    }));
  };
  const handleFormReset = () => {
    setFormData({
      name: "",
      phonenumber: "",
      email: "",
      date: "",
      selectedDate: "",
      time: "",
      address: "",
      message: "",
    });
  };
  const breadCrumb = [
    { href: "/", title: "home" },
    { href: "/healthCheckup", title: "Heath Checkup Packages" },
    { href: "/healthCheckupForm", title: "Appointment" },
  ];
  const [formData, setFormData] = useState({
    name: "",
    phonenumber: "",
    email: "",
    date: "",
    selectedDate: selectedDate,
    time: "",
    address: "",
    message: "",
  });
  useEffect(() => {
    const fetchAndSetBookedPackages = async () => {
      try {
        const bookedPackages = await bookedSlots();
        const availableTimeSlots = times.filter(
          (time) => !bookedPackages?.bookedslots?.includes(time)
        );
        setAvailableTimes(availableTimeSlots);
      } catch (error) {
        console.log(error);
      }
    };
    if (formData.date) fetchAndSetBookedPackages();
  }, [formData.date]);
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const submitResponse = await ApiService.post(
        "savepackagebooking",
        formData
      );
      if (submitResponse.data.result.status === 200) {
        window.alert(submitResponse.data.result.message);
        handleFormReset();
      } else window.alert("form not submitted");
    } catch (error) {
      console.log(error);
    }
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
      const response = await ApiService.post("getpackagebookedslots", {
        date: formData.date,
      });
      return response.data; // Assuming the data is in the format [{ date: 'YYYY-MM-DD', time: 'HH:mm' }, ...]
    } catch (error) {
      console.error("Error fetching booked appointments:", error);
      return [];
    }
  };
  return (
    <div>
      <div>
        <img src={banner} />
      </div>
      <BreadCrumb linkData={breadCrumb} />
      <div className=" bg-banner">
        <div className="p-8 md:py-24 max-w-7xl m-auto">
          <form className="grid md:grid-cols-2  gap-4" onSubmit={submitForm}>
            <div>
              <label className="mb-2 block">Selected Package*</label>
              <select
                required
                value={packageId}
                name="package"
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              >
                <option value="">--Choose a package--</option>
                {packageData?.map((healthPackage) => {
                  return (
                    <option
                      key={healthPackage?._id}
                      selected={healthPackage?._id === packageId ? true : false}
                      value={healthPackage?._id}
                    >
                      {healthPackage?.package_name}
                    </option>
                  );
                })}
                {/* Add more package options as needed */}
              </select>
            </div>

            <div>
              <label className="mb-2 block">Name*</label>
              <input
                required
                value={formData.name}
                type="text"
                name="name"
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="mb-2 block">Mobile*</label>
              <input
                required
                value={formData.phonenumber}
                type="number"
                name="phonenumber"
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="mb-2 block">Email*</label>
              <input
                value={formData.email}
                type="email"
                name="email"
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="mb-2 block">Date*</label>
              <input
                required
                value={formData.selectedDate}
                type="date"
                name="date"
                onChange={handleInputChange}
                min={new Date().toISOString().split("T")[0]}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="mb-2 block">Time*</label>
              <select
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
                disabled={!formData.date} // Disable if no date selected
              >
                {!formData.date && ( // Render only if no date selected
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
              {/* <input
                required
                value={formData.time}
                type="time"
                name="time"
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              /> */}
            </div>

            <div>
              <label className="mb-2 block">Address*</label>
              <textarea
                value={formData.address}
                name="address"
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="mb-2 block">Message*</label>
              <textarea
                value={formData.message}
                name="message"
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="flex">
              <div className="flex justify-end">
                <button className="btn-primary text-white px-14 py-2 rounded hover:bg-blue-600">
                  Submit
                </button>
              </div>
              <div>
                <button
                  type="reset"
                  className="border border-black text-gray-700 px-14 py-2 text-xs rounded hover:bg-gray-400"
                  onClick={handleFormReset}
                >
                  Reset
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default HealthCheckUpForm;
