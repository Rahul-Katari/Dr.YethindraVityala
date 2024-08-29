"use client";

import React from "react";
import banner from "../../assets/images/banners/patientsVisitors.png";
import { Tabs, Tab, TabScreen } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";
import BreadCrumb from "../common/BreadCrumb";
import AppointmentSchedule from "../AppointmentSchedule";
import Heading from "../common/Heading";

const breadCrumb = [{ href: "/patientsVisitors", title: "For Patients" }];
const PatientsVisitors = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const onTabClick = (e, index) => {
    setActiveTab(index);
  };
  return (
    <div>
      <div>
        <img
          src={banner.src}
          alt="banner"
          className="w-full banner-border-bottom"
        />
      </div>
      {/* <div className="max-w-6xl container">
        <BreadCrumb linkData={breadCrumb} />
      </div> */}
      <div className="patients-visitors max-w-7xl container">
        <Tabs
          className="flex justify-center"
          activeTab={activeTab}
          onTabClick={onTabClick}
          hideNavBtnsOnMobile={false}
        >
          <Tab>Plan For Visit</Tab>
          <Tab>Admission Guide</Tab>
          <Tab>Insurance & TPA</Tab>
          <Tab>Discharge guide</Tab>
          <Tab>Patient Rights & Responsibilities</Tab>
        </Tabs>
        <TabScreen className="max-sm:m-4">
          {activeTab === 0 && (
            <div className="container mx-auto p-4">
              <Heading text={"Plan For Visit"} center={true} />
              <div className="leading-7">
                     <p className="text-base mb-4"> To ensure a smooth visit to Dr. Yethindra Vityala ENT and Gastro Liver Clinics, please plan ahead by following these steps: </p>
                        <ul className="list-disc ps-6">
                          <li>
                          <span className="font-semibold">Schedule an Appointment: </span> Call our clinic or use our online booking system to schedule your visit with Dr. Vijayalakshmi or Dr. Vijay Kumar.
                          </li>
                          <li className="my-3"><span className="font-semibold">Prepare Medical Records: </span> Bring any relevant medical records, test results, and a list of current medications to your appointment.
                          </li>
                          <li><span className="font-semibold">Arrive Early: </span> Arrive at least 15 minutes before your scheduled appointment time to complete any necessary paperwork.
                          </li>
                          <li className="my-3"><span className="font-semibold">Bring Identification: </span> Bring a valid ID and your insurance card if applicable.</li>
                        </ul>
              </div>
            </div>
          )}
          {activeTab === 1 && (
            <div className="my-5 space-y-2">
              <Heading
                text={"Admission Guide"}
                center={true}
              />
              <div className="leading-7">
                     <p className="text-base mb-4"> If you need to be admitted to our clinic for a procedure or treatment: </p>
                        <ul className="list-disc ps-6">
                          <li>
                          <span className="font-semibold">Admission Process: </span> Our staff will guide you through the admission process, including filling out necessary forms and providing consent for treatment.
                          </li>
                          <li className="my-3"><span className="font-semibold">Pre-Admission Testing:  </span> Some procedures may require pre-admission tests. You will be informed of any such requirements prior to your visit.</li>
                          <li><span className="font-semibold">What to Bring: </span> Bring comfortable clothing, personal hygiene items, and any prescribed medications.
                          </li>
                        </ul>
              </div>
            </div>
          )}
          {activeTab === 2 && (
            <div className="my-5 space-y-2 text-content">
              <Heading
                text={"Insurance & TPA (Third Party Administrator)"}
                center={true}
              />
              <div className="leading-7">
                     <p className="text-base mb-4"> We accept a variety of insurance plans and Third-Party Administrators (TPAs): </p>
                        <ul className="list-disc ps-6">
                          <li>
                          <span className="font-semibold">Insurance Verification: </span> Contact our billing department to verify your insurance coverage before your visit. We will assist with claims and paperwork as needed.
                          </li>
                          <li className="my-3"><span className="font-semibold">TPA Coordination:  </span> If using a TPA, ensure that all necessary approvals are obtained prior to your visit. </li>
                        </ul>
              </div>
            </div>
          )}
          {activeTab === 3 && (
            <div className="my-5 space-y-2 text-content">
              <Heading text={"Discharge Guide"} center={true} />

              <div className="leading-7">
                     <p className="text-base mb-4"> Upon discharge from our clinic: </p>
                        <ul className="list-disc ps-6">
                          <li>
                          <span className="font-semibold">Discharge Instructions:  </span> You will receive detailed discharge instructions from your doctor or nurse. Follow these instructions carefully to ensure proper recovery.
                          </li>
                          <li className="my-3"><span className="font-semibold">Follow-Up Appointments:</span> Schedule any necessary follow-up appointments before leaving the clinic.
                          </li>
                          <li className="my-3"><span className="font-semibold">Medication: </span> If prescribed medication, ensure you understand the dosage and administration instructions.
                          </li>
                        </ul>
              </div>
            </div>
          )}
          {activeTab === 4 && (
            <div className="my-5 space-y-2 text-content">
              <Heading text={"Patient Rights & Responsibilities"} center={true} />

              <div className="leading-7">
                     <p className="text-base mb-4">At Dr. Yethindra Vityala ENT and Gastro Liver Clinics, we are committed to respecting and upholding your rights:
                     </p>
                        <ul className="list-disc ps-6">
                          <li>
                          <span className="font-semibold">Patient Rights:   </span> You have the right to receive respectful, high-quality care and to be informed about your treatment options. You can also expect privacy and confidentiality regarding your medical information.
                          </li>
                          <li className="my-3"><span className="font-semibold">Patient Responsibilities: </span> We ask that you provide accurate information about your health and follow treatment plans as prescribed. Respect the clinic&apos;s policies and other patients&apos; privacy during your visit.
                          </li>
                        </ul>
                        <p>For any additional information or assistance, our staff is here to support you. Your comfort and well-being are our top priorities.
                        </p>
              </div>
            </div>
          )}
        </TabScreen>
      </div>
      <div className="max-w-6xl container">
        {/* <AppointmentSchedule /> */}
      </div>
    </div>
  );
};
export default PatientsVisitors;
