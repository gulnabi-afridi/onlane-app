import React from 'react';
import Typography from '../../shared/Typography/Typography';
import Widget from './Widget';

const Dashboard = () => {
  return (
    <div className='w-full h-auto sm:min-h-screen flex flex-col px-2 md:px-8 xl:px-14'>
      <div className='w-full h-[140px] flex flex-col justify-center items-start gap-2'>
        <Typography.H1 styles='text-black-main font-extrabold'>
          Dashboard
        </Typography.H1>
        <Typography.MediumText styles='font-extralight text-black-main font-poppins'>
          Selected Period: Auto (20 Nov - 20 Dec 2023)
        </Typography.MediumText>
      </div>
      {/* widgets ---->  */}
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 lg:gap-4 xl:gap-7'>
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
      <div className='w-full h-auto sm:min-h-[110px] flex flex-col gap-3 my-4 p-4 sm:p-5 bg-white-main rounded-[15px] uiShadow1 border-[1px] border-black-main/10'>
        <div className='w-full flex justify-between items-center'>
          <Typography.H2 styles='text-black-main font-poppins font-semibold '>
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
      <div className='w-full h-auto md:h-[calc(100vh-520px)] flex flex-col gap-3 bg-white-main rounded-[15px] uiShadow1 p-4 sm:p-5 border-[1px] border-black-main/10'>
        <Typography.H2 styles='text-black-main font-poppins font-semibold'>
          Charging Sessions
        </Typography.H2>
        {/* table ----->  */}
        <div className='w-full overflow-auto flex flex-col hideScroll'>
          {/* header -->  */}
          <div className='w-full min-w-[700px] h-[35px] sm:min-h-[35px] bg-white-dark rounded-[4px] grid grid-cols-[1fr,1fr,1fr,1fr,1.2fr,1fr] px-4 md:px-10'>
            {chargingSessionTable.header.map((item, index) => {
              return (
                <div className='w-full h-full flex justify-start items-center'>
                  <Typography.NormalText
                    key={index}
                    styles='text-black-main font-normal font-poppins'
                  >
                    {item}
                  </Typography.NormalText>
                </div>
              );
            })}
          </div>
          {/* rows ---->  */}
          <div className='w-full min-w-[700px]  h-[170px] sm:max-h-[170px] overflow-auto flex flex-col'>
            {chargingSessionTable.rows.map((item, rowIndex) => (
              <div
                key={rowIndex}
                className='w-full h-auto sm:min-h-[35px] grid grid-cols-[1fr,1fr,1fr,1fr,1.2fr,1fr] px-4 md:px-10'
              >
                {item.row.map((rowItem, colIndex) => (
                  <div
                    key={colIndex}
                    className='w-full h-full flex justify-start items-center'
                  >
                    <Typography.NormalText styles='text-black-main font-poppins font-light'>
                      {rowItem}
                    </Typography.NormalText>
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
