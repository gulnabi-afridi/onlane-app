import React from 'react';
import Typography from '../../shared/Typography/Typography';
import Widget from './Widget';

const Dashboard = () => {
  return (
    <div className='w-full h-full flex flex-col'>
      <Typography.H1 styles='text-black-main font-extrabold'>
        Dashboard
      </Typography.H1>
      <Typography.NormalText styles='font-extralight text-black-main font-poppins'>
        Selected Period: Auto (20 Nov - 20 Dec 2023)
      </Typography.NormalText>
      {/* widgets ---->  */}
      <div className='w-full grid grid-cols-3 gap-7 mt-10'>
        {widgetData.map((item, index) => {
          return (
            <Widget
              key={index}
              title={item.title}
              subTitle={item.subTitle}
              value={item.value}
            />
          );
        })}
      </div>
    </div>
  );
};

const widgetData = [
  {
    title: 'Total cost',
    subTitle: 'Total amount to pay for this month',
    value: '19.000 RON',
  },
  {
    title: 'Total charge',
    subTitle: 'Total kWh charged for this month',
    value: '500 kWh',
  },
  {
    title: 'TAverage price',
    subTitle: 'Average price for each kWh charged for this month',
    value: '2.0 RON/kWh',
  },
];

export default Dashboard;
