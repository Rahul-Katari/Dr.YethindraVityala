import React, { useEffect, useRef, useState } from 'react';
import onloadImage from '../assets/images/onloadImage.jpg';
import location from "../assets/images/icons/location.png";

const DoctorPopup = ({ onClose }) => {
    const modalRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    const handleFindDoctor = () => {
        window.location.href = '/ourDoctors';
    };

    const handleBookAppointment = () => {
        window.location.href = '/bookAppointment';
    };

    const handleEnquiry = () => {
        window.open('tel:08106525621');
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-10">
            <div ref={modalRef} className="bg-white rounded-lg shadow-lg max-w-md w-full">
                <div className="relative">
                    <img
                        src={onloadImage.src}
                        alt="Medical professional on phone"
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 bg-white w-[30px] h-[30px] rounded-full hover:bg-gray-200 flex items-center justify-center"
                    >
                        <span className="text-gray-800 text-xl">&times;</span>
                    </button>
                </div>

                <div className="bg-theme-gradient p-2 text-white text-center">
                    <h2 className="text-sm font-semibold">
                        Didn&apos;t find what you were looking for?
                    </h2>
                </div>

                <div className="p-6 bg-white">
                    <div className="grid grid-cols-3 gap-4 mb-6">
                        <Button icon={<UserIcon />} text="Find a Doctor" onClick={handleFindDoctor} />
                        <Button icon={<CalendarIcon />} text="Book an Appointment" onClick={handleBookAppointment} />
                        <Button icon={<PhoneIcon />} text="For Enquiries 081065 25621" onClick={handleEnquiry} />
                    </div>

                    <div className="shadow-md rounded-lg overflow-hidden">
                        <h3 className="text-sm font-semibold p-2 bg-theme-gradient text-white text-center">Address</h3>
                        <div className="flex justify-center font-medium text-xs space-x-4 py-4">
                            <div className="">
                                <img src={location.src} className="w-[20px] h-[20px]" alt="Location icon" />
                            </div>
                            <span className="">
                                3rd Floor, PSR Enclave, Above SBI Bank,<br />
                                DVR Diagnostics, Opp: Max Showroom,<br />
                                Narsingi Main Road, Hyderabad
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Button = ({ icon, text, onClick }) => (
    <button
        onClick={onClick}
        className="shadow-md flex flex-col items-center justify-center p-3 bg-[#054f59] bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-colors"
    >
        <span className="text-[#eb5e21] mb-2">{icon}</span>
        <span className="text-xs text-center text-[#054f59]">{text}</span>
    </button>
);

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const DoctorPopupWrapper = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const pageHeight = document.documentElement.scrollHeight;

            if (scrollPosition >= pageHeight / 2) {
                setIsPopupOpen(true);
                window.removeEventListener('scroll', handleScroll);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <>
            {isPopupOpen && <DoctorPopup onClose={handleClosePopup} />}
        </>
    );
};

export default DoctorPopupWrapper;
