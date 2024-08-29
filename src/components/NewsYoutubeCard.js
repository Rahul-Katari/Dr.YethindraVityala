import React from "react";
import DateFormat from "./DateFormat";

const NewsYoutubeCard = ({ imgSrc, date, title }) => {
  return (
    <div className=" rounded-lg shadow-md m-4 max-sm:ms-0 text-[#9D9D9D] font-medium text-xs">
      {/* <img className="w-full h-64 object-cover rounded-lg" src="thumbnail.jpg" alt="Healthcare video" /> */}
      <div className="w-full rounded-t-lg">
        <iframe
          className="w-full rounded-t-lg"
          src={imgSrc}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-4">
        <h2 className="text-xs text-[#07879A]">{title}</h2>
        <p className="mt-2">0</p>
        <div className="flex justify-between">
          <p>
            <DateFormat date={date} />
          </p>
          <p>Play</p>
        </div>
      </div>
    </div>
  );
};

export default NewsYoutubeCard;
