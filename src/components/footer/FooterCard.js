import Link from "next/link";
import React from "react";

const FooterCard = ({
  iconSrc,
  title,
  description1,
  description2,
  description3,
  description4,
  timing1,
  timing2,
  index,
  href,
  hrefName,
}) => {
  return (
    <div
      className={`my-2 md:my-8 text-center space-y-4 flex flex-col items-center ${index < 1 ? "md:border-r border-[#99999999] border-dashed" : ""
        }`}
    >
      <div className="bg-footer-highlight inline-block rounded-full p-2 mb-3 text-white">
        <img src={iconSrc.src} className="h-7 w-7 m-1" />
      </div>
      {href ? (
        <Link href={href} className="hover:text-highlight">
          <div className="w-fit mx-auto">
            <div className="font-medium text-xl md:highlight-border">{title}</div>
            <p className="text-end">{description1}</p>
          </div>
          <div className="border-highlight w-28 h-1 border-b text-center mx-auto"></div>
          <div className="text-sm mt-4">
            <p className={`${description3 ? "" : ""}`}>{description2}</p>
            {description3 ? <p className="">{description3}</p> : ""}
            {description4 ? <p className="text-gray-500 ">{description4}</p> : ""}
          </div>
        </Link>
      ) : (
        <div>
          <div className="font-medium text-xl md:highlight-border w-fit">
            {title}
          </div>
          <p className="text-end">{description1}</p>
          <div className="border-highlight w-28 h-1 border-b text-center mx-auto"></div>
          <div className="text-sm">
            <p className={`${description3 ? "" : ""}`}>{description2}</p>
            {description3 ? <p className="">{description3}</p> : ""}
            {description4 ? <p className="text-gray-500 ">{description4}</p> : ""}
          </div>
        </div>

      )}

      {timing1 ? (
        <div
          className={
            timing2
              ? "border border-white text-sm inline-flex rounded-full md:px-8 px-4 py-3 mt-2"
              : "items-center border border-white text-sm inline-flex rounded-full md:px-8 px-4 py-3"
          }
        >
          <div className="text-[#FF744B] me-2">Timing : </div>
          <div className="text-left font-medium">
            <div>{timing1}</div>
            <div>{timing2}</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default FooterCard;
