import { IconAmbulance } from "@tabler/icons-react";
import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsappIcon.png";

const SidebarButtons = () => {
  return (
    <div>
      {/* <div className="fixed right-0 top-1/2 transform -translate-y-1/2 space-y-2 z-[2] text-xs max-sm:hidden">
        <div className="bg-theme text-white md:px-5 px-3 py-1 rounded-l-md text-center">
          <Link to={"/bookAppointment"}>
            <div>
              <img src={calender} className="m-auto w-1/3 max-sm:w-1/4" />
            </div>
            <div className="leading-4 max-sm:text-xs">
              Book <br></br> Appointment
            </div>
          </Link>
        </div>
        <div className="bg-highlight text-white text-center py-1 rounded-l-md">
          <Link>
            <IconAmbulance className="m-auto" size={30} />
            <div className="leading-4">
              Emergency <br></br> Medical Care
            </div>
          </Link>
        </div>
      </div> */}
      <div className="fixed right-0 top-[80%] transform -translate-y-3/4 space-y-2 z-[2] text-sm">
        <a
          href="https://wa.me/+919999999999"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsappIcon.src} className="w-5/12 ms-auto me-6" />
        </a>
      </div>
    </div>
  );
};

export default SidebarButtons;
