import doctor from "../../assets/images/home/doctor.png";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AppointmentModalOpener from "../AppointmentModalOpener";

const TypingEffect = ({
  text,
  speed = 150,
  delay = 1000,
  loop = true,
  className = "",
}) => {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    const handleTyping = () => {
      if (!isDeleting && typedText.length === text.length) {
        if (loop) {
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, delay);
        }
      } else if (isDeleting && typedText.length === 0) {
        if (loop) {
          setIsDeleting(false);
        }
      } else {
        timer = setInterval(() => {
          setTypedText((currentText) =>
            isDeleting
              ? currentText.slice(0, -1)
              : currentText + text.charAt(currentText.length)
          );
        }, speed);
      }
    };

    handleTyping();
    return () => clearInterval(timer);
  }, [typedText, isDeleting, text, delay, speed, loop]);

  return <span className={`${className} typing`}>{typedText}</span>;
};
const BannerOne = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 items-center">
        <div className="">
          <div className="max-sm:space-y-3">
            <h1 className="text-content2 font-medium md:text-lg flex items-center space-x-2 uppercase">
              <div className="w-10 h-0.5 bg-[#054F59]"></div>
              <div>A highly skilled doctor </div>
            </h1>
            <TypingEffect
              text="with a wide range of talents!"
              speed={100}
              delay={2000}
              loop={false}
              className="font-semibold md:text-4xl text-xl"
            />
            <h3 className="md:text-4xl text-xl font-semibold"></h3>
            <div className="md:hidden">
            <Image src={doctor} width={500} height={300} />
            <Image src={doctor.src} width={500} height={300} />
            </div>
            <h2 className="md:text-4xl text-xl font-semibold text-highlight md:mt-5">
            Dr. Yethindra Vityala
            </h2>
            <div className="space-y-2 text-content2 text-xs mt-2">
              <p>etiology, treatment, prevention</p>
            </div>
          </div>
          {/* <div className="flex max-sm:flex-col mt-5 text-content3 text-sm gap-4 ">
            <div> */}
              {/* <AppointmentModalOpener button={"Book An Appointment"} /> */}
              {/* <Link
                href={"/bookAppointment"}
                className="rounded px-4 py-2 focus:outline-none btn-highlight flex shadow-3xl whitespace-nowrap items-center space-x-3 hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                Book an Appointment
              </Link>
            </div>
            <div>
              <Link
                href={"tel:081065 25621"}
                className="bg-[#39657D] text-white rounded px-4 py-2 focus:outline-none flex shadow-3xl items-center whitespace-nowrap  space-x-3 hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                Call Now
              </Link>
            </div>
          </div> */}
        </div>
        <div className="max-md:hidden">
          <Image src={doctor} width={500} height={300} />
        </div>
      </div>
    </>
  );
};
export default BannerOne;
