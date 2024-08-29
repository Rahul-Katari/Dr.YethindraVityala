import { IconX } from "@tabler/icons-react";
import React, { useState } from "react";
import { handleFormSubmit, handleInpChange } from "../common/EnquireFormHandle";
import { savefile } from "@/services/api";

const CareerForm = ({ careerid }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const [formData, setFormData] = useState({
    cv: "", // doctor
    name: "", // name
    phone_number: "", // phone
    email: "", // email
    qualification: "", // speciality
    total_experience: "", // time
    location: "", // location
    careerid: careerid, // careerid
    career: {
      key: careerid, collection: "careers"
    },
    file: ""
  });

  const handleChange = (e) => {
    handleInpChange(e, formData, setFormData);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target); 
    let updatedFormData = { ...formData };
    const data = Object.fromEntries(form.entries());
    try {
      // api to upload cv 
      const fileData = new FormData();
      fileData.append('file', data.file);
      const res = await savefile(fileData);
      if (res) {
        updatedFormData = {
          ...updatedFormData,
          cv: res.data.id
        };
      }
      await handleFormSubmit(e, updatedFormData, false, true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-end">
      <button onClick={openModal} className="btn-primary px-4 text-sm">
        Apply Now
      </button>

      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            {/* Modal */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            ></span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle max-w-lg w-full">
              {/* Close button */}
              <div className="flex justify-end">
                <button onClick={closeModal} type="button">
                  <IconX
                    className="bg-highlight text-white p-2 rounded-lg"
                    size={48}
                  />
                </button>
              </div>
              <h3 className="text-center text-theme text-xl font-semibold">
                Career Form
              </h3>
              {/* Form fields */}
              <form className="p-6 text-xs" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full px-3 py-3 border rounded"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="tel"
                    id="phonenumber"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full px-3 py-3 border rounded"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full px-3 py-3 border rounded"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    id="qualification"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    placeholder="Qualification"
                    className="w-full px-3 py-3 border rounded"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    id="totalexp"
                    name="total_experience"
                    value={formData.total_experience}
                    onChange={handleChange}
                    placeholder="Total Experience"
                    className="w-full px-3 py-3 border rounded"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Location"
                    className="w-full px-3 py-3 border rounded"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="file"
                    id="myfile"
                    name="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                    className="w-full px-3 py-3 border rounded"
                  />
                </div>
                {/* Submit button */}
                <div className="flex justify-end">
                  <button
                    className="btn-primary text-xs flex justify-end px-8"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerForm;
