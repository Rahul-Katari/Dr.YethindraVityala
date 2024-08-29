import Link from "next/link";
import React from "react";

const BlogCardInDetails = ({ title, desc, imgSrc, blogid }) => {
  return (
    <div className="rounded overflow-hidden m-4 p-4">
      <img className="w-full h-[150px]" src={imgSrc} alt="Medical Experts" />
      <div className="py-4">
        <div className="text-theme mb-2">{title}</div>
        <p className="text-content text-sm">{desc}</p>
      </div>
      <div className="pt-2 pb-2">
        <Link
          href={`/blogsDetail/${blogid}`}
          className="border border-black border-2 text-highlight py-1 px-2 text-xs rounded-full"
        >
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default BlogCardInDetails;
