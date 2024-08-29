import React, { useState } from "react";
import { useBlogData } from "../controller/blogDataContext";
import { IconChevronRight, IconPlayerPlayFilled } from "@tabler/icons-react";
import MonthFormat from "./MonthFormat";
import calender from "../assets/images/icons/calender.png"
import Link from "next/link";
import { ASSET_URL } from "@/services/api";
import FormatHtml from "./FormatHtml";
import DateFormat from "./DateFormat";

const BlogsPageCard = ({ blogData, slider }) => {
  const [isHovering, setIsHovering] = useState(false);
  const doctorData = useBlogData()?.doctors.filter(
    doctor => doctor._id == blogData.doctorid
  )[0];

  return (
    <Link href={blogData?.Image ? `/blogsDetail/${blogData?.slug_name}` : blogData?.video_link}
      target={blogData?.Image ? "" : "_blank"}
      className={`bg-white h-full p-3 rounded-lg shadow-blog flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 ${slider && "m-1"}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div>
        {blogData?.Image ? (
          <img
            src={ASSET_URL + blogData?.Image}
            alt="Medical Experts"
            className="w-full h-auto rounded-lg h-36"
          />
        ) : (
          <iframe
            className="w-full h-auto rounded-lg"
            src={blogData.video_link}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}

        <div className="mt-4 relative">
          <h1 className=" me-2 line-clamp-2 ">
            {blogData?.title}
          </h1>
          {isHovering && (
            <span className="absolute whitespace-normal px-2 py-1 bg-black text-white text-xs rounded-lg -mt-8 max-w-xs">
              {blogData?.title}
            </span>
          )}
        </div>
        <div className="line-clamp-3 my-3 text-[#606060] text-sm">
          <FormatHtml htmlString={blogData?.description} />
        </div>
      </div>
      <div className="flex items-center mt-4 justify-between">
        <p className="font-medium text-nowrap flex items-center text-gray-500">
          <img src={calender.src} className="w-4 me-2" />
          <DateFormat className="" date={blogData?.date_created} />
        </p>
        {blogData?.Image && (
          <div
            to={`/blogsDetail/${blogData?.id}`}
            className="text-nowrap flex items-center gap-3"
          >
            <IconPlayerPlayFilled className="text-highlight" size={16}></IconPlayerPlayFilled> <span className="text-[#002935] text-xs">Read More</span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default BlogsPageCard;
