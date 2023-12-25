import React, { useState } from 'react';
import ComponentWrapper from '../components/shared/Wrappers/ComponentWrapper';
import * as Icons from '../../src/svg/Icons';
import Typography from '../components/shared/Typography/Typography';
import { LuDot } from 'react-icons/lu';

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState('dashboard');

  return (
    <ComponentWrapper>
      <div className='w-full grid grid-cols-[274px,1fr] justify-start'>
        {/* left navigation ============>  */}
        <div className='w-full flex flex-col gap-16 justify-start items-center pt-14'>
          {/* logo ---->  */}
          <p className='text-[30px] sm:text-[35px] font-extrabold font-poppins'>
            <span className='text-success-main'>On</span>
            <span className='text-black-main'>Lane</span>
          </p>
          <div className='w-full flex flex-col gap-6 justify-center items-center'>
            <button
              onClick={() => setSelectedOption('dashboard')}
              className={`w-full max-w-[234px] flex justify-center items-center gap-3 h-[41px] rounded-[8px] ${
                selectedOption === 'dashboard'
                  ? 'leftNavigationSha'
                  : 'bg-transparent'
              }  `}
            >
              <Icons.home
                ClassName='w-[24px] h-[24px]'
                fill={`${
                  selectedOption === 'dashboard' ? '#25A18E' : '#C2C2C2'
                }`}
              />
              <Typography.MediumText
                styles={` tracking-wider ${
                  selectedOption === 'dashboard'
                    ? 'text-success-main font-medium'
                    : 'text-[#C2C2C2] font-normal'
                } `}
              >
                Dashboard
              </Typography.MediumText>
            </button>
            {/* control ---->  */}
            {leftNavigation.map((item, index) => {
              return (
                <div key={index} className='w-full flex flex-col gap-3'>
                  <button className='w-full max-w-[234px] flex justify-center items-center gap-3 h-[41px] rounded-[8px]'>
                    {item.icon}
                    <Typography.MediumText styles='font-normal tracking-wider text-black-cool'>
                      {item.category}
                    </Typography.MediumText>
                  </button>
                  {/* control items ------>  */}
                  <div className='w-full flex flex-col justify-center items-center'>
                    {item.items.map((list, index) => {
                      return (
                        <button
                          key={index}
                          onClick={() => setSelectedOption(list)}
                          className={`flex w-full ${
                            list === selectedOption
                              ? 'leftNavigationSha'
                              : 'bg-transparent'
                          }  h-[41px] max-w-[234px] group justify-start pl-[84px] items-center gap-1`}
                        >
                          <LuDot
                            className={`text-[20px] group-hover:text-success-main ${
                              selectedOption === list
                                ? 'text-success-main'
                                : 'text-black-cool'
                            }`}
                          />

                          <Typography.MediumText
                            styles={` tracking-wider group-hover:text-success-main ${
                              selectedOption === list
                                ? 'text-success-main font-medium'
                                : 'text-[#C2C2C2] font-normal'
                            } `}
                          >
                            {list}
                          </Typography.MediumText>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* right portion ===========>  */}
        <div className='rightPor h-screen'></div>
      </div>
    </ComponentWrapper>
  );
};

const leftNavigation = [
  {
    category: 'Control',
    icon: <Icons.control ClassName='w-[24px] h-[24px]' />,
    items: ['Fleet', 'Drivers', 'Cards', 'Sessions'],
  },
  {
    category: 'Billing',
    icon: <Icons.billing ClassName='w-[24px] h-[24px]' />,
    items: ['Statements'],
  },
  {
    category: 'User',
    icon: <Icons.user ClassName='w-[24px] h-[24px]' />,
    items: ['Account'],
  },
];

export default Dashboard;
