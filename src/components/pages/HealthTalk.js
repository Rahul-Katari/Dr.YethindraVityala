"use client"
import BreadCrumb from "../common/BreadCrumb";
import banner from "../../assets/images/banners/healthTalk.png";
import { useEffect, useState } from "react";
import BlogsPageCard from "../BlogsPageCard";
import { getHealthVideos } from "@/services/api";
import { IconSearch } from "@tabler/icons-react";

const breadCrumb = [
  { href: "/healthTalk", title: "Health Talk" },
];
const HealthTalk = () => {
  const [doctor, setDoctor] = useState()
  const handleDoctorsChange = (e) => {
    const selectedValue = e.target.value;
    setDoctor(selectedValue);
    selectedValue ? setFilteredTalks(healthtalks.filter((talk) => talk.Doctor === selectedValue)) : setFilteredTalks(healthtalks);
  };
  const handleSearch = (e) => {
    const searchTerm = e.target.value.trim().toLowerCase();
    if (doctor)
      setFilteredTalks(healthtalks.filter((talk) => talk.Doctor === doctor && talk.title.trim().toLowerCase().includes(searchTerm)));
    else
      setFilteredTalks(healthtalks.filter((talk) => talk.title.trim().toLowerCase().includes(searchTerm)))
  }

  const [loading, setLoading] = useState(true);
  const [healthtalks, setHealthtalks] = useState([]);
  const [filteredTalks, setFilteredTalks] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getHealthVideos("");
        if (response && response.data) {
          setHealthtalks(response.data);
          setFilteredTalks(response.data); // Initialize filtered talks
          console.log(response.data);
        }
      } catch (error) {
        console.error('Error fetching Health talks:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {

  }, [filteredTalks])

  // useEffect(() => {
  //   if (doctors) {
  //     // Extract name and id from each doctor object and create a new array
  //     const namesAndIds = doctors.map((doctor) => ({
  //       name: `Dr. ${doctor.firstName} ${doctor.lastName}`,
  //       value: doctor._id,
  //     }));
  //     // Update the state with the array of doctor names and ids
  //     setDoctorVideos(namesAndIds);
  //     setvideosToShow(namesAndIds);
  //     setVideosData(videos);
  //   }
  // }, [doctors]);
  // useEffect(() => {
  //   setselectedVideos(videosToShow[0]?.value);
  // }, [videosData]);

  // if (loading) return <div>Loading...</div>;
  return (
    <div>
      <div>
        <img src={banner.src} alt="banner" className="w-full banner-border-bottom" />
      </div>
      <div className="container max-w-7xl mobile-gap-x">
        <BreadCrumb linkData={breadCrumb} />
      </div>
      <section>
        <div className="max-w-7xl container mobile-gap-x mb-10">
          <div className="md:grid md:grid-cols-5 mb-5 md:gap-10 max-sm:space-y-5">
            <div className="col-span-3 border rounded-lg relative shadow">
              <input className="ps-5 py-1 rounded-lg w-full" placeholder="Search Doctor Talk" onInput={handleSearch} />
              <IconSearch className="absolute right-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="col-span-2">
              <select className=" border rounded-lg shadow px-2 py-1 w-full" onChange={handleDoctorsChange}>
                <option value="">-Select Doctor-</option>
                <option value="1">Dr. Vijaya Lakshmi</option>
                <option value="2">Dr. Vijay Kumar</option>
              </select>
            </div>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
            {filteredTalks
              .map((video, index) => {
                return (
                  <div key={index}>
                    <BlogsPageCard blogData={video} />
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
};
export default HealthTalk;
