import React from 'react';
const CustomSelectBox = ({ options, value, onChange }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className=' w-[258px] h-[19px] flex justify-center items-center border-[0.5px] border-black-main px-0 text-[10px] text-black-main focus:outline-none'
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
