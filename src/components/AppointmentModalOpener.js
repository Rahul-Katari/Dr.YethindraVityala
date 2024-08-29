import React, { useEffect, useState } from "react";
import AppointmentModal from "./pages/AppointmentModal";

const AppointmentModalOpener = ({ Component, img, button }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
  };
  useEffect(() => {}, [isOpen]);

  return (
    <div>
      {Component ? (
        <button className="modal-opener-link" onClick={toggleModal}>
          {Component}
        </button>
      ) 
      // : img ? (
      //   <Link to="#" className="modal-opener-link" onClick={toggleModal}>
      //     <img
      //       src={appointmentsMobile}
      //       className="w-full"
      //       alt="Appointments Mobile"
      //     />
      //   </Link>
      // )
       : (
        <button className="border-white border md:whitespace-nowrap btn-highlight" onClick={toggleModal}>
          {button}
        </button>
      )}

      <AppointmentModal
        isOpen={isOpen}
        toggleModal={toggleModal}
        onClose={closeModal}
      />
    </div>
  );
};
export default AppointmentModalOpener;
