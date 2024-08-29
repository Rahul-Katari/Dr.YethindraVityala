import { useEffect, useState } from "react";
import ApiService from "../../controller/apiService";
import { useBlogData } from "../../controller/blogDataContext";
import { handleFormSubmit, handleInpChange } from "./EnquireFormHandle";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function RequestCallBackForm({ callBackOne }) {
  const [formData, setFormData] = useState({
    name: "",
    doctor: "",
    email: "",
    phonenumber: "",
    time: "00:00",
    datetime: "",
    note: "Requested a Callback",
  });
  const handleChange = (e) => {
    handleInpChange(e, formData, setFormData);
  };
  const handleSubmit = (e) => {
    handleFormSubmit(e, formData);
  };
  const round = callBackOne ? "rounded-full" : "rounded-xl";
  return (
    <div>
      <form onSubmit={handleSubmit} method="POST" className="mx-auto">
        <div
          className={`grid grid-cols-1 gap-x-8 md:gap-y-6 gap-y-3 ${callBackOne ? "lg:grid-cols-5 md:grid-cols-2" : "md:grid-cols-2"
            }`}
        >
          <div>
            <input
              required
              placeholder="Name*"
              type="text"
              name="name"
              id="first-name"
              autoComplete="given-name"
              onChange={handleChange}
              className={`block w-full ${round} border-0 px-5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600`}
            />
          </div>
          <div>
            <input
              required
              placeholder="Phone*"
              type="tel"
              name="phonenumber"
              id="phone-number"
              autoComplete="tel"
              onChange={handleChange}
              className={`block w-full ${round} border-0  py-2 px-5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600`}
            />
          </div>
          <div>
            <input
              placeholder="Email*"
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              onChange={handleChange}
              className={`block w-full ${round} border-0 px-5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600`}
            />
          </div>
          <div className={callBackOne ? "hidden" : "block"}>
            <input
              placeholder="Date*"
              type="date"
              name="date"
              id="date"
              autoComplete="date"
              className={`w-full ${round}  border-0 px-5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600`}
            />
          </div>
          <div className="sm:col-span-2 hidden">
            <textarea
              name="message"
              id="message"
              rows={4}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600"
              defaultValue={""}
              placeholder="message"
            />
          </div>
          <div
            className={`md:col-span-2 flex ${callBackOne ? "md:justify-end" : "mt-6"
              }`}
          >
            <button
              className={`hover:shadow-2xl hover:translate-x-1 rounded-full font-semibold bg-highlight md:px-6 px-4 py-2 text-white ${round} font-light border-white border`}
            >
              Request A Call Back
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
