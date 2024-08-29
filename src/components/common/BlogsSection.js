import Image from "next/image";
import Heading from "./Heading";
import BlogsSlider from "../BlogsSliderHome";

import blog from "../../assets/images/home/blogs.png";
import { useEffect, useState } from "react";
import { getblogs } from "@/services/api";

const BlogsSection = () => {
  const [blogs, setBlogs] = useState();
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await getblogs("");
        if (response && response.data) {
          setBlogs(response.data);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);
  useEffect(() => {}, [blogs]);
  return (
    <div className="bg-[#F2FDFF]">
      <div
        className="md:pb-4 pt-8 blogs flex flex-col justify-center container max-w-7xl mobile-gap-x overflow-hidden"
        id="homeBlogs"
      >
        <div>
          <Heading text={"Blogs"} center={true} />
          <p className="mb-16 text-center font-medium">Insightful blogs on health, wellness, and medical advancements.</p>
          <div className="lg:grid xl:grid-cols-12 lg:grid-cols-8 grid-cols-8 justify-end items-center">
            {/* <div className="xl:col-span-3 col-span-4">
              <Image width={350} height={400} src={blog.src} />
            </div> */}
            <div className="xl:col-span-12 lg:col-span-8 col-span-8">
              <BlogsSlider slides={blogs} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogsSection;
