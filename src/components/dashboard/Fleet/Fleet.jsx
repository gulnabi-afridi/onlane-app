import React from 'react';
import Typography from '../../shared/Typography/Typography';
import SearchBar from '../../shared/Inputs/SearchBar';

const Fleet = () => {
  return (
    <div className='w-full flex flex-col h-full gap-10'>
      <Typography.H1 styles='text-black-main font-extrabold'>
        Fleet Management
      </Typography.H1>
      {/* top header ----->  */}
      <div className='w-full flex justify-between items-center pl-6'>
        {/* search bar -->  */}
        <input
          type='search'
          placeholder='Search item ...'
          className='w-full max-w-[290px] h-[30px] text-[14px] text-black-main placeholder:text-[#8F8F8F] font-normal font-poppins focus:outline-none px-2 rounded-[7px] bg-white-main border-[1px] border-black-main'
        />
      </div>
    </div>
  );
};

export default Fleet;
