// import banner from "../../assets/images/banners/our-doctors-banner.png";
import banner from "../../assets/images/banners/our-doctors.png";
import OurTopDoctors from "../common/OurTopDoctors";

const BestDoctors = () => {
  return (
    <div>
      <div className="">
        <img src={banner.src} className="w-full border-highlight border-b-4 mb-5" />
        <div className="">
          <OurTopDoctors />
        </div>
      </div>
    </div>
  );
};
export default BestDoctors;
