"use client"
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";

const Accordion = ({ title, children, accordionOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    setIsOpen(accordionOpen);
  }, [accordionOpen]);
  return (
    <>
      <div className="accordion mb-5">
        <div className="accordion-header" onClick={toggleAccordion}>
          <button className=" w-full flex justify-between bg-theme md:p-2 text-white rounded-t-lg p-1">
            <span> {title}</span>
            <span>{isOpen ? <IconChevronDown /> : <IconChevronUp />}</span>
          </button>
        </div>
        {isOpen && <div className={`accordion-content`}>{children}</div>}
      </div>
    </>
  );
};

export default Accordion;
