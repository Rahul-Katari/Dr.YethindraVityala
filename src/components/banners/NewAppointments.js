import clock from "../../assets/images/icons/clock.png";
import location from "../../assets/images/icons/location.png";
import AppointmentModalOpener from "../AppointmentModalOpener";
import bg from "../../assets/images/common/new-appointments-bg.png";

const NewAppointments = ({ doctor }) => {
  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className=" bg-center bg-cover bg-no-repeat md:px-6 px-4 pb-0 relative"
    >
      <div className="max-w-7xl container grid md:grid-cols-12 justify-end">
        <div className="lg:col-span-3 col-span-4 flex justify-center"></div>
        <div
          className="lg:col-span-2 col-span-4 max-lg:order-first"
          data-aos="zoom-in"
        ></div>
        <div className="flex flex-col justify-center lg:col-span-7 col-span-12 py-10 md:gap-8">
          <div>
            <h3
              className="lg:text-2xl text-xl text-highlight font-medium"
              data-aos="fade-up"
            >
              New Patient Appointments
            </h3>
            <p className="lg:text-lg mb-4 font-medium" data-aos="fade-up">
              Discover exceptional care with our new patient appointments.
              Schedule yours today!{" "}
            </p>
          </div>
          <div className="flex max-sm:flex-col justify-between items-start xl:me-12 max-sm:space-y-4">
            <div>
              {/* <AppointmentModal /> */}
              <AppointmentModalOpener button={"Get An Appointment"} />
            </div>
            <div
              className="flex justify-center font-medium text-xs space-x-4"
              data-aos="fade-up"
            >
              <div className="">
                <img src={clock.src} className="w-[30px]" />
              </div>
              <div>
                <div>Monday - Friday</div>
                {
                  doctor === 1 ? <span className="">
                    10:30 AM - 2:00 PM , 6:00 PM - 8:00 PM
                  </span> :
                    <span className="">
                      06:30 PM - 8:30 PM
                    </span>
                }
              </div>
            </div>
            <div
              className="flex justify-center font-medium text-xs space-x-4"
              data-aos="fade-up"
            >
              <div className="">
                <img src={location.src} className="w-[24px] h-[32px]" />
              </div>
              <span className="">
                3rd Floor, PSR Enclave, Above SBI Bank,<br></br>
                DVR Diagnostics, Opp: Max Showroom,<br></br>
                Narsingi Main Road, Hyderabad
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  // );
};

export default NewAppointments;
