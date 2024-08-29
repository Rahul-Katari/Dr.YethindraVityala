"use client"
import { Tab, TabScreen, Tabs } from "react-tabs-scrollable";
import banner from "../../assets/images/banners/blogs.png";
import BreadCrumb from "../common/BreadCrumb";
import BlogListCard from "../BlogListCard";
import { useEffect, useState } from "react";
import { useBlogData } from "../../controller/blogDataContext";
import { HomeLink } from "../header/Navbar";
import BlogsPageCard from "../BlogsPageCard";
import "react-tabs-scrollable/dist/rts.css";
import { getblogs } from "@/services/api";


const Blogs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const blogsData = useBlogData()?.allblogs?.filter((blog) => blog.type === 0);
  const [articles, setarticles] = useState([]);

  useEffect(() => {
    const fetchBlogs= async () => {
      try {
        const response = await getblogs("");
        if (response && response.data) {
          setarticles(response.data);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);
  const onTabClick = (e, index) => {
    setActiveTab(index);
  };
  const breadCrumb = [
    { href: "/blogs", title: "blog" },
  ];
  return (
    <div>
      <div>
        <img src={banner.src} alt="banner" className="w-full banner-border-bottom" />
      </div>
      <div className="max-w-7xl container">
        <BreadCrumb linkData={breadCrumb} />
      </div>
      <section>
        <div className="max-w-7xl m-auto mobile-gap-x">
          {/* <h2 className="text-theme text-2xl font-semibold highlight-border highlight-border-left">
            Blogs
          </h2> */}
          <div>
            <Tabs
              activeTab={activeTab}
              onTabClick={onTabClick}
              hideNavBtnsOnMobile={false}
              className="space-x-5"
            >
              {/* generating an array to loop through it  */}
              <Tab>All</Tab>
              <Tab>ENT</Tab>
              <Tab>GASTROENTEROLOGY</Tab>
            </Tabs>
            <TabScreen>
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mb-10">
                {articles?.filter((blog) => {
                    if (activeTab === 0) return true;
                    return blog.category === activeTab;
                  })?.map((blog) => (
                    <BlogsPageCard blogData={blog} key={blog.id} />
                  ))}
              </div>
            </TabScreen>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Blogs;
