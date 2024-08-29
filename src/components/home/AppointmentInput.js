import { specialities } from "@/services/api";
import React from "react";

const AppointmentInput = ({
  placeholder,
  name,
  type,
  selectType,
  onChange,
  required,
  col,
  home,
  value,
  oninput,
  min,
  onClick
}) => {
  if (type === "select") {
    return (
      <div className={`${col}`}>
        <select
          name={name}
          className={`p-2 px-5 rounded text-white ${home ? "" : "bg-transparent"
            } border w-full text-sm max-sm:py-2`}
          onChange={onChange}
          required={required}
          value={value}
        >
          <option value="" selected className="text-black">
            -Select an {placeholder}-
          </option>
          {selectType === "speciality" ? (
            specialities?.map((spec, index) => (
              <option className="text-black" value={index + 1} key={index}> {spec}</option>
            ))
        ) : name === "Doctor" ? (
            selectType?.map((option, index) => (
        <option key={index} value={option.id} className="text-black">
          {option.name}
        </option>
        ))
        ) : (
        ""
          )}
      </select>
      </div >
    );
  } else {
  return (
    <div className={`${col}`}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`p-2 px-5 rounded w-full text-sm placeholder:text-white ${home ? "" : "bg-transparent"
          } border`}
        required={required}
        onInput={oninput}
        onChange={onChange}
        min={min}
        onClick={onClick}
      />
    </div>
  );
}
};

export default AppointmentInput;
