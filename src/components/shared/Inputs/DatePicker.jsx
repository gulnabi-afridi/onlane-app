import React, { useState } from "react";

const CustomDatePicker = ({ value, onChange }) => {
  return (
    <input
      type="date"
      value={value}
      onChange={onChange}
      className="border-solid border-[#000000] border-[0.5px] pl-2 py-2 h-[17px] w-[258px] text-[10px] focus:outline-none"
    />
  );
};

export default CustomDatePicker;
