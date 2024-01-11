'use client';

import React, { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import Typography from '../Typography/Typography';
import * as Icons from '../../../svg/Icons';
import { RxCross1 } from 'react-icons/rx';
import { LuDot } from 'react-icons/lu';

const SmallScreenLeftNavigation = ({ selectedOption, setSelectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className='w-full h-[50px] bg-white-main border-b-[1px] border-black-main/10 justify-end items-center lg:hidden flex'>
      <Hamburger
        color='black'
        rounded
        size={24}
        toggled={isOpen}
        toggle={setIsOpen}
      />
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        className='drawer'
      >
        <div className='flex flex-col p-8 justify-center items-center '>
          {/* =========>top bar */}
          <div className='w-full flex justify-start items-center'>
            <RxCross1
              onClick={toggleDrawer}
              className='text-[26px] text-black-main '
            />
          </div>
          {/* logo --->  */}
          <p className='text-[30px] sm:text-[35px] font-extrabold font-poppins mt-8'>
            <span className='text-success-main'>On</span>
            <span className='text-black-main'>Lane</span>
          </p>
          <div className='w-full max-w-[200px] flex flex-col gap-2 justify-center items-center mt-8'>
            <button
              onClick={() => {
                setSelectedOption('dashboard');
                setIsOpen(false);
              }}
              className={`w-full grid grid-cols-[1.4fr,3fr] justify-start text-center items-center gap-3 h-[41px] rounded-[8px] ${
                selectedOption === 'dashboard'
                  ? 'leftNavigationSha'
                  : 'bg-transparent'
              }  `}
            >
              <div className='w-full flex justify-end'>
                <Icons.home
                  ClassName='w-[24px] h-[24px]'
                  fill={`${
                    selectedOption === 'dashboard' ? '#25A18E' : '#C2C2C2'
                  }`}
                />
              </div>
              <div className='w-full flex justify-start'>
                <Typography.MediumText
                  styles={` tracking-wider ${
                    selectedOption === 'dashboard'
                      ? 'text-success-main font-medium'
                      : 'text-[#C2C2C2] font-normal'
                  } `}
                >
                  Dashboard
                </Typography.MediumText>
              </div>
            </button>
            {/* control ---->  */}
            {leftNavigation.map((item, index) => {
              return (
                <div key={index} className='w-full flex flex-col gap-2'>
                  <button className='w-full max-w-[234px] grid grid-cols-[1.4fr,3fr] justify-start items-center gap-3 h-[41px] rounded-[8px]'>
                    <div className='w-full flex justify-end'>{item.icon}</div>
                    <div className='w-full flex justify-start'>
                      <Typography.MediumText styles='font-normal tracking-wider text-black-cool'>
                        {item.category}
                      </Typography.MediumText>
                    </div>
                  </button>
                  {/* control items ------>  */}
                  <div className='w-full flex flex-col justify-center items-center'>
                    {item.items.map((list, index) => {
                      return (
                        <button
                          key={index}
                          onClick={() => {
                            setSelectedOption(list);
                            setIsOpen(false);
                          }}
                          className={`grid grid-cols-[1fr,1.3fr] w-full ${
                            list === selectedOption
                              ? 'leftNavigationSha'
                              : 'bg-transparent'
                          }  h-[41px] max-w-[234px] group justify-start items-center gap-1`}
                        >
                          <div className='w-full flex justify-end'>
                            <LuDot
                              className={`text-[20px] group-hover:text-success-main ${
                                selectedOption === list
                                  ? 'text-success-main'
                                  : 'text-black-cool'
                              }`}
                            />
                          </div>
                          <div className='w-full flex justify-start'>
                            <Typography.MediumText
                              styles={` tracking-wider group-hover:text-success-main ${
                                selectedOption === list
                                  ? 'text-success-main font-medium'
                                  : 'text-[#C2C2C2] font-normal'
                              } `}
                            >
                              {list}
                            </Typography.MediumText>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default SmallScreenLeftNavigation;

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
