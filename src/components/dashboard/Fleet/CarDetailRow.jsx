'use client';

import React, { useState, useEffect } from 'react';
import Typography from '../../shared/Typography/Typography';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { EditIcon } from '../../../svg/Icons';

const CarDetailRow = ({
  row,
  selectedRow,
  setSelectedRow,
  onOpenUpdateModal,
  showEditMenu,
  setShowEditMenu,
}) => {
  const openUpdateModalHandler = (id) => {
    onOpenUpdateModal(id);
  };

  const toggleEditMenu = (id, e) => {
    e.stopPropagation();
    setShowEditMenu((prev) => (prev === id ? null : id));
  };

  //  useEffect for closing the menu ---------->
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (showEditMenu && e.target.closest('.edit-menu') === null) {
        setShowEditMenu(null);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [showEditMenu, setShowEditMenu]);

  return (
    <div className='min-w-[1030px] grid min-h-[36px] rounded-[4px] px-3 grid-cols-[.2fr,.7fr,1fr,.5fr,.5fr,.5fr,1fr,1fr,.6fr,1.3fr,1fr,20px] justify-center items-center'>
      <button
        onClick={() => setSelectedRow(row.id)}
        className={`w-[15px] h-[15px] ${
          selectedRow === row.id
            ? 'bg-[#0094FF] outline outline-[#737373] outline-offset-2 outline-[1px]'
            : 'bg-transparent  border-[1px] border-[#737373]'
        } rounded-full `}
      ></button>
      <div className='w-full max-w-[80px] flex justify-start rows-center overflow-auto hideScroll'>
        <Typography.NormalText styles='text-success-main font-poppins font-light'>
          {row.plateNo}
        </Typography.NormalText>
      </div>
      <div className='flex justify-start rows-center gap-2'>
        <div className='w-full max-w-[100px] flex justify-start rows-center gap-2 overflow-auto hideScroll'>
          <Typography.NormalText styles='text-black-main font-poppins font-light'>
            {row.brandModel.brand}
          </Typography.NormalText>
          <Typography.NormalText styles='text-black-main font-poppins font-light'>
            {row.brandModel.model}
          </Typography.NormalText>
        </div>
      </div>
      <Typography.NormalText styles='text-success-main font-poppins font-light'>
        {row.year}
      </Typography.NormalText>
      <div className='w-full max-w-[50px] flex justify-start rows-center overflow-auto hideScroll'>
        <Typography.NormalText styles='text-success-main font-poppins font-light'>
          {row.color}
        </Typography.NormalText>
      </div>
      <p className='text-[#2FB719] w-[52px] h-[13px] border-[1px] capitalize rounded-[60px] text-center border-[#2FB719] bg-[#CBEEBB] text-[8px] font-poppins font-light'>
        {row.status}
      </p>
      <div className='w-full flex justify-start rows-center max-w-[103px] overflow-auto hideScroll'>
        <Typography.NormalText styles='text-black-main font-poppins font-light'>
          {row.insuranceExp}
        </Typography.NormalText>
      </div>
      <div className='w-full flex justify-start rows-center max-w-[103px] overflow-auto hideScroll'>
        <Typography.NormalText styles='text-black-main font-poppins font-light'>
          {row.vignetteExp}
        </Typography.NormalText>
      </div>
      <div className='w-full max-w-[60px] flex justify-start rows-center overflow-auto hideScroll'>
        <Typography.NormalText styles='text-black-main font-poppins font-light'>
          {row.mileage}
        </Typography.NormalText>
      </div>
      <div className='w-full overflow-hidden hideScroll'>
        <Typography.NormalText styles='text-black-main font-poppins font-light'>
          {row.vin}
        </Typography.NormalText>
      </div>
      <div className='w-full max-w-[103px] flex justify-start rows-center overflow-auto hideScroll'>
        <Typography.NormalText styles='text-black-main font-poppins font-light'>
          {row.itpDate}
        </Typography.NormalText>
      </div>
      <div className='flex justify-center rows-center'>
        <div className='relative'>
          <HiOutlineDotsVertical
            className='text-black-main text-[18px] hover:opacity-70 cursor-pointer -z-1'
            onClick={(e) => toggleEditMenu(row.id, e)}
          />
          <div
            className={`${
              showEditMenu === row.id ? 'flex' : 'hidden'
            }  absolute edit-menu right-0 top-[10px] mt-2 space-y-2 px-0 flex justify-center items-center sm:px-6 w-[70px] sm:w-[90px] py-[5px] sm:py-2 bg-[#ffffff] z-10 border border-gray-200 rounded-md shadow-lg`}
          >
            <div
              className='flex items-center cursor-pointer gap-1 sm:gap-[6px] hover:opacity-80'
              onClick={() => openUpdateModalHandler(row.id)}
            >
              <EditIcon ClassName='w-[10px] sm:w-[12px] h-[10px] sm:h-[12px]' />
              <span className='text-[10px] sm:text-[12px] font-normal text-black-main'>
                Edit
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailRow;
