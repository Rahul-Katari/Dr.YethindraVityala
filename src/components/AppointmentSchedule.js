import { useEffect, useState } from "react";
import ApiService from "../controller/apiService";
import useApiData from "../controller/useApiData";
import AppointmentInput from "./home/AppointmentInput";
import { useBlogData } from "../controller/blogDataContext";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { IconEye } from "@tabler/icons-react";
import { getDoctors, googleMapUrl } from "@/services/api";
import { handleFormSubmit, handleInpChange } from "./common/EnquireFormHandle";
import { Slots } from "./common/Slots";

const AppointmentSchedule = ({ home }) => {
  const [bookedSlots, setBookedSlots] = useState();

  const [formData, setFormData] = useState({
    name: "",
    Doctor: "",
    email: "",
    phone_number: "",
    date: "",
    time: "00:00",
    date_time: "",
    notes: "",
    speciality: "",
  });
  const [doctors, setDoctors] = useState();
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await getDoctors();
        setDoctors(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDoctors();
  }, []);
  const [speciality, setSpeciality] = useState("0");
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  useEffect(() => {
    if (speciality) {
      const filtered = doctors;
      setFilteredDoctors(filtered);
    } else {
      setFilteredDoctors(doctors);
    }
  }, [speciality, doctors]);

  const handleSubmit = async (e) => {
    handleFormSubmit(e, formData, true);
  };
  const handleChange = (e) => {
    handleInpChange(e, formData, setFormData, setBookedSlots);
  };

  const handleSpecialityChange = (e) => {
    setSpeciality(e.target.value);
  };
  const slots = Slots(formData.date, bookedSlots);
  const handleNumberChange = (event) => {
    const value = event.target.value;
    // Update the input value to contain only numeric characters
    event.target.value = value.replace(/[^0-9]/g, '');
  };
  const handleDateClick = (event) => {
    // Show the date picker
    event.target.showPicker();
  };
  const inputs = [
    {
      name: "name",
      placeholder: "Full Name*",
      required: true,
      col: "md:col-span-2",
      home: true,
      type: "text",
      onChange: handleChange,
    },
    {
      name: "phone_number",
      placeholder: "Mobile No*",
      required: true,
      home: true,
      type: "number",
      onChange: handleChange,
      oninput: handleNumberChange
    },
    {
      name: "email",
      placeholder: "Email Id",
      home: true,
      type: "email",
      onChange: handleChange,
    },
    {
      name: "speciality",
      placeholder: "Speciality",
      type: "select",
      selectType: "speciality",
      onChange: handleChange,
      required: true,
      home: true,
      value: speciality,
      options: [], // Populate with options if needed
    },
    {
      name: "Doctor",
      placeholder: "Doctor",
      type: "select",
      selectType: doctors,
      onChange: handleChange,
      required: true,
      home: true,
      value: "",
      options: [], // Populate with doctor options if needed
    },
    {
      name: "date",
      placeholder: "Date",
      home: true,
      type: "date",
      onChange: handleChange,
      min: new Date().toISOString().split("T")[0],
      onClick: handleDateClick
    },
  ];
  return (
    <div className="mobile-gap-x max-w-7xl container">
      <div
        className={`lg:grid ${home ? "grid-cols-2" : "grid-cols-7 gap-4 border-2 md:p-4 py-4"
          } max-sm:space-y-4  rounded-lg max-sm:p-2`}
      >
        <div
          className={`${home ? "" : "col-span-3 flex items-center justify-center"
            } rounded-lg`}
        >
          {home ? (
            <div>
              <div className="text-white">
                <p className="font-light">People Also Ask</p>
                <h3 className="text-xl font-semibold">
                  Frequently Asked Questions
                </h3>
              </div>
              <div className="space-y-6 mt-5">
                <Disclosure
                  as="div"
                  className="px-6 py-4 bg-white"
                  defaultOpen={true}
                  data-aos="fade-up"
                >
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className="font-medium text-left">
                      What should I do before orthopedic surgery?
                    </span>
                    <IconEye className="size-5 group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 text-sm/5 ">
                    <p>
                      Before orthopedic surgery, consult with Dr. Vasudeva
                      Juvvadi or your surgeon to understand the procedure and
                      discuss any concerns. Obtain medical clearance by
                      completing necessary tests and evaluations. Manage
                      medications as directed by Dr. Vasudeva Juvvadi or your
                      healthcare provider. Follow pre-surgery instructions
                      regarding fasting, hydration, and medication use. Arrange
                      transportation to and from the hospital, and prepare your
                      home for a comfortable recovery. Adhering to these steps
                      ensures readiness for a successful surgical experience and
                      facilitates smoother post-operative healing.
                    </p>
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure
                  as="div"
                  className="px-6 py-4 bg-white"
                  data-aos="fade-up"
                >
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className="font-medium text-left">
                      How do I prepare for knee replacement surgery?
                    </span>
                    <IconEye className="size-5 group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 text-sm/5 ">
                    <p>
                      To prepare for knee replacement surgery, consult with Dr.
                      Vasudeva Juvvadi or your orthopedic surgeon to understand
                      the procedure and ask any questions you have. Follow any
                      pre-surgery instructions provided, which may include
                      fasting guidelines and medication adjustments. Arrange
                      transportation for the day of surgery and prepare your
                      home for recovery with necessary supplies and a
                      comfortable space. Attend any required pre-operative
                      appointments and medical tests as advised by Dr. Vasudeva
                      Juvvadi or your healthcare team. Following these steps
                      ensures you are well-prepared for a successful knee
                      replacement surgery and smoother recovery.
                    </p>
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure
                  as="div"
                  className="px-6 py-4 bg-white"
                  data-aos="fade-up"
                >
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className="font-medium text-left">
                      When can I return to work or regular activities after knee
                      replacement surgery?
                    </span>
                    <IconEye className="size-5 group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 text-sm/5 ">
                    <p>
                      After knee replacement surgery, returning to work or
                      regular activities depends on individual recovery progress
                      and the type of job. Generally, desk jobs can be resumed
                      in 4-6 weeks, while physically demanding jobs may require
                      3-6 months. Its crucial to follow your surgeons guidance
                      on post-operative care, including physical therapy and
                      exercise regimes, to regain strength and mobility. Gradual
                      reintroduction to daily activities helps prevent
                      complications and ensures a successful recovery. Consult
                      Dr. Vasudeva Juvvadi or your healthcare team for
                      personalized advice tailored to your specific needs and
                      health status post-surgery.
                    </p>
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure
                  as="div"
                  className="px-6 py-4 bg-white"
                  data-aos="fade-up"
                >
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className="font-medium text-left">
                      Can both knees be replaced at the same time?
                    </span>
                    <IconEye className="size-5 group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 text-sm/5 ">
                    <p>
                      Yes, it is possible to have both knees replaced at the
                      same time, a procedure known as bilateral knee replacement
                      surgery. This option is considered for patients who are
                      generally healthy and meet specific criteria, advised by
                      orthopedic specialists like Dr. Vasudeva Juvvadi. However,
                      it requires careful consideration of factors such as
                      overall health, age, and individual circumstances.
                      Recovery from bilateral knee replacement surgery typically
                      involves a longer rehabilitation period and close
                      post-operative monitoring to ensure successful outcomes.
                      Consult with Dr. Vasudeva Juvvadi to determine if this
                      approach is appropriate for your situation.
                    </p>
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </div>
          ) : (
            <iframe
              src={googleMapUrl}
              style={{ border: "0" }}
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className=" w-full h-full rounded-lg max-sm:h-[400px]"
            ></iframe>
          )}
        </div>
        <div
          className={`${home ? "" : "bg-highlight col-span-4 max-sm:p-4"
            } md:p-10  rounded-lg`}
        >
          <div className="text-white">
            <h1 className="uppercase text-2xl md:text-3xl" data-aos="fade-up">
              schedule an appointment
            </h1>
            <p className="text-xs" data-aos="fade-up">
              To reach out to our mm Hospital Team, please fill in the below
              form. Our team members will revert back to you shortly.
            </p>
          </div>
          <form onSubmit={handleSubmit} data-aos="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-white">
              {inputs.map((input, index) => (
                <AppointmentInput
                  name={input.name}
                  placeholder={input.placeholder}
                  required={input.required}
                  col={input.col}
                  type={input.type}
                  selectType={input.selectType}
                  home={home}
                  key={index}
                  onChange={input.onChange}
                  oninput={input.oninput}
                  min={input.min}
                  onClick={input.onClick}
                />
              ))}
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full border p-2 rounded grid grid-cols-3 bg-transparent"
                required
                disabled={!formData.date} // Disable if no date selected
              >
                {!formData.date && ( // Render only if no date selected
                  <option value="">Please select a date first</option>
                )}
                <option value="">Please select a appointment time</option>

                {slots?.map((slot, index) => (
                  <option className="text-black"
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
                placeholder="Message"
                className={`rounded placeholder:text-white h-32 ${home ? "" : "bg-transparent"
                  } border p-2 md:col-span-2 text-sm`}
                onChange={handleChange}
              ></textarea>
            </div>
            <button className="rounded-full p-2 px-10 mt-4 bg-white ms-auto">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSchedule;
