import { Link, useParams } from "react-router-dom";
import banner from "../../assets/images/banners/landing.png";
import bestGeneral from "../../assets/images/landing/best-general-surgeon.png";
import bestEndo from "../../assets/images/landing/best-endo.png";
import areasGeneral from "../../assets/images/landing/areas-general.png";
import areasEndo from "../../assets/images/landing/areas-endo.png";
import NewAppointments from "../banners/NewAppointments";
import KnowMore from "../home/KnowMore";
import whyChoose from "../../assets/images/landing/why-choose-us.png";
import DoctorServices from "../DoctorServices";
import BlogsSliderDetail from "../BlogsSliderDetail";
import Heading from "../common/Heading";
import advProc from "../../assets/images/landing/guarantee/adv-proc.png";
import shorterStay from "../../assets/images/landing/guarantee/stay.png";
import scarless from "../../assets/images/landing/guarantee/scarless-proc.png";
import quick from "../../assets/images/landing/guarantee/quick.png";
import care from "../../assets/images/landing/guarantee/affordable.png";
import SpecialitiesCard from "../home/SpecialitiesCard";
import NeedHelp from "../banners/NeedHelp";
import { useBlogData } from "../../controller/blogDataContext";
import { useEffect } from "react";
import AppointmentFormDetail from "./AppointmentFormDetail";
const guarantee = [
  { imgSrc: advProc, text: "Advanced Procedure" },
  { imgSrc: shorterStay, text: "Shorter Hospital Stay" },
  { imgSrc: scarless, text: "Scarless Procedure" },
  { imgSrc: quick, text: "Quick Recovery" },
  { imgSrc: care, text: "Affordable Care" },
];

const Landing = () => {
  const { doctorUrl } = useParams();
  const doctor = useBlogData()?.doctors.filter(
    (doctorDetail) => doctorDetail.urlname === doctorUrl
  )[0];
  const doctorId = doctor?._id;
  const services = doctor?.service;
  const testimonials = useBlogData()?.reviews.filter(
    (review) => review.doctorid === doctorId
  );
  const doctorBlogs = useBlogData()?.allblogs.filter(
    (blog) => blog.doctorid === doctorId
  );
  useEffect(() => { }, [doctor]);
  return (
    <div>
      <div className="relative">
        <img src={banner} className="w-full h-[600px]" />
        <div className="md:absolute m-4 rounded-lg p-8 top-[12%] bg-gradient-to-b from-[#07869B] via-[#07869B] to-[#0366AB] left-[10%]">
          <h2 className="text-[#FFF500] font-semibold text-3xl">
            {doctor?.department == 1 ? <>Best General Endocrinology <br />In Hyderabad</> : <>Advanced Laparoscopic and <br /> General Surgery in Hyderabad</>}
          </h2>
          {doctor?.department == 1 ? (
            <ul className="list-disc-default text-white space-y-4 ">
              <li>24+ Years of experience. 20,000+ patients treated</li>
              <li>Advanced 4k Laparoscopic unit</li>
              <li>Minimally Invasive procedure. No Stitches, No scars</li>
              <li>30 Minutes procedure. Back to work in 24 Hours</li>
              <li>All Insurances accepted, Cashless facility</li>
              <li>Top Laparoscopic surgeon for Minimally Invasive surgeries</li>
              <li>100% Success rate</li>
            </ul>
          ) : (
            <div className="text-white my-4 h-[200px]">
              <p>For comprehensive general physician care in </p>
              <p>Hyderabad, trust the expertise of Medicover </p>
              <p>Hospitals. Your health is our priority.</p>
            </div>
          )}
          <div className="flex justify-end">
            <Link
              to={"/bookAppointment"}
              className="bg-gradient-to-r from-[#FF744B] to-[#FF9D80] px-3 py-2 rounded-lg font-medium border border-white text-white"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </div>
      <section>
        <div className="max-w-7xl m-auto">
          <div className="md:grid  rounded-lg grid-cols-10 items-center">
            <div className="col-span-4 p-8 text-center">
              <h3 className="text-center text-2xl font-semibold ">
                Book a Consultation
              </h3>
              <p className="text-center my-3">
                Get a Second opinion from the most experienced
              </p>
              <p className="text-center my-3">
                consultant, Lady
                {doctor?.department == 1 ? 'Endocrinologist.' : 'general Surgeons.'}
              </p>
              <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum{" "}
              </p>
            </div>
            <div className="col-span-6 flex flex-col p-4 md:ps-10 ">
              <div className="">
                <AppointmentFormDetail details={doctor} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="md:grid grid-cols-12 m-4">
          <div className="col-span-5">
            <div>
            {doctor?.department == 1 ? <img src={bestEndo} className=" w-8/12" /> : <img src={bestGeneral} className=" w-8/12" />}

            </div>
          </div>
          <div className="col-span-7 md:pe-24">
            <h2 className="text-[#025CAF] text-3xl font-semibold">
              {doctor?.department === 1 ? 'Best Endocrinology' : 'Best General Surgeon'}
            </h2>
            <h2 className="text-[#025CAF] text-3xl font-semibold my-4">
              in Hyderabad
            </h2>
            <p className="text-content my-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p className="text-content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="md:grid grid-cols-12 m-4">
          <div className="col-span-7 md:ps-24">
            <h2 className="text-[#025CAF] text-3xl font-semibold">
              Areas of Treatments{" "}
            </h2>
            <div className="md:flex">
              {doctor?.department == 1 ? (
                <>
                  <ul className="list-disc-default max-sm:mb-0">
                    <li>Cholecystectomy (gallbladder removal)</li>
                    <li>Hernia</li>
                    <li>Gallbladder Stone</li>
                    <li>Colorectal Surgery</li>
                    <li>Fissure Surgery</li>
                    <li>Whipple Procedure</li>
                    <li>Gastrectomy</li>
                    <li>Hemorrhoids (Piles)</li>
                    <li>Lipoma</li>
                    <li>Thyroid surgery</li>
                    <li>Varicose Veins</li>
                  </ul>
                  <ul className="list-disc-default max-sm:mt-0">
                    <li>Tonsillectomy</li>
                    <li>Adenoidectomy</li>
                    <li>Breast Surgery</li>
                    <li>Appendectomy</li>
                    <li>Septoplasty</li>
                    <li>Lumbar Fusion</li>
                    <li>Gastrointestinal Surgery</li>
                    <li>Abdominal Wall Reconstruction</li>
                    <li>Tracheostomy</li>
                    <li>Bariatric Surgery</li>
                  </ul>
                </>
              ) : (
                <ul className="list-disc-default max-sm:mb-0">

                  <li>Thyroid Treatments - Hypothyroidism</li>
                  <li>Diabetes - Type 1 Diabetes, Type 2 Diabetes</li>
                  <li>Menopause</li>
                  <li>Pituitary Disorders</li>
                  <li>Osteoporosis</li>
                  <li>Adrenal Conditions</li>
                  <li>Endocrine Cancers</li>
                  <li>Endocrine-Related Heart Conditions</li>
                  <li>Hormone Disorders</li>
                  <li>Short Stature</li>
                  <li>Growth Hormone Deficiency</li>
                  <li>PCOS</li>
                  <li>Fertility Disorders</li>
                  <li>Obesity</li>
                  <li>Nutrition</li>
                </ul>
              )
              }
            </div>
          </div>
          <div className="col-span-5">
            <div>
            {doctor?.department == 1 ? <img src={areasEndo} className=" w-8/12" /> : <img src={areasGeneral} className=" w-8/12" />}
            </div>
          </div>
        </div>
      </section>
      <section>
        <NewAppointments />
      </section>
      <section>
        <KnowMore doctor={doctor} />
      </section>
      <section>
        <div className="bg-banner relative md:flex justify-end relative">
          <div>
            <img src={whyChoose} className="w-8/12" />
          </div>
          <div className="bg-gradient-to-b from-[#07879B] to-[#035FAE] text-white p-8 md:absolute left-[10%] top-[10%]">
            <h1 className="text-3xl font-semibold mb-4 ml-12">
              Why Choose Us?
            </h1>
            <ul className="space-y-6">
              <li className="flex items-center">
                <span className="text-[70px] font-semibold text-[#ffffff54] leading-4 me-6">
                  1
                </span>
                <div>
                  <h2 className="text-xl">
                    {doctor?.department === 1 ? 'Expert Endocrinologist' : 'Expert General and Laparoscopic Surgeon'}
                  </h2>
                  <p className="text-[10px]">
                    Lorem Ipsum is an excellent team of surgeons experienced
                    <br></br> in using laparoscopic surgical instruments.
                  </p>
                </div>
              </li>
              <li className="flex items-center">
                <span className="text-[70px] font-semibold text-[#ffffff54] leading-4 me-6">
                  2
                </span>
                <div>
                  <h2 className="text-xl">
                    Minimally Invasive <br></br>Surgeries:
                  </h2>
                  <p className="text-[10px]">
                    Advanced technology for the right treatment, quick <br></br>{" "}
                    recovery, and care.
                  </p>
                </div>
              </li>
              <li className="flex items-center">
                <span className="text-[70px] font-semibold text-[#ffffff54] leading-4 me-6">
                  3
                </span>
                <div>
                  <h2 className="text-xl">
                    Best Laparoscopy Clinic <br></br> in Hyderabad:
                  </h2>
                  <p className="text-[10px]">
                    Quality care, hassle-free process, best specialists &{" "}
                    <br></br> support team.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h2 className="text-3xl font-semibold text-[#025CAF] text-center mb-16">
            We Guarantee
          </h2>
          <div className="grid md:grid-cols-5 grid-cols-2 md:space-x-6 gap-6 justify-center max-w-7xl m-auto">
            {guarantee.map((guar, index) => {
              return (
                <SpecialitiesCard
                  imgSrc={guar.imgSrc}
                  key={index}
                  text1={guar.text}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-7xl m-auto">
          <h2 className="text-3xl font-semibold text-[#025CAF] text-center mb-16">
            Service
          </h2>
          <DoctorServices services={services} fromDetails={true}/>
        </div>
      </section>
      {/* testimonials start  */}
      <section id="detailsTestimonials">
        <div className="bg-banner py-12">
          <div className="max-w-6xl m-auto max-sm:mx-4">
            <Heading text={"Patient Testimonials"} left={true} />
            <BlogsSliderDetail
              card={"testimonial"}
              testimonials={testimonials}
            />
          </div>
        </div>
      </section>
      {/* blogs section  */}
      <section>
        <div className="detailPage-Blogs-Slider max-w-6xl max-sm:mx-4 m-auto">
          <Heading text={"Blogs"} left={true} />
          <BlogsSliderDetail
            card={"blog"}
            blogsData={doctorBlogs?.filter((blog) => blog.type === 0)}
          />
        </div>
      </section>
      <section>
        <div className="max-w-6xl m-auto max-sm:mx-4">
          <Heading text={"Regular News"} left={true} />
          <p>
            Get to know the information regarding our healthcare aspects to be
            able to get to better informed decisions. ..
          </p>
          <BlogsSliderDetail
            card={"videos"}
            blogsData={doctorBlogs?.filter((blog) => blog.type === 1)}
          />
        </div>
      </section>
      <NeedHelp />
    </div>
  );
};
export default Landing;
