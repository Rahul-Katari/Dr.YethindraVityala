"use client"

import { IconChevronDown, IconChevronUp, IconMinus, IconPlus } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";

const FaqAccordion = ({ title, children, accordionOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    setIsOpen(accordionOpen);
  }, [accordionOpen]);
  return (
    <>
      <div className="accordion py-3 border-b border-[#1E1C1C]">
        <div className="accordion-header" onClick={toggleAccordion}>
          <button className=" w-full flex justify-between py-2 font-medium text-lg items-center">
            <span> {title}</span>
            <span className="bg-[#4B5561] rounded-full text-white">{isOpen ? <IconMinus /> : <IconPlus />}</span>
          </button>
        </div>
        {isOpen && <div className={`accordion-content pb-2 font-light`}>{children}</div>}
      </div>
    </>
  );
};

export default FaqAccordion;
