import { Link } from "react-router-dom";
import { ASSET_URL } from "../../controller/config";
import React from "react";

const HealthCheckCard = ({ healthPackage }) => {
  return (
    <div className="bg-banner p-4">
      <div className="mx-auto  md:flex  space-4">
        <div className="flex-shrink-0">
          <img
            src={ASSET_URL+healthPackage.package_imgSrc}
            alt="health pckage image"
            className="max-sm:h-[150px] w-full object-cover"
          />
        </div>
        <div className="ms-3">
          <div className="md:text-xl mt-3 font-medium text-[#0469A9]">
            {healthPackage?.package_name}
          </div>
          <p className="text-xs text-gray-500">
          {healthPackage?.package_description?.split('\r\n').map((part, index) => <React.Fragment key={index}>{part}<br /></React.Fragment>)}
          </p>
        </div>
      </div>
      <div className="flex justify-end">
        <Link
          to={`/healthCheckUpForm/${healthPackage._id}`}
          className="mt-2 md:px-12 py-2 border rounded-md btn-primary max-sm:text-xs"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};
export default HealthCheckCard;
