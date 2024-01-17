import React, { useState } from 'react';
import Typography from '../Typography/Typography';
import * as Icons from '../../../svg/Icons';
import { LuDot } from 'react-icons/lu';

const LeftNavigation = ({ selectedOption, setSelectedOption }) => {
  return (
    <div className='w-full hidden lg:flex flex-col gap-12 justify-start items-center pt-12  border-r-[1px] border-black-main/5'>
      {/* logo ---->  */}
      <p className='text-[30px] sm:text-[35px] font-extrabold font-poppins'>
        <span className='text-success-main'>On</span>
        <span className='text-black-main'>Lane</span>
      </p>
      <div className='w-full flex flex-col gap-2 justify-center items-center'>
        <button
          onClick={() => setSelectedOption('dashboard')}
          className={`w-full max-w-[234px] grid grid-cols-[80px,calc(100%-80px)] justify-center items-center gap-3 h-[41px] rounded-[8px] ${
            selectedOption === 'dashboard'
              ? 'leftNavigationSha'
              : 'bg-transparent'
          }  `}
        >
          <div className='w-full flex justify-end items-center'>
            <Icons.home
              ClassName='w-[24px] h-[24px]'
              fill={`${selectedOption === 'dashboard' ? '#25A18E' : '#C2C2C2'}`}
            />
          </div>
          <Typography.MediumText
            styles={` tracking-wider w-full text-start ${
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
            <div
              key={index}
              className='w-full flex flex-col justify-center items-center gap-2'
            >
              <button className='w-full  max-w-[234px] grid grid-cols-[80px,calc(100%-80px)] justify-center items-center gap-3 h-[41px] rounded-[8px]'>
                <div className='w-full flex justify-end items-center'>
                  {item.icon}
                </div>

                <Typography.MediumText styles='font-normal tracking-wider text-black-cool text-start'>
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
                      }  h-[41px] max-w-[234px] group justify-start pl-[75px] items-center gap-1`}
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
  );
};

export default LeftNavigation;

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
