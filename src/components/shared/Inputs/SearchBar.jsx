import React from 'react';

const SearchBar = () => {
  return (
    <input
      type='search'
      placeholder='Search item ...'
      className='w-full max-w-[260px] sm:max-w-[290px] h-[25px] sm:h-[30px] text-[12px] sm:text-[14px] text-black-main placeholder:text-[#8F8F8F] font-normal font-poppins focus:outline-none px-2 rounded-[7px] bg-white-main border-[1px] border-black-main'
    />
  );
};

export default SearchBar;
