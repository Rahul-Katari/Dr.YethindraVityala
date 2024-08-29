import React from "react";
import MoreBtn from "./common/MoreBtn";
import CareerForm from "./pages/CareerForm";
import FormatHtml from "./FormatHtml";
import ChevronButton from "./home/ChevronButton";
import { ASSET_URL } from "@/services/api";

const CareerCard = ({ career }) => {
  return (
    <div className="rounded overflow-hidden shadow-3xl p-6 mb-6 max-sm:text-sm">
      <div className="md:flex">
        <img
          className="w-2/5"
          src={ASSET_URL + career?.image}
          alt="Job Image"
        />
        <div className="md:px-6 ms-4 py-4">
          <div className=" mb-2 ">Job Title: {career?.name}</div>
          <p>Department: {career?.department}</p>
          <p>Location: {career?.location}</p>
        </div>
      </div>
      <div className="md:px-6 md:pt-4 pb-2">
        <h3 className="font-medium">Job Description</h3>
        <ul className="list-disc-default ps-4 text-sm">
          <FormatHtml htmlString={career?.description}/>
        </ul>
      </div>
      <CareerForm careerid={career.id} />
      {/* <ChevronButton text={"Read More"} link={"#"} bg={"bg-highlight"} color={"text-white"}/> */}
    </div>
  );
};

export default CareerCard;
