import {
  createApplication,
  createAppointment,
  createEnquiry,
  getBookedSlots,
} from "@/services/api";

export const handleInpChange = async (
  e,
  formData,
  setFormData,
  setBookedSlots
) => {
  let newFormData;
  const { name, value } = e.target;

  if (name === "time" && !formData.date) {
    window.alert("please select a date");
    return; // Exit the function early if no date is selected
  }
  if (name === "file") {
    setFormData({
      ...formData,
      [name]: e.target.files,
    });
    newFormData = {
      ...formData,
      [name]: e.target.files,
    };
  }
  else {
    setFormData({
      ...formData,
      [name]: value,
    });
    newFormData = {
      ...formData,
      [name]: value,
    };
  }


  // Update datetime if date or time is being changed
  if (name === "date") {
    const slots = await getSlots(value);
    newFormData.time = '';
    setBookedSlots(slots);
    setFormData(newFormData);
  }
};

const convertTo24HourFormat = (time12h) => {
  const [time, modifier] = time12h.split(" ");

  let [hours, minutes] = time.split(":");

  if (hours === "12") {
    hours = "00";
  }

  if (modifier === "pm") {
    hours = parseInt(hours, 10) + 12;
  }

  return `${hours}:${minutes}`;
};
function getLocalDateTimeISO() {
  const now = new Date();

  // Get date components
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  // Construct the local ISO date-time string
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
}

export const handleFormSubmit = async (e, formData, appointment, career) => {
  e.preventDefault();
  // Handle form submission
  const Time = formData.time && convertTo24HourFormat(formData.time);
  formData.date_time = formData.date ? formData.date + "T" + Time + ":00" : getLocalDateTimeISO();
  delete formData.date;
  delete formData.time;
  try {
    const res = career ? await createApplication(formData) : appointment
      ? await createAppointment(formData)
      : await createEnquiry(formData);
    window.alert("form submitted succesfully");
    window.location.reload();
    return res;
  } catch (error) {
    console.error(error);
  }
};
export const getSlots = async (date) => {
  try {
    const bookedSlots = await getBookedSlots(date);
    const currentTime = new Date();

    const bookedTimes = bookedSlots.data
      .map((slot) => {
        const slotDate = new Date(slot.date_time);

        // Filter out slots before the current time
        if (slotDate <= currentTime) return null;

        const hours = slotDate.getHours();
        const minutes = slotDate.getMinutes();
        const ampm = hours >= 12 ? "pm" : "am";
        const formattedHours =
          hours % 12 === 0 ? 12 : (hours % 12).toString().padStart(2, "0");
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        return `${formattedHours}:${formattedMinutes} ${ampm}`;
      })
      .filter((time) => time !== null); // Filter out null values

    if (bookedTimes.length === 0) {
      return "No slots available";
    }

    return bookedTimes;
  } catch (error) {
    console.error(error);
  }
};

