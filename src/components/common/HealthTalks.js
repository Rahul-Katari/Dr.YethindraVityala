import Heading from "./Heading";
import calIcon from "../../assets/images/icons/calender.png";
import icon from "../../assets/images/healthTalk.png";

import logo from "../../assets/images/logo.png"
import HealthTalksTabs from "../home/HealthTalksTabs";
import { useEffect, useState } from "react";
import { useBlogData } from "@/controller/blogDataContext";
import Image from "next/image";
import DateFormat from "../DateFormat";
import { getHealthVideos } from "@/services/api";

const HealthTalks = () => {
  const [title, setTitle] = useState();
  const [loading, setLoading] = useState(true);
  const [mainVideo, setMainVideo] = useState([]);
  const [healthtalks, setHealthtalks] = useState([]);
  const updateMainVideo = (video) => {
    setMainVideo(video);
  };
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getHealthVideos("");
        if (response && response.data) {
          setHealthtalks(response.data);
        }
      } catch (error) {
        console.error("Error fetching Health talks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    setMainVideo(healthtalks[0]);
  }, [healthtalks]);
  return (
    <section className="mb-0">
      <div className="bg-[#F2FDFF] md:p-16 max-sm:py-8 mobile-gap-x">
        <div className="max-w-7xl container">
          <Heading text={" Talks"} center={true} />
          <div className="md:grid lg:grid-cols-12 md:gap-4 gap-10 items-center">
            <div className="col-span-3 xl:pe-6 xl:ps-10 lg:ps-4 mx-4 md:mx-0 max-sm:hidden">
              <img src={logo.src} className="m-auto ml-0" />
              {/* <h3 className="md:text-2xl text-xl font-semibold py-3">Connect with <br/> Dr. Yethindra Vityala</h3> */}
            {/* <p className="mb-2">Connect with Dr. Yethindra Vityala</p> */}
            </div>
          <div className="col-span-9">
            {/* <h2 className="font-bold text-2xl">{mainVideo?.title}</h2> */}
            {/* <div className="flex space-x-3 md:my-6 my-2">
                <p className="text-gray-600 text-nowrap flex items-center space-x-2 text-xs">
                  <Image src={icon.src} width={16} height={20} />
                  <span>
                  {mainVideo?.Doctor === "1" ? "Dr. Vijaya Lakshmi" : "Dr. Vijay Kumar"}
                  </span>
                </p>
                <span className="ps-5">|</span>
                <p className="text-gray-600 text-nowrap flex items-center space-x-2 text-xs">
                  <Image src={calIcon.src} width={16} height={20} />
                  <DateFormat date={mainVideo?.date_created} />
                </p>
              </div> */}
            <iframe
              className=" max-sm:h-[200px] h-[500px] w-full rounded border-4 border-primary"
              src='https://www.youtube.com/embed/nT_mpcBYLgU?si=dW0kS76rR_5xFC3q'
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          {/* <div className="col-span-4 max-md:mt-4">
            <HealthTalksTabs
              videos={healthtalks}
              onSelectVideo={updateMainVideo}
            />
          </div> */}
        </div>
      </div>
    </div>
    </section >
  );
};
export default HealthTalks;
