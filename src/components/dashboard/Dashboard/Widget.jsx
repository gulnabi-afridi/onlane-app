import React from 'react';
import Typography from '../../shared/Typography/Typography';

const Widget = ({ title, subTitle, value }) => {
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='w-full h-full xl:max-w-full max-w-[290px] flex flex-col gap-3 sm:gap-5 justify-between bg-white-main p-4 sm:p-6 widgetSha rounded-[16px] border-[1px] border-black-main/10'>
        <div className='flex flex-col gap-2 sm:gap-3'>
          <Typography.H2 styles='text-black-main font-semibold font-poppins'>
            {title}
          </Typography.H2>
          <Typography.MediumText styles='text-white-off h-[50px] overflow-auto font-extralight font-poppins'>
            {subTitle}
          </Typography.MediumText>
        </div>
        <Typography.H2 styles='text-black-main font-medium font-poppins'>
          {value}
        </Typography.H2>
      </div>
    </div>
  );
};

export default Widget;
