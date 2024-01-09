import React from "react";

const CustomSelectBox = ({ options, value, onChange }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="border-solid   border-[#000000] border-[0.5px] px-2  py-2 h-[17px] w-[258px] text-[10px] text-black-main focus:outline-none"
    >
      {options.map((option, i) => (
        <option key={i} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default CustomSelectBox;
