import React from 'react';
import Typography from '../../shared/Typography/Typography';

const CardsDetailHeader = ({ header }) => {
  return (
    <div className='w-full min-w-[550px]  grid min-h-[36px] bg-white-dark rounded-[4px] px-3 grid-cols-[.1fr,1.7fr,1.2fr,1fr] md:grid-cols-[.1fr,1.3fr,1fr,1fr] justify-center items-center'>
      <button className='w-[15px] h-[15px] rounded-full border-[1px] border-[#737373]'></button>

      <Typography.NormalText styles='text-black-main font-poppins font-light border-l-[1px] border-solid border-[#B0B0B0] pl-4 '>
        {header.uid}
      </Typography.NormalText>
      <Typography.NormalText styles='text-black-main font-poppins font-light'>
        {header.vid}
      </Typography.NormalText>
      <Typography.NormalText styles='text-black-main font-poppins font-light'>
        {header.status}
      </Typography.NormalText>
    </div>
  );
};

export default CardsDetailHeader;
