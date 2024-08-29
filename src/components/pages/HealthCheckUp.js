import BreadCrumb from "../common/BreadCrumb";
import banner from "../../assets/images/banners/checkup-packages.png";
import pack1 from "../../assets/images/health-package1.png";
import pack2 from "../../assets/images/health-package2.png";
import pack3 from "../../assets/images/health-package3.png";
import pack4 from "../../assets/images/health-package4.png";
import { Link } from "react-router-dom";
import HealthCheckCard from "./HealthCheckCard";
import useApiData from "../../controller/useApiData";
import { useEffect, useState } from "react";
const HealthCheckup = () => {
  const breadCrumb = [
    { href: "/", title: "home" },
    { href: "/heathCheckup", title: "health checkup packages" },
  ];
  const [packageData, setPackageData] = useState(null);
  // Fetch blog data from the API
  const { data: healthPackages, loading, error } = useApiData(
    "healthPackages?reqtype=api"
  );
  useEffect(() => {
    if (healthPackages) {
      setPackageData(healthPackages?.result?.data.packages);
    }
  }, [healthPackages]);
  return (
    <div>
      <div>
        <img src={banner} />
      </div>
      <BreadCrumb linkData={breadCrumb} />
      <section>
        <div className="max-w-5xl m-auto">
          <div className="md:grid grid-cols-2 gap-4">
            {packageData?.map((healthpackage) => {
              return <HealthCheckCard healthPackage={healthpackage} key={index}/>;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
export default HealthCheckup;
