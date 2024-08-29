// AppointmentFormDetailInput.js
import React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AppointmentFormDetailInput = ({
  Icon,
  type,
  placeholder,
  value,
  handleChange,
  name,
  id,
  onClick
}) => {
  return (
    <div className="p-1 border rounded-full flex">
      <div className="size-[30px]">
        <Icon className="bg-gray-200 rounded-full p-1.5 text-theme" size={30} />
      </div>
      <div className="w-full relative">
        {type === "tel" ? (
          <span className="absolute left-2 top-[50%] transform -translate-y-1/2 text-gray-400">
            +91 -
          </span>
        ) : (
          ""
        )}
        <input
          className={classNames(
            type === "tel" ? "ps-12" : "",
            "size-full bg-transparent focus-visible:outline-0 px-2"
          )}
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          id={id}
          min={new Date().toISOString().split("T")[0]}
          // onChange={(e) => handleChange(e.target.value)}
          onChange={(e) => handleChange(e)}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default AppointmentFormDetailInput;
