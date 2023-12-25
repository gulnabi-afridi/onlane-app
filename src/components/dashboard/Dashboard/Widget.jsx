import React from 'react';
import Typography from '../../shared/Typography/Typography';

const Widget = ({ title, subTitle, value }) => {
  return (
    <div className='w-full flex flex-col gap-5 justify-between bg-white-main p-6 widgetSha rounded-[16px] border-[1px] border-black-main/10'>
      <div className='flex flex-col gap-3'>
        <Typography.H2 styles='text-black-main font-semibold font-poppins'>
          {title}
        </Typography.H2>
        <Typography.NormalText styles='text-white-off font-extralight font-poppins'>
          {subTitle}
        </Typography.NormalText>
      </div>
      <Typography.H2 styles='text-black-main font-medium font-poppins'>
        {value}
      </Typography.H2>
    </div>
  );
};

export default Widget;
