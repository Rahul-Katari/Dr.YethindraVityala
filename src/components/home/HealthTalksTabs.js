import React from "react";
import { Tab, TabScreen, Tabs } from "react-tabs-scrollable";
import medicalExperts from "../../assets/images/home/medical-experts.png";
import calIcon from "../../assets/images/icons/calender.png";
import icon from "../../assets/images/healthTalk.png";

import { useBlogData } from "../../controller/blogDataContext";
import DateFormat from "../DateFormat";
import Image from "next/image";
import MoreBtn from "../common/MoreBtn";
function getVideoIdFromEmbedLink(embedLink) {
  // Regular expression to match the video ID
  var regex = /(?:\/|%3D|v=|vi=)([0-9A-z-_]{11})(?:[\S]+)?/i;

  // Extract video ID using the regular expression
  var match = embedLink?.match(regex);

  // Check if a match is found
  if (match && match[1]) {
    return match[1];
  } else {
    return null;
  }
}
const VideosList = ({ videos, onSelectVideo }) => {
  const playMainVideo = (video) => {
    onSelectVideo(video);
  };

  return (
    <div className="mt-0 space-y-3">
      {videos?.map((video) => {
        return (
          <button key={video.Doctor} onClick={() => playMainVideo(video)} >
            <div className="flex items-center" data-aos="fade-up">
              <img
                className="w-[70px] h-[70px] rounded-full"
                src={`https://img.youtube.com/vi/${getVideoIdFromEmbedLink(
                  video.video_link
                )}/0.jpg`}
              />
              <div className="space-y-2 ps-4">
                <p className="text-[#222F66] line-clamp-3 text-left hover:text-navHighlight" >
                  {video.title}
                </p>
                <div className="flex space-x-8">
                  <p className="text-gray-600 text-nowrap flex items-center space-x-2 text-xs">
                    <Image src={icon.src} width={16} height={20} />
                    <span>
                      {video?.Doctor === "1"
                        ? "Dr. Vijaya Lakshmi"
                        : "Dr. Vijay Kumar"}
                    </span>
                  </p>
                  <p className="text-gray-600 text-nowrap flex items-center space-x-2 text-xs">
                    <Image src={calIcon.src} width={16} height={20} />
                    <DateFormat date={video?.date_created} />
                  </p>
                </div>
              </div>
            </div>
          </button>
        );
      })}
      {/* <MoreBtn align={"end"} btn={"highlight"} btnText={"View All"} href={"/healthTalk"} /> */}
    </div>
  );
};
const HealthTalksTabs = ({ videos, onSelectVideo }) => {
  const [activeTab, setActiveTab] = React.useState(0);

  const onTabClick = (e, index) => {
    setActiveTab(index);
  };
  // const videos = useBlogData()?.allblogs.filter((blog) => blog.type === 1);
  return (
    <div className="health-talk-tabs">
      <Tabs
        activeTab={activeTab}
        onTabClick={onTabClick}
        hideNavBtnsOnMobile={false}
        className="md:mb-20 hidden"
      >
        <Tab className="text-sm px-0">All</Tab>
        <Tab className="text-sm">Featured</Tab>
        <Tab className="text-sm">Latest</Tab>
      </Tabs>

      <TabScreen>
        {activeTab === 0 && (
          <VideosList
            videos={videos?.slice(0, 4)}
            onSelectVideo={onSelectVideo}
          />
        )}
        {activeTab === 1 && (
          <VideosList
            videos={videos?.slice(4, 8)}
            onSelectVideo={onSelectVideo}
          />
        )}
        {activeTab === 2 && (
          <VideosList
            videos={videos?.slice(8, 12)}
            onSelectVideo={onSelectVideo}
          />
        )}
      </TabScreen>
    </div>
  );
};
export default HealthTalksTabs;
