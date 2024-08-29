"use client"
import BreadCrumb from "../common/BreadCrumb";
import banner from "../../assets/images/banners/healthTalk.png";
import { useEffect, useState } from "react";
import BlogsPageCard from "../BlogsPageCard";
import { getHealthVideos } from "@/services/api";

const breadCrumb = [
    { href: "/healthTalk", title: "Health Talk" },
];
const HealthTalkNew = () => {
    const [doctor, setDoctor] = useState()
    const defaultDoctors = [
        { name: "Dr. Vijaya lakshmi", value: 1 },
        { name: "Dr. Vijay Kumar", value: 2 },
    ];
    const [doctors, setDoctors] = useState(defaultDoctors);
    const [healthtalks, setHealthtalks] = useState([]);
    const [filteredTalks, setFilteredTalks] = useState([]);

    const handleVideoTypeChange = (event) => {
        const selectedValue = event.target.value;
        setFilteredTalks(healthtalks?.filter(healthtalk => healthtalk.category === selectedValue))
        if (selectedValue === "2")
            setDoctors([]);
        else {
            setDoctors(defaultDoctors);
            setFilteredTalks(filteredTalks?.filter(healthtalk => healthtalk.Doctor === "1" && healthtalk.category === selectedValue));
        }
    };
    const handleDoctorsChange = (e) => {
        const selectedValue = e.target.value;
        setDoctor(selectedValue);
        selectedValue ? setFilteredTalks(healthtalks.filter((talk) => talk.Doctor === selectedValue)) : setFilteredTalks(healthtalks);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getHealthVideos("");
                if (response && response.data) {
                    setHealthtalks(response.data);
                    setFilteredTalks(response.data.filter(data => data.category === "1" && data.doctor === 1)); // Initialize filtered talks
                    console.log(response.data);
                }
            } catch (error) {
                console.error('Error fetching Health talks:', error);
            }
        };

        fetchData();
    }, []);
    useEffect(() => {

    }, [filteredTalks, doctors])

    return (
        <div>
            <div>
                <img src={banner.src} alt="banner" className="w-full banner-border-bottom" />
            </div>
            <div className="container max-w-7xl mobile-gap-x">
                <BreadCrumb linkData={breadCrumb} />
            </div>
            <section>
                <div className="flex justify-center">
                    <div className="grid md:grid-cols-3 grid-cols-2 gap-3 bg-[#F2F8F7] items-center inline-flex">
                        <div className="bg-highlight text-white p-3 max-sm:col-span-2">
                            SORT ARTICLES BY
                        </div>
                        <div>
                            <select
                                onChange={handleVideoTypeChange}
                                className=" md:w-[250px] border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full my-2 md:py-1 py-2 ps-2 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 md:mx-3"
                            >
                                <option value="1">Doctors Videos</option>
                                <option value="2">Patients Testimonials</option>
                            </select>
                        </div>
                        <div>
                            <select
                                onChange={handleDoctorsChange}
                                className=" md:w-[250px] border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full my-2 md:py-1 py-2 ps-2 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 md:mx-3"
                            >
                                {doctors.map((option, index) => {
                                    return (
                                        <option
                                            key={index}
                                            value={option.value}
                                        >
                                            {option.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                </div>
            </section>
            <section className="my-10">
                <div className="max-w-7xl container mobile-gap-x">
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                        {filteredTalks.map((video, index) => {
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
export default HealthTalkNew;