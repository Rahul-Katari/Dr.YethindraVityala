import AppointmentModalForm from "../AppointmentModalForm";

const AppointmentModal = ({ isOpen, onClose }) => {
  const handleSubmit = () => {
    document.getElementById("submitFormButton").click();
    // onClose();
  };
  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50 book-appointment-modal overflow-auto">
          <div className="bg-white rounded shadow-lg max-w-4xl">
            <h2 className="md:text-xl md:p-3 p-2 md:mb-6 text-center text-white bg-theme-gradient">
              Book Appointment
            </h2>
            <div className="md:p-8 px-8 py-4">
              <AppointmentModalForm modal={true} close={onClose} />

              {/* Buttons */}
              <div className="flex justify-end mt-3 text-black">
                <button
                  onClick={onClose}
                  className="border px-12 border-black rounded-lg hover:bg-gray-300 py-2 rounded mr-4 text-sm"
                >
                  Close
                </button>
                <button onClick={handleSubmit} className="btn-theme px-12 py-2">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentModal;
