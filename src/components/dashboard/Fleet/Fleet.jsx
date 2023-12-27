import React from 'react';
import Typography from '../../shared/Typography/Typography';
import SearchBar from '../../shared/Inputs/SearchBar';
import FillButton from '../../shared/Buttons/FillButton';
import OutlineButton from '../../shared/Buttons/OutlineButton';

const Fleet = () => {
  return (
    <div className='w-full flex flex-col h-full gap-10'>
      <Typography.H1 styles='text-black-main font-extrabold'>
        Fleet Management
      </Typography.H1>
      {/* top header ----->  */}
      <div className='w-full flex justify-between items-center pl-6'>
        {/* search bar -->  */}
        <SearchBar />
        {/* delete + add button --->  */}
        <div className='flex justify-center items-center gap-3'>
          <OutlineButton
            event={() => {}}
            styles='text-[12px] font-poppins w-[91px] font-normal h-[24px] rounded-[7px] text-success-main'
          >
            Delete
          </OutlineButton>
          <FillButton
            event={() => {}}
            styles='text-[12px] text-white-main font-poppins font-normal w-[91px] h-[24px] rounded-[7px]'
          >
            Add
          </FillButton>
        </div>
      </div>
    </div>
  );
};

export default Fleet;
