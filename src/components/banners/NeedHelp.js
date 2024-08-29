import needHelp from "../../assets/images/banners/need-help.png";
import mail from "../../assets/images/landing/smsedit.png"

const NeedHelp = () => {
  return (
    <div
      className="md:grid grid-cols-12 justify-end bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${needHelp})` }}
    >
      <div className="col-span-4"></div>
      <div className="md:flex md:p-8 p-2 max-sm:py-10 col-span-8 justify-between text-white">
        <div className="flex flex-col justify-center p-3 max-sm:items-center">
          <h3 className="font-semibold">You can also reach us at</h3>
          <div className="flex items-center">
            <img src={mail} />
            <a href="mailto:doctormanasamynepally@gmail.com" className="text-[#F4F4F4] ms-4">doctormanasamynepally@gmail.com</a>
          </div>
        </div>
        <div className="border-r border-white"></div>
        <div className="text-center p-3">
          <h2 className="font-semibold">Need Help?</h2>
          <p className="text-[#F4F4F4] mb-5">Talk to Our Fertility Experts</p>
          <a href="tel:+91 73400 40097" className="font-semibold bg-gradient-to-b from-[#924A90] to-[#6E4A91] px-20 py-2 rounded-full mt-5">+91 73400 40097</a>
        </div>
      </div>
    </div>
  );
};

export default NeedHelp;
