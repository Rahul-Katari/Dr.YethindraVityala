"use client"
import banner from "../../assets/images/banners/blogs.png";
import BreadCrumb from "../common/BreadCrumb";
import calender from "../../assets/images/calender-blog.png";
import profile from "../../assets/images/profile.png";
import latestBlog from "../../assets/images/latest-blogs.png";
import { useBlogData } from "../../controller/blogDataContext";
import DateFormat from "../DateFormat";
import AppointmentFormDetail from "./AppointmentFormDetail";
import Link from "next/link";
import '../../app/globals.css';
import { useEffect, useState } from "react";
import { ASSET_URL, getblogs } from "@/services/api";

export function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  return date.toLocaleString('en-US', options);
}

export const FormatHtml = ({ htmlString }) => {
  const createReactElements = (html) => {
      return <div dangerouslySetInnerHTML={{ __html: html }} />;
  };

  return <>{htmlString ? createReactElements(htmlString) : null}</>;
};

const BlogsDetail = ({blogid}) => {
  const breadCrumb = [
    { href: "/blogs", title: "blog" },
    { href: "", title: blogid },
  ];

  const [blog, setBlog] = useState(null);
  const [articles, setarticles] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const fetchedBlog = await getblogs(blogid); // Fetch the blog post by ID
              setBlog(fetchedBlog.data[0]);
          } catch (error) {
              console.error("Error fetching blog:", error);
          }
      };

      fetchData();
  }, [blogid]);

  useEffect(() => {
    const fetchBlogs = async () => {
        try {
            const response = await getblogs("", 5);
            if (response && response.data) {
                setarticles(response.data);
            }
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    };

    fetchBlogs();
}, []);


  return (
    <div>
      <div>
        <img className="w-full banner-border-bottom" src={banner.src} alt="banner" />
      </div>
      <div className="max-w-7xl container mb-4">
        <BreadCrumb linkData={breadCrumb} />
      </div>
      {/* <section>
        <h2 className="text-theme text-3xl">Blogs</h2>
      </section> */}
      <section>
        <div className="max-w-7xl m-auto mobile-gap-x mb-4">
          <h2 className="text-theme text-2xl font-semibold highlight-border highlight-border-left">
            {blog?.title}
          </h2>
          <div className="md:grid grid-cols-6 gap-6">
            <div className="col-span-4">
              <div className="flex items-center space-x-8 mb-6">
                <div className="flex items-center space-x-4">
                  <img src={calender.src} className="w-[14px]" />
                  <span>
                  {formatDate(blog?.date_created)}
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <img src={profile.src} className="w-[14px]" />
                  <p className="font-sf-ui text-sm font-normal text-black leading-[42.01px] text-left">{blog?.Author}</p>

                  {/* <span>{doctorData?.firstName ? doctorData?.firstName + " " + doctorData?.lastName : "Admin" }</span> */}
                </div>
              </div>
              <img src={ASSET_URL + blog?.Image} />
              <div className="mt-6 leading-7">
              <FormatHtml htmlString={blog?.description}/>
              </div>
            </div>
            <div className="col-span-2 max-sm:mt-5">
              <div>
                <AppointmentFormDetail />
              </div>
              <div className="p-4">
                <h2 className="text-header text-xl font-semibold highlight-border highlight-border-left">
                  Latest Blogs
                </h2>
                <div className="divide-y divide-slate-700">
                  {
                    articles?.map((blog, index) =>
                    (

                      <div className="" key={index} >
                        <Link
                          href={`/blogsDetail/${blog?.slug_name}`} className="flex py-4">
                          <div className="w-8/12">
                            <img
                              src={ASSET_URL + blog?.Image}
                              alt="latest blog image"
                              className=""
                            />
                          </div>
                          <div className="flex flex-col justify-between px-4">
                            <p>
                              {blog.title}
                            </p>
                            <div className="flex items-center space-x-5">
                              <div>
                                <img src={calender.src} className="w-[14px]" />
                              </div>
                              <DateFormat date={blog?.date_created} />
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default BlogsDetail;
