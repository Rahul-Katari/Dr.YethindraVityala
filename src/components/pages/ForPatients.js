"use client"
import React from "react";
import { Tabs, Tab, TabScreen } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";
import banner from "../../assets/images/banners/for-visitors.png";
import AppointmentSchedule from "../AppointmentSchedule";
import BreadCrumb from "../common/BreadCrumb";

const breadCrumb = [
  { href: "/forPatients", title: "For Patients" },
];
const ForPatients = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const onTabClick = (e, index) => {
    setActiveTab(index);
  };
  return (
    <div className="facilities-main-div">
      <div>
        <img src={banner.src} className="w-full" />
      </div>
      <div className="max-w-6xl container">
        <BreadCrumb linkData={breadCrumb} />
      </div>
      <div className="max-w-6xl container mobile-gap-x">
        <Tabs
          className="flex justify-center"
          activeTab={activeTab}
          onTabClick={onTabClick}
          hideNavBtnsOnMobile={false}
        >
          <Tab className="rounded flex items-center gap-x-4 text-sm">
            Plan for visit
          </Tab>
          <Tab className="rounded flex items-center gap-x-4 text-sm">
            Admission Guide
          </Tab>
          <Tab className="rounded flex items-center gap-x-4 text-sm">
            Discharge guide
          </Tab>
          <Tab className="rounded flex items-center gap-x-4 text-sm">
            Insurance & TPA
          </Tab>
          <Tab className="rounded flex items-center gap-x-4 text-sm">
            Patient Rights & Responsibilities
          </Tab>
        </Tabs>
        <TabScreen>
          {activeTab === 0 && (
            <div>
              <h2 className="text-header text-xl font-semibold">For Patients</h2>
              <div className="border-bottom border border-header w-16 mb-6 "></div>
              <div className="leading-7 text-sm">
                <h2 className="">In-Patient</h2>
                <div className="">
                  <h3 className="">Your Hospital Stay / Accommodation</h3>
                  <div className="">
                    Getting into your room: Our guest relation executive will take you to the room and show all the amenities and facilities available in it. A ward nurse will visit you to take your complete medical history. You will be given an identification band or card with tag for identification purpose.
                  </div>
                  <h3 className="">Types of Rooms</h3>
                  <ul className="">
                    <li>
                      Common / Special Wards
                      <div>Common rooms are centrally air conditioned with 12 to 15 beds. A screen sliding curtain separates each bed – which is manually operated. Bedside food trolly, stool, chair, cupboard and Wi-Fi are available in the room.</div>
                    </li>
                    <li>
                      Semi Private / Twin Sharing Room
                      <div>Air-conditioned room with two adjustable beds for two patients with LED TV, Intercom and telephone for each patient. The room has two attendant’s couches, cupboard and intercom as well. A manually operated sliding screen type curtain separates each bed making it a private room.</div>
                    </li>
                    <li>
                      Private Room
                      <div>Air-conditioned room with adjustable bed patient and one bed for attender. The room accommodates two persons. The room has LED TV, wardrobe, kettle, Wi-Fi facility, Intercom with telephone.</div>
                    </li>
                    <li>
                      Deluxe Room
                      <div>Spaciously built air-conditioned deluxe rooms with ample provision for sunlight and ventilation. The room is furnished with adjustable patient bed, a sofa set, two chairs, LED TV, Internet (Wi-Fi), cupboards, intercom, and refrigerator.</div>
                    </li>
                    <li>
                      Super Deluxe Room
                      <div>Air-conditioned super deluxe spacious patient room with a separate lounge, sofas for visitors with complete comfort and privacy. Super deluxe room has the following amenities:
                        <ul className="list-disc ps-6">
                          <li>No. of beds: two – one for the patient and the other for patient attendant</li>
                          <li>Attached toilet-cum-bathroom</li>
                          <li>Sofa and chairs + Coffee table</li>
                          <li>Adjustable bed for patient and comfortable bed for attendant</li>
                          <li>Microwave oven and kettle</li>
                          <li>LED Television, telephone and small refrigerator</li>
                          <li>Internet access + Netflix, Intercom</li>
                        </ul>

                      </div>
                    </li>
                    <li>
                      Executive Suites
                      <div>Air-conditioned patient room, elegantly designed with a visitor room and lounge. The suite has the following amenities:
                        <ul className="list-disc ps-6">
                          <li>No. of beds/room: two – one room for the patient and the other room for visitors</li>
                          <li>Attached toilet-cum-bathroom</li>
                          <li>Sofa and four chairs + coffee table + kettle</li>
                          <li>Microwave oven</li>
                          <li>Electrically operated adjustable bed for patient + Attendant bed</li>
                          <li>LED Television and telephone and one refrigerator available</li>
                          <li>Internet access + Netflix, intercom</li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          {activeTab === 1 && (
            <div>
              <div className="mt-5">
                <h2 className="text-theme font-medium text-xl pb-4">
                  Diagnostic & Therapeutic
                </h2>
                <div>
                  <p>Welcome to Vasudeva Juvvadi Centre
                    Your trusted destination for comprehensive diagnostic and therapeutic services in Hyderabad.
                    Our centre is committed to providing high-quality medical care tailored to meet the diverse needs of our patients.</p>
                </div>

              </div>


              <div id="diagnostic-services" className="my-5">
                <h2 className="text-theme font-medium text-xl pb-4" >Diagnostic Services:</h2>
                <p>At Vasudeva Juvvadi Centre, we offer the best diagnostic services to accurately assess and diagnose various health conditions. Our state-of-the-art facilities and advanced medical technology ensure precise and reliable results. From routine blood tests and imaging studies to specialised diagnostics, our experienced team of healthcare professionals is dedicated to delivering timely and accurate diagnoses.</p>
                <h3 className="mt-4 font-semibold">Our diagnostic services include:</h3>
                <ul className="list-disc-default">
                  <li>Laboratory Testing: Comprehensive blood tests, urine analysis, and other laboratory investigations to assess various aspects of health and detect underlying medical conditions.</li>
                  <li>Imaging Studies: Advanced imaging modalities such as X-rays, ultrasound, CT scans, and MRI scans to visualise internal organs and tissues for diagnostic purposes.</li>
                  <li>Endoscopic Procedures: Minimally invasive procedures such as gastroscopy, colonoscopy, and bronchoscopy to examine the digestive tract, respiratory system, and other internal structures.</li>
                </ul>
              </div>
              <section id="therapeutic-services" className="my-5">
                <h2 className="text-theme font-medium text-xl pb-4">Therapeutic Services:</h2>
                <p>Besides diagnostic services, Vasudeva Juvvadi Centre offers a range of therapeutic interventions to manage and treat various medical conditions. Our skilled medical team utilises evidence-based treatment modalities and state-of-the-art technology to deliver effective therapeutic care.</p>
                <h3 className="mt-4 font-semibold">Our therapeutic services include:</h3>
                <ul className="list-disc-default">
                  <li>Medication Management: Personalised medication regimens tailored to address specific health concerns and manage chronic conditions.</li>
                  <li>Rehabilitation Services: Comprehensive rehabilitation programs, including physiotherapy, occupational therapy, and speech therapy, to promote recovery and improve functional abilities.</li>
                  <li>Interventional Procedures: Minimally invasive procedures such as joint injections, nerve blocks, and pain management techniques to alleviate discomfort and improve quality of life.</li>
                  <li>Counselling and Support Services: Individual and group counselling sessions, psychotherapy, and mental health support services to address emotional and psychological needs.</li>
                </ul>
              </section>
              <footer>
                <p>At Vasudeva Juvvadi Centre, we prioritise patient care and safety, ensuring that each individual receives personalised attention and compassionate care throughout their diagnostic and therapeutic journey. Contact us today to learn more about our services and schedule an appointment with our experienced healthcare team.</p>
              </footer>
            </div>
          )}
          {activeTab === 2 && (
            <div>
              <h2 className="text-theme font-medium text-xl pb-4">Pharmacy</h2>
              <p>
                Welcome to the Pharmacy at Vasudeva Juvvadi Centre, your trusted healthcare partner in Hyderabad. Our pharmacy is committed to providing convenient access to high-quality medications and healthcare products to meet your medical needs.
              </p>
              <p className="my-4">
                Conveniently located within our medical centre, our pharmacy offers a wide range of prescription and over-the-counter medications, ensuring that you have easy access to the medications prescribed by your healthcare provider. Our experienced pharmacists are dedicated to providing personalised service and expert guidance to help you understand your medications and achieve optimal health outcomes.
              </p>
              <p>
                At our pharmacy, we understand that each patient is unique, and we strive to tailor our services to meet your individual needs. Whether you have questions about your medications, need assistance managing multiple prescriptions, or are looking for advice on over-the-counter products, our friendly and knowledgeable staff are here to help.
              </p>
              <p className="my-4">
                In addition to prescription medications, our pharmacy also stocks a variety of healthcare products, including vitamins, supplements, first aid supplies, and personal care items. We are committed to offering competitively priced products without compromising on quality, ensuring that you receive the best value for your healthcare needs.
              </p>
              <p>
                At Vasudeva Juvvadi Centre Pharmacy, your health and well-being are our top priorities. Visit us today and experience the difference that personalised care and quality service can make in your healthcare journey.
              </p>
            </div>
          )}
           {activeTab === 3 && (
             <div className="p-8 bg-white text-gray-900">
             <h1 className="text-2xl font-bold mb-4">Insurance & TPA</h1>
             <p className="mb-4">
               At the practice of Dr. Vasudeva Juvvadi, we understand that navigating insurance and third-party administration (TPA) processes can be complex. Our goal is to make your experience, ensuring that you can focus on your health and recovery without unnecessary stress.
             </p>
       
             <h2 className="text-xl font-semibold mb-2">Accepted Insurance Providers</h2>
             <p className="mb-4">
               We work with several insurance providers to facilitate access to our orthopaedic services. Contact our office to check if your insurance plan is accepted, so that you fully benefit from your coverage. Our administrative team is available to help with any queries about your insurance.
             </p>
       
             <h2 className="text-xl font-semibold mb-2">Third-Party Administrators (TPA)</h2>
             <p className="mb-4">
               We also collaborate with several TPAs to ensure smooth processing of your claims. Our partnerships with multiple TPAs help streamline the process and provide you with the support needed to manage your healthcare claims efficiently.
             </p>
       
             <h2 className="text-xl font-semibold mb-2">Insurance and Billing Process</h2>
             <ul className="list-disc list-inside mb-4">
               <li className="mb-2">
                 <strong>Verification:</strong> Upon scheduling your appointment, our team will verify your insurance coverage and TPA details. This step ensures that we have all the necessary information to process your claims efficiently.
               </li>
               <li className="mb-2">
                 <strong>Pre-Authorization:</strong> For certain procedures and treatments, pre-authorization from your insurance provider may be required. Our administrative staff will assist you in obtaining the necessary approvals.
               </li>
               <li className="mb-2">
                 <strong>Claims Submission:</strong> We will submit your insurance claims directly to your provider or TPA on your behalf. Our team is experienced in managing the documentation and follow-up required for swift claim processing.
               </li>
               <li>
                 <strong>Patient Responsibility:</strong> After your insurance has processed the claim, any remaining balance, such as co-pays, deductibles, or non-covered services, will be the patient’s responsibility. Our billing department will provide a detailed statement and assist with any questions.
               </li>
             </ul>
       
             <h2 className="text-xl font-semibold mb-2">Financial Assistance</h2>
             <p className="mb-4">
               We believe that financial concerns should not hinder access to quality orthopaedic care. If you have questions about your coverage, or if you are experiencing financial difficulties, please speak with our billing department. We offer flexible payment options and can provide guidance on financial assistance programs that may be available to you.
             </p>
       
             <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
             <p>
               For any inquiries related to insurance, TPAs, or billing, please contact our administrative office at [contact number] or email us at [contact email]. Our dedicated team is here to assist you and ensure that your experience with us is as smooth and stress-free as possible.
             </p>
           </div>
          )}
           {activeTab === 4 && (
                <div className="p-8 bg-white text-gray-900">
                <h1 className="text-2xl font-bold mb-4">Patient Rights & Responsibilities</h1>
                <p className="mb-4">
                  At the practice of Dr. Vasudeva Juvvadi, we are committed to providing exceptional orthopaedic care in a respectful and supportive environment. Understanding your rights and responsibilities as a patient is crucial to achieving the best possible healthcare outcomes. This guide outlines what you can expect from us and what we ask of you in return.
                </p>
          
                <h2 className="text-xl font-semibold mb-2">Patient Rights</h2>
                <p className="mb-4">As a patient, you have the right to:</p>
                <ul className="list-disc list-inside mb-4">
                  <li className="mb-2">
                    <strong>Quality Care:</strong> Receive high-quality, respectful, and considerate care regardless of your age, gender, race, ethnicity, religion, or financial status.
                  </li>
                  <li className="mb-2">
                    <strong>Privacy and Confidentiality:</strong> Expect that your personal health information will be kept confidential and disclosed only with your consent or as required by law.
                  </li>
                  <li className="mb-2">
                    <strong>Information:</strong> Be informed about your diagnosis, treatment options, and prognosis in understandable terms. You have the right to ask questions and receive clear answers.
                  </li>
                  <li className="mb-2">
                    <strong>Informed Consent:</strong> Receive information necessary to give informed consent before any procedure or treatment. You have the right to know the potential risks, benefits, and alternatives.
                  </li>
                  <li className="mb-2">
                    <strong>Second Opinions:</strong> Seek a second opinion or consult with another specialist without fear of reprisal.
                  </li>
                  <li className="mb-2">
                    <strong>Participation in Care:</strong> Be actively involved in decisions regarding your healthcare plan and treatment options.
                  </li>
                  <li className="mb-2">
                    <strong>Refusal of Treatment:</strong> Refuse treatment to the extent permitted by law and be informed of the potential consequences of such decisions.
                  </li>
                  <li className="mb-2">
                    <strong>Complaints and Feedback:</strong> Voice complaints or provide feedback about your care without fear of discrimination or retaliation.
                  </li>
                </ul>
          
                <h2 className="text-xl font-semibold mb-2">Patient Responsibilities</h2>
                <p className="mb-4">As a patient, you have the responsibility to:</p>
                <ul className="list-disc list-inside mb-4">
                  <li className="mb-2">
                    <strong>Provide Information:</strong> Accurately and completely provide your health history, symptoms, medications, and any other relevant information to your healthcare providers.
                  </li>
                  <li className="mb-2">
                    <strong>Follow Instructions:</strong> Follow the treatment plan prescribed by your healthcare provider and inform them if you have difficulty understanding or following the instructions.
                  </li>
                  <li className="mb-2">
                    <strong>Keep Appointments:</strong> Attend scheduled appointments on time and notify the office as soon as possible if you need to reschedule or cancel.
                  </li>
                  <li className="mb-2">
                    <strong>Respect and Consideration:</strong> Show respect and consideration for other patients, visitors, and healthcare staff. This includes following the facility’s rules and regulations.
                  </li>
                  <li className="mb-2">
                    <strong>Financial Obligations:</strong> Fulfill financial responsibilities related to your care promptly. If you have any questions about your bill, contact our billing department for assistance.
                  </li>
                  <li className="mb-2">
                    <strong>Report Changes:</strong> Inform your healthcare provider about any changes in your condition or if you experience any unexpected issues during your treatment.
                  </li>
                  <li>
                    <strong>Understand Your Plan:</strong> Make an effort to understand your healthcare plan and ask questions if something is unclear. Your active participation is vital to your care.
                  </li>
                </ul>
          
                <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
                <p>
                  If you have any questions or concerns regarding your rights and responsibilities, contact our office at +91 8885544844 or email us at juvvadivasudeva@gmail.com. We are here to support you and ensure that your experience with us is positive and empowering.
                </p>
              </div>
          )}


        </TabScreen>
      </div>
      <div className="max-w-6xl container">
        <AppointmentSchedule />
      </div>
    </div>
  );
};

export default ForPatients;

