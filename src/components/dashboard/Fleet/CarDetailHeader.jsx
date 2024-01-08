import React from 'react';
import Typography from '../../shared/Typography/Typography';

const CarDetailHeader = ({ header }) => {
  return (
    <div className='w-full grid min-h-[36px] bg-white-dark rounded-[4px] px-3 grid-cols-[.2fr,.7fr,1fr,.5fr,.5fr,.5fr,1fr,1fr,.6fr,1.3fr,1fr,20px] justify-center items-center'>
      <button className='w-[15px] h-[15px] rounded-full border-[1px] border-[#737373]'></button>
      {header.map((item, index) => {
        if (header.key === 'brand') {
          return (
            <div
              key={index}
              className='flex justify-center headers-center gap-2'
            >
              <Typography.NormalText styles='text-black-main font-poppins font-light'>
                {item.label}
              </Typography.NormalText>
              <Typography.NormalText styles='text-black-main font-poppins font-light'>
                {header.find((x) => x.key === 'model').label}
              </Typography.NormalText>
            </div>
          );
        }
        if (item.key === 'model') {
          return null;
        }
        return (
          <div key={index} className=''>
            <Typography.NormalText styles='text-black-main font-poppins font-light'>
              {item.label}
            </Typography.NormalText>
          </div>
        );
      })}
      <div className='flex justify-center headers-center'>
        <div className='flex justify-center headers-center'></div>
      </div>
    </div>
  );
};

export default CarDetailHeader;
