import React from "react";
import "react-tabs-scrollable/dist/rts.css";
import FormatHtml from "../FormatHtml";

const buttonsServiceCategory1 = [
  { name: "Overview", id: "overview" },
  { name: "Causes", id: "causes" },
  { name: "Symptoms", id: "symptoms" },
  { name: "Treatment & Management", id: "treatment-management" },
];

const buttonsServiceCategory2 = [
  { name: "Overview ", id: "overview" },
  { name: "Causes ", id: "causes" },
  { name: "Symptoms", id: "symptoms" },
  { name: "Treatment & Management", id: "treatment-management" },
];

let buttonsToRender;

const scrollToSection = (sectionId) => {
  buttonsToRender.forEach((button) => {
    document.getElementById(button.id).classList.remove("mt-24");
  });

  const section = document.getElementById(sectionId);
  if (section) {
    section.classList.add("mt-24");
    
    // Scroll to the element with block alignment
    section.scrollIntoView({ behavior: "smooth", block: "start" });

    // Optional: Adjust the scroll position if needed
    setTimeout(() => window.scrollBy(0, -100), 500); // Adjust -100 to your needs
  }
};

const ExcellenceContentTabs = ({ serviceDetails }) => {
  buttonsToRender = serviceDetails?.servicecategory === 1 ? buttonsServiceCategory1 : buttonsServiceCategory2;

  return (
    <div>
      
      <div className="excellence-content-tabs my-8">
        {serviceDetails?.category ?
          <>
            {/* <div className="flex md:sticky top-[144px] flex-grow">
              {buttonsToRender.map((button, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(button.id)}
                  className="md:p-2 max-sm:px-2 text-white max-sm:text-xs w-full"
                >
                  {button.name}
                </button>
              ))}
            </div> */}
            {/* <div>
              <div id="overview">
                <div className="my-5 text-content">
                  <h2 className="font-medium text-theme text-lg">Overview</h2>
                  <FormatHtml htmlString={serviceDetails?.overview} />
                </div>
              </div>
              <div className="my-5 text-content" id="causes">
                <h2 className="font-medium text-theme text-lg">Causes</h2>
                <FormatHtml htmlString={serviceDetails?.causes} />
              </div>
              <div className="my-5 text-content" id="symptoms">
                <h2 className="font-medium text-theme text-lg">Symptoms</h2>
                <FormatHtml htmlString={serviceDetails?.symptoms} />
              </div>
              <div className="my-5 text-content" id="treatment-management">
                <h2 className="font-medium text-theme text-lg">Treatment</h2>
                <FormatHtml htmlString={serviceDetails?.treatment} />
              </div>
            </div> */}
            <FormatHtml htmlString={serviceDetails?.overview} />
          </> :
          <>
            <FormatHtml htmlString={serviceDetails?.description} />
          </>
        }
      </div>
    </div>
  );
};

export default ExcellenceContentTabs;
