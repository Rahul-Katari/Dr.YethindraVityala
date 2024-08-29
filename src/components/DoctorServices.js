import SpecialitiesCard from "./home/SpecialitiesCard";

const DoctorServices = ({ services }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 md:col-span-5 sm:col-span-3 lg:gap-10 gap-5 ">
      {services?.map((spec, index) => (
        <SpecialitiesCard spec={spec}
          svg={spec.svg}
          key={index}
        />
      ))}
    </div>
  );
};
export default DoctorServices;
