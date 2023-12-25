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
      <div className='w-full grid grid-cols-3 gap-7 mt-8'>
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
      {/* upcomming payment ---->  */}
      <div className='w-full flex flex-col gap-3 my-6 p-5 bg-white-main rounded-[15px] uiShadow1 border-[1px] border-black-main/10'>
        <div className='w-full flex justify-between items-center'>
          <Typography.H2 styles='text-black-main font-poppins font-semibold'>
            Upcoming Payment
          </Typography.H2>
          <Typography.MediumText styles='text-black-main font-poppins font-light'>
            Billing period: 20 Nov - 20 Dec
          </Typography.MediumText>
        </div>
        <Typography.MediumText styles='text-black-main font-poppins font-light'>
          Invoice will be auto-generated on{' '}
          <span className='font-bold'> 20 Dec</span> for account
          RO01BTRL***************0634
        </Typography.MediumText>
      </div>

      {/* charging sessions section -------->  */}
      <div className='w-full flex flex-col gap-5 bg-white-main rounded-[15px] uiShadow1 p-5 border-[1px] border-black-main/10'>
        <Typography.H2 styles='text-black-main font-poppins font-semibold'>
          Charging Sessions
        </Typography.H2>
        {/* table ----->  */}
        <div className='w-full flex flex-col'>
          {/* header -->  */}
          <div className='w-full h-[35px] bg-white-dark rounded-[4px] grid grid-cols-[1fr,1fr,1fr,1fr,1.2fr,1fr] px-10'>
            {chargingSessionTable.header.map((item, index) => {
              return (
                <div className='w-full h-full flex justify-start items-center'>
                  <Typography.MediumText
                    key={index}
                    styles='text-black-main font-normal font-poppins'
                  >
                    {item}
                  </Typography.MediumText>
                </div>
              );
            })}
          </div>
          {/* rows ---->  */}
          <div className='w-full max-h-[170px] overflow-auto flex flex-col'>
            {chargingSessionTable.rows.map((item, rowIndex) => (
              <div
                key={rowIndex}
                className='w-full min-h-[35px] grid grid-cols-[1fr,1fr,1fr,1fr,1.2fr,1fr] px-10'
              >
                {item.row.map((rowItem, colIndex) => (
                  <div
                    key={colIndex}
                    className='w-full h-full flex justify-start items-center'
                  >
                    <Typography.MediumText styles='text-black-main font-poppins font-light'>
                      {rowItem}
                    </Typography.MediumText>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
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

const chargingSessionTable = {
  header: ['Date', 'Location', 'Net Price', 'Plate No.', 'Driver', 'Merchant'],
  rows: [
    {
      row: [
        '6 Nov 2023',
        'Bucuresti',
        '1.3 RON/kWh',
        'B 200 BRR',
        'John Doe',
        'ACME S.R.L',
      ],
    },
    {
      row: [
        '6 Nov 2023',
        'Bucuresti',
        '1.3 RON/kWh',
        'B 200 BRR',
        'John Doe',
        'ACME S.R.L',
      ],
    },
    {
      row: [
        '6 Nov 2023',
        'Bucuresti',
        '1.3 RON/kWh',
        'B 200 BRR',
        'John Doe',
        'ACME S.R.L',
      ],
    },
    {
      row: [
        '6 Nov 2023',
        'Bucuresti',
        '1.3 RON/kWh',
        'B 200 BRR',
        'John Doe',
        'ACME S.R.L',
      ],
    },
    {
      row: [
        '6 Nov 2023',
        'Bucuresti',
        '1.3 RON/kWh',
        'B 200 BRR',
        'John Doe',
        'ACME S.R.L',
      ],
    },
    {
      row: [
        '6 Nov 2023',
        'Bucuresti',
        '1.3 RON/kWh',
        'B 200 BRR',
        'John Doe',
        'ACME S.R.L',
      ],
    },
  ],
};

export default Dashboard;
