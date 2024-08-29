"use client"
import { useEffect, useState } from "react";

import banner from "../../assets/images/banners/second-opinion.png";
import doctor from "../../assets/images/contact-doctor.png";
import robotic from "../../assets/images/secondopinion/robotic.png";
import clarified from "../../assets/images/secondopinion/clarified.png";
import general from "../../assets/images/secondopinion/general.png";
import validating from "../../assets/images/secondopinion/validating.png";
import sports from "../../assets/images/secondopinion/sports.png";
import joint from "../../assets/images/secondopinion/joint.png";
import satisfaction from "../../assets/images/secondopinion/satisfaction.png";
import alternative from "../../assets/images/secondopinion/alternative.png";
import contact from "../../assets/images/secondopinion/contact.png";
import bg from "../../assets/images/secondopinion/background.png";

import ApiService from "../../controller/apiService";
import { useBlogData } from "../../controller/blogDataContext";
import BreadCrumb from "../common/BreadCrumb";
import AppointmentModalOpener from "../AppointmentModalOpener";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { IconEye } from "@tabler/icons-react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SecondOpinion() {
  const [spec, setSpec] = useState();
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const needs = [
    {
      img: clarified,
      text: "Get Clarified on Uncertainties"
    },
    {
      img: validating,
      text: "Validating Diagnosis and Treatment"
    },
    {
      img: satisfaction,
      text: "Enhancing patient's Satisfaction"
    },
    {
      img: alternative,
      text: "Explore Alternative treatments"
    }
  ];
  const specialities = [
    {
      img: robotic,
      text: "Robotic Knee Replacement"
    },
    {
      img: joint,
      text: "Joint Replacement"
    },
    {
      img: sports,
      text: "Sports Medicine"
    },
    {
      img: general,
      text: "General orthopedics"
    }
  ];

  const handleSpecialityChange = (e) => {
    const selectedSpec = e.target.value;
    setSpec(selectedSpec);
    const specDoctors = doctors
    setFilteredDoctors(specDoctors);
  };
  const breadCrumb = [
    { href: "/secondOpinion", title: "Second Opinion" },
  ];
  useEffect(() => {
    setDoctors(doctorsData);
    if (!spec) setFilteredDoctors(doctorsData);
  }, [spec, filteredDoctors, doctorsData]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
      const submitResponse = await ApiService.post("submitcontact", data);

      if (submitResponse.data.result.status === 200) {
        window.alert(submitResponse.data.result.message);
        window.location.reload();
      } else window.alert("form not submitted");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <img src={banner.src} className="w-full " />
      </div>
      <div className="max-w-6xl container ">
        <BreadCrumb linkData={breadCrumb} />
      </div>
      <div className="grid md:grid-cols-5 max-w-6xl container  my-6 p-4 rounded-xl">
        <div className="col-span-2">
          <img src={contact.src} className="md:h-[500px] hidden md:block" />
        </div>
        <div className="col-span-3 shadow p-3">
          <h3 className="text-xl font-semibold text-theme mb-8 highlight-border highlight-border-left">
            Contact Us
          </h3>
          <p>Your Path to Health Starts Here.</p>
          <div>
            <form
              onSubmit={handleSubmit}
              method="POST"
              className="mx-auto mt-12"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <div>
                    <input
                      required
                      placeholder="First Name"
                      type="text"
                      name="firstname"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <input
                    required
                    placeholder="Phone Number"
                    type="tel"
                    name="phonenumber"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0  py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  />
                </div>
                <div>
                  <div>
                    <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    {/* <label for="speciality" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label> */}
                    <select
                      name="speciality"
                      required
                      onChange={handleSpecialityChange}
                      id="speciality"
                      className="ring-1 border-0 ring-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 placeholder:text-gray-400 dark:border-gray-600 dark:placeholder-gray-400  focus:ring-indigo-600"
                    >
                      <option value="">-Select Speciality-</option>
                      <option value="1"> Joint Replacement</option>
<option value="2"> General Orthopedics </option>
<option value="3"> Sports Medicine </option>
<option value="4"> Robotic Knee Replacement </option>

                    </select>
                  </div>
                </div>
                <div>
                  <div>
                    <select
                      name="doctor"
                      required
                      id="doctor"
                      value="62b590d1c9b6fa449205202c"
                      className="border-0 ring-gray-300 ring-1 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 placeholder:text-gray-400 dark:border-gray-600 dark:placeholder-gray-400   focus:ring-indigo-600"
                    >
                      <option value="">-Select Doctor-</option>
                      {doctors?.map((doctor) => {
                        return (
                          <option key={doctor?._id} value={doctor?._id}>
                            {doctor.firstName +" " + doctor.lastName}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                      defaultValue={""}
                      placeholder="message"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-5 flex justify-end">
                <button className="rounded-full bg-theme-gradient block px-20 py-2.5 text-center text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="max-w-6xl container text-center mobile-gap-x">
        <div className="mb-5">
          <h3 className="text-header md:text-xl mb-3">Transforming Healthcare with the Power of <span className="text-highlight">Dr. Vasudeva Juvvadi </span>Second Opinions</h3>
          <p className="text-[#454545] leading-6 max-w-5xl m-auto max-sm:text-xs">Transforming healthcare through Dr. Yethindra Vityala expert second opinions, ensuring patients receive informed guidance and personalized care. With a commitment to enhancing medical decisions, Dr. Juvvadi provides invaluable insights that empower patients to make informed choices about their health and treatment options.</p>
        </div>
        <div className="md:p-4 relative">
          <div className="absolute hidden md:block" >
            <img src={bg.src} />
          </div>
          <div className="z-[1] relative">
            <h3 className="text-header md:text-xl my-3">Why do you Need <span className="text-highlight">Second Opinion?</span></h3>
            <p className="text-[#454545] leading-6 max-w-5xl m-auto max-sm:text-xs">Seeking a second opinion is crucial for several reasons. It offers reassurance and validation of your diagnosis or treatment plan, especially for complex medical conditions. Additionally, it allows you to explore alternative approaches or therapies that may not have been considered initially. A second opinion can uncover new insights or confirm the necessity of a proposed procedure, ensuring you have comprehensive information to make informed decisions about your health. Ultimately, it empowers you to advocate for your well-being and seek the most suitable care tailored to your individual needs and preferences.
            </p>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-5 max-w-4xl m-auto mt-12">
              {
                needs.map((need, index) => {
                  return (
                    <div className="rounded-lg shadow-xl p-4 bg-white z-[1]" key={index}>
                      <div className="text-center flex justify-center my-5">
                        <img src={need.img.src} />
                      </div>
                      {need.text}
                    </div>
                  )
                })
              }
            </div>
            <div className="mt-5">
              <AppointmentModalOpener button={"Get An Appointment"} />
            </div>
          </div>
        </div>

      </div>

      <div className="bg-[#E0E4E7] my-10 py-10">
        <div className="max-w-6xl container mobile-gap-x">
          <h3 className="text-header text-center text-xl my-3 font-bold">Frequently Asked Questions</h3>
          <div>
            {/* <ol className="list-decimal grid grid-cols-2">
              <li>
                <Disclosure as="div" className="px-6 py-4 data-[open]:bg-white" defaultOpen={true}>
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className="font-medium">
                      What is your refund policy?
                    </span>
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 text-sm/5 ">
                    <p>
                      If you're unhappy with your purchase, we'll refund you in full.
                    </p>
                  </DisclosurePanel>
                </Disclosure>
              </li>
              <li>
                <Disclosure as="div" className="px-6 py-4 data-[open]:bg-white">
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className="font-medium">
                      What is your refund policy?
                    </span>
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 text-sm/5 ">
                    <p>
                      If you're unhappy with your purchase, we'll refund you in full.
                    </p>
                  </DisclosurePanel>
                </Disclosure>
              </li>
              <li>
                <Disclosure as="div" className="px-6 py-4 data-[open]:bg-white">
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className="font-medium">
                      What is your refund policy?
                    </span>
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 text-sm/5 ">
                    <p>
                      If you're unhappy with your purchase, we'll refund you in full.
                    </p>
                  </DisclosurePanel>
                </Disclosure>
              </li>
              <li>
                <Disclosure as="div" className="px-6 py-4 data-[open]:bg-white">
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className="font-medium">
                      What is your refund policy?
                    </span>
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 text-sm/5 ">
                    <p>
                      If you're unhappy with your purchase, we'll refund you in full.
                    </p>
                  </DisclosurePanel>
                </Disclosure>
              </li>
              <li>
                <Disclosure as="div" className="px-6 py-4 data-[open]:bg-white">
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className="font-medium">
                      What is your refund policy?
                    </span>
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 text-sm/5 ">
                    <p>
                      If you're unhappy with your purchase, we'll refund you in full.
                    </p>
                  </DisclosurePanel>
                </Disclosure>
              </li>
              <li>
                <Disclosure as="div" className="px-6 py-4 data-[open]:bg-white">
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className="font-medium">
                      What is your refund policy?
                    </span>
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 text-sm/5 ">
                    <p>
                      If you're unhappy with your purchase, we'll refund you in full.
                    </p>
                  </DisclosurePanel>
                </Disclosure>
              </li>
              <li>
                <Disclosure as="div" className="px-6 py-4 data-[open]:bg-white">
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className="font-medium">
                      What is your refund policy?
                    </span>
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 text-sm/5 ">
                    <p>
                      If you're unhappy with your purchase, we'll refund you in full.
                    </p>
                  </DisclosurePanel>
                </Disclosure>
              </li>
              <li>
                <Disclosure as="div" className="px-6 py-4 data-[open]:bg-white">
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className="font-medium">
                      What is your refund policy?
                    </span>
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 text-sm/5 ">
                    <p>
                      If you're unhappy with your purchase, we'll refund you in full.
                    </p>
                  </DisclosurePanel>
                </Disclosure>
              </li>
              <li>
                <Disclosure as="div" className="px-6 py-4 data-[open]:bg-white">
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className="font-medium">
                      What is your refund policy?
                    </span>
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 text-sm/5 ">
                    <p>
                      If you're unhappy with your purchase, we'll refund you in full.
                    </p>
                  </DisclosurePanel>
                </Disclosure>
              </li>
              <li>
                <Disclosure as="div" className="px-6 py-4 data-[open]:bg-white">
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className="font-medium">
                      What is your refund policy?
                    </span>
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 text-sm/5 ">
                    <p>
                      If you're unhappy with your purchase, we'll refund you in full.
                    </p>
                  </DisclosurePanel>
                </Disclosure>
              </li>
            </ol> */}
   <ol className="list-decimal grid md:grid-rows-5 md:grid-flow-col gap-4">
  {[
    {
      question: "Why should I consider getting a second opinion for knee or hip replacement?",
      answer: "A second opinion ensures you are making an informed decision about your health. It offers a fresh perspective, might reveal alternative treatments, and helps confirm that the recommended procedure aligns with your condition and goals. – Dr. Vasudeva Juvvadi"
    },
    {
      question: "How do I find a specialist for a second opinion?",
      answer: "Look for specialists with extensive experience in joint replacements. Use referrals from your current doctor, research leading medical institutions, and consider patient reviews. Finding a specialist with a strong reputation in the field can provide valuable insights. – Dr. Vasudeva Juvvadi"
    },
    {
      question: "What should I bring to my second opinion appointment?",
      answer: "Bring your complete medical records, including imaging studies, a list of medications, and previous surgical reports. Providing detailed information allows the specialist to make a comprehensive evaluation of your case. – Dr. Vasudeva Juvvadi"
    },
    {
      question: "What is robotic-assisted knee and hip replacement surgery?",
      answer: "Robotic-assisted surgery utilizes advanced technology to create a 3D model of your joint, allowing for precise surgical planning and execution. This approach aims to enhance accuracy in implant placement and improve overall outcomes. – Dr. Vasudeva Juvvadi"
    },
    {
      question: "What are the benefits of robotic-assisted surgery?",
      answer: "The benefits include greater surgical precision, potentially faster recovery times, reduced post-operative pain, and improved implant alignment, which may contribute to better long-term function. – Dr. Vasudeva Juvvadi"
    },
    {
      question: "Are there alternatives to knee replacement surgery?",
      answer: "Yes, alternatives include physical therapy, medications, lifestyle adjustments, and less invasive procedures like arthroscopy or partial knee replacement. It's important to explore these options during your second opinion to see if they might be suitable for your condition. – Dr. Vasudeva Juvvadi"
    },
    {
      question: "When is hip replacement surgery recommended?",
      answer: "Hip replacement is recommended for severe hip pain due to osteoarthritis, rheumatoid arthritis, or fractures that compromise mobility and quality of life. When conservative treatments fail, surgery can provide significant relief and improved function. – Dr. Vasudeva Juvvadi"
    },
    {
      question: "What can I expect during hip replacement recovery?",
      answer: "Recovery involves a structured rehabilitation program, gradual return to daily activities, and adherence to post-operative care instructions. Full recovery can take several months, but many patients notice significant improvements in pain and mobility early on. – Dr. Vasudeva Juvvadi"
    },
    {
      question: "What questions should I ask during my second opinion consultation?",
      answer: "Ask about the surgeon's experience, alternative treatments, expected outcomes, recovery timeline, risks, and the differences between traditional and robotic-assisted techniques. These questions provide clarity and help you make a well-informed decision. – Dr. Vasudeva Juvvadi"
    },
    {
      question: "What if the second opinion differs from the first?",
      answer: "If you receive differing opinions, consider discussing the differences with both doctors or seek a third opinion. Evaluate the explanations, risks, and benefits provided, and choose the approach that aligns with your personal preferences and health goals. – Dr. Vasudeva Juvvadi"
    }
  ].map((faq, index) => (
    <li key={index} className="row-span-1">
      <Disclosure as="div" className="px-6 data-[open]:py-4 data-[open]:bg-white md:mr-4" defaultOpen={index === 0}>
        <DisclosureButton className="group flex w-full items-center justify-between">
          <span className="text-left">{faq.question}</span>
        </DisclosureButton>
        <DisclosurePanel className="mt-2 text-sm/5">
          <p>{faq.answer}</p>
        </DisclosurePanel>
      </Disclosure>
    </li>
  ))}
</ol>


          </div>
          <div className="text-center mt-5 hidden">
            <button className="bg-theme-gradient2 text-white px-10 py-2 rounded-lg">Load More</button>
          </div>
        </div>
      </div>
      <div className="md:p-4 relative mt-10 max-w-6xl container text-center mobile-gap-x max-sm:py-4 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bg})` }} >
        {/* <div className="absolute" >
            <img src={bg} />
          </div> */}
        <div className="z-[1] relative">
          <h3 className="text-header text-xl my-3 font-bold">Get Second Opinion On Specialties?</h3>
          <p className="text-[#454545] leading-6 max-w-5xl m-auto">Seeking a second opinion in orthopedics provides patients with reassurance and additional insights into their musculoskeletal conditions. It ensures a thorough evaluation of treatment options such as joint replacements, sports injuries, or spine surgeries. Dr. Vasudeva Juvvadi, recognized as the best orthopedic surgeon in Hyderabad, offers expert guidance and personalized care, ensuring optimal outcomes.</p>
          <div className="grid grid-cols-2 mdgrid-cols-4 gap-5 max-w-4xl m-auto mt-12">
            {
              specialities.map((need, index) => {
                return (
                  <div className="rounded-lg shadow-xl p-4 bg-white z-[1]" key={index}>
                    <div className="text-center flex justify-center my-5">
                      <img src={need.img.src} />
                    </div>
                    {need.text}
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}
