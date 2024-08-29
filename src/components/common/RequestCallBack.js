import bg from "../../assets/images/common/request-callback-bg.png";
import Heading from "./Heading";
import RequestCallBackForm from "./RequestCallBackForm";
const RequestCallBack = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className="bg-no-repeat bg-cover max-sm:bg-[#e0e4e7] max-sm:pt-10 max-sm:bg-cover"
    >
      <div className="container max-w-6xl md:py-20 lg:grid grid-cols-12">
        <div className="col-span-5">
          <div className="md:pb-5 text-white" data-aos="fade-up">
            <p className="text-base font-light">Have a Questions? Chat with professional</p>
            <h2 className="md:text-2xl text-xl">Dont put up with pain!</h2>
            <h2 className="md:text-2xl text-xl">Make an appointment</h2>
          </div>
          <div className="md:mt-8 max-sm:my-4" data-aos="fade-up">
            <RequestCallBackForm />
          </div>
        </div>
      </div>
    </div>
  );
};
export default RequestCallBack;
