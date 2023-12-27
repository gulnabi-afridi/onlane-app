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
        <SearchBar />
      </div>
    </div>
  );
};

export default Fleet;
