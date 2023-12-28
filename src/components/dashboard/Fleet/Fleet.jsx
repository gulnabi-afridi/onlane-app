'use client';

import React, { useState } from 'react';
import Typography from '../../shared/Typography/Typography';
import SearchBar from '../../shared/Inputs/SearchBar';
import FillButton from '../../shared/Buttons/FillButton';
import OutlineButton from '../../shared/Buttons/OutlineButton';
import { HiOutlineDotsVertical } from 'react-icons/hi';

const Fleet = () => {
  const [selectedRow, setSelectedRow] = useState(2);

  return (
    <div className='w-full flex flex-col h-full gap-6 px-8'>
      <div className='flex flex-col min-h-[140px] justify-between'>
        <Typography.H1 styles='text-black-main font-extrabold'>
          Fleet Management
        </Typography.H1>
        {/* top header ----->  */}
        <div className='w-full flex justify-between items-center pl-6'>
          {/* search bar -->  */}
          <SearchBar />
          {/* delete + add button --->  */}
          <div className='flex justify-center items-center gap-3'>
            <OutlineButton
              event={() => {}}
              styles='text-[12px] font-poppins w-[91px] font-normal h-[24px] rounded-[7px] text-success-main'
            >
              Delete
            </OutlineButton>
            <FillButton
              event={() => {}}
              styles='text-[12px] text-white-main font-poppins font-normal w-[91px] h-[24px] rounded-[7px]'
            >
              Add
            </FillButton>
          </div>
        </div>
      </div>
      {/* table ------>  */}
      <div className='w-full flex flex-col'>
        {/* header -->  */}
        <div className='w-full grid h-[36px] bg-white-dark rounded-[4px] px-3 grid-cols-[.2fr,.7fr,1fr,.5fr,.5fr,.5fr,1fr,1fr,.6fr,1.3fr,1fr,20px] justify-center items-center'>
          <button className='w-[15px] h-[15px] rounded-full border-[1px] border-[#737373]'></button>
          {fleetTable.header.map((item, index) => {
            if (item.key === 'brand') {
              return (
                <div
                  key={index}
                  className='flex justify-center items-center gap-2'
                >
                  <Typography.NormalText styles='text-black-main font-poppins font-light'>
                    {item.label}
                  </Typography.NormalText>
                  <Typography.NormalText styles='text-black-main font-poppins font-light'>
                    {fleetTable.header.find((x) => x.key === 'model').label}
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
          <div className='flex justify-center items-center'>
            <div className='flex justify-center items-center'></div>
          </div>
        </div>
        {/* rows ----->  */}
        {fleetTable.rows.map((item, index) => {
          return (
            <div className='w-full grid h-[36px] bg-white-main rounded-[4px] px-3 grid-cols-[.2fr,.7fr,1fr,.5fr,.5fr,.5fr,1fr,1fr,.6fr,1.3fr,1fr,20px] justify-center items-center'>
              <button
                onClick={() => setSelectedRow(item.id)}
                className={`w-[15px] h-[15px] ${
                  selectedRow === item.id
                    ? 'bg-[#0094FF] outline outline-[#737373] outline-offset-2 outline-[1px]'
                    : 'bg-transparent  border-[1px] border-[#737373]'
                } rounded-full `}
              ></button>
              <div className='w-full max-w-[80px] flex justify-start items-center overflow-auto hideScroll'>
                <Typography.NormalText styles='text-success-main font-poppins font-light'>
                  {item.plateNo}
                </Typography.NormalText>
              </div>
              <div
                key={index}
                className='flex justify-center items-center gap-2'
              >
                <div className='w-full max-w-[100px] flex justify-start items-center gap-2 overflow-auto hideScroll'>
                  <Typography.NormalText styles='text-black-main font-poppins font-light'>
                    {item.brandModel.brand}
                  </Typography.NormalText>
                  <Typography.NormalText styles='text-black-main font-poppins font-light'>
                    {item.brandModel.model}
                  </Typography.NormalText>
                </div>
              </div>
              <Typography.NormalText styles='text-success-main font-poppins font-light'>
                {item.year}
              </Typography.NormalText>
              <div className='w-full max-w-[50px] flex justify-start items-center overflow-auto hideScroll'>
                <Typography.NormalText styles='text-success-main font-poppins font-light'>
                  {item.color}
                </Typography.NormalText>
              </div>
              <p className='text-[#2FB719] w-[52px] h-[13px] border-[1px] capitalize rounded-[60px] flex justify-center items-center border-[#2FB719] bg-[#CBEEBB] text-[8px] font-poppins font-light'>
                {item.status}
              </p>
              <div className='w-full flex justify-start items-center max-w-[103px] overflow-auto hideScroll'>
                <Typography.NormalText styles='text-black-main font-poppins font-light'>
                  {item.insuranceExp}
                </Typography.NormalText>
              </div>
              <div className='w-full flex justify-start items-center max-w-[103px] overflow-auto hideScroll'>
                <Typography.NormalText styles='text-black-main font-poppins font-light'>
                  {item.vignetteExp}
                </Typography.NormalText>
              </div>
              <div className='w-full max-w-[60px] flex justify-start items-center overflow-auto hideScroll'>
                <Typography.NormalText styles='text-black-main font-poppins font-light'>
                  {item.mileage}
                </Typography.NormalText>
              </div>
              <div className='w-full max-w-[150px] overflow-auto hideScroll'>
                <Typography.NormalText styles='text-black-main font-poppins font-light'>
                  {item.vin}
                </Typography.NormalText>
              </div>
              <div className='w-full max-w-[103px] flex justify-start items-center overflow-auto hideScroll'>
                <Typography.NormalText styles='text-black-main font-poppins font-light'>
                  {item.itpDate}
                </Typography.NormalText>
              </div>
              <div className='flex justify-center items-center'>
                <HiOutlineDotsVertical className='text-black-main text-[18px] cursor-pointer' />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const fleetTable = {
  header: [
    { key: 'plateNo', label: 'Plate No.' },
    { key: 'brand', label: 'Brand' },
    { key: 'model', label: 'Model' },
    { key: 'year', label: 'Year' },
    { key: 'color', label: 'Color' },
    { key: 'status', label: 'Status' },
    { key: 'insuranceExp', label: 'Insurance Exp.' },
    { key: 'vignetteExp', label: 'Vignette Exp.' },
    { key: 'mileage', label: 'Mileage' },
    { key: 'vin', label: 'VIN' },
    { key: 'itpDate', label: 'ITP Date' },
  ],
  rows: [
    {
      id: 1,
      plateNo: 'B 500 IDX',

      brandModel: {
        brand: 'Dacia',
        model: 'Spring',
      },
      model: 'Spring',
      year: '2019',
      color: 'White',
      status: 'active',
      status: 'active',
      insuranceExp: '22 Nov 2022',
      vignetteExp: '10 Apr 2024',
      mileage: 'Mileage',
      vin: '1HGBH41JXMN1091861HGBH41JXMN109186',
      itpDate: '10 Apr 2024',
    },
    {
      id: 2,
      plateNo: 'B 500 IDX',

      brandModel: {
        brand: 'Dacia',
        model: 'Spring',
      },
      model: 'Spring',
      year: '2019',
      color: 'White',
      status: 'active',
      status: 'active',
      insuranceExp: '22 Nov 2022',
      vignetteExp: '10 Apr 2024',
      mileage: 'Mileage',
      vin: '1HGBH41JXMN1091861HGBH41JXMN109186',
      itpDate: '10 Apr 2024',
    },
    {
      id: 3,
      plateNo: 'B 500 IDX',

      brandModel: {
        brand: 'Dacia',
        model: 'Spring',
      },
      model: 'Spring',
      year: '2019',
      color: 'White',
      status: 'active',
      status: 'active',
      insuranceExp: '22 Nov 2022',
      vignetteExp: '10 Apr 2024',
      mileage: 'Mileage',
      vin: '1HGBH41JXMN1091861HGBH41JXMN109186',
      itpDate: '10 Apr 2024',
    },
    {
      id: 4,
      plateNo: 'B 500 IDX',

      brandModel: {
        brand: 'Dacia',
        model: 'Spring',
      },
      model: 'Spring',
      year: '2019',
      color: 'White',
      status: 'active',
      status: 'active',
      insuranceExp: '22 Nov 2022',
      vignetteExp: '10 Apr 2024',
      mileage: 'Mileage',
      vin: '1HGBH41JXMN1091861HGBH41JXMN109186',
      itpDate: '10 Apr 2024',
    },
    {
      id: 5,
      plateNo: 'B 500 IDX',

      brandModel: {
        brand: 'Dacia',
        model: 'Spring',
      },
      model: 'Spring',
      year: '2019',
      color: 'White',
      status: 'active',
      status: 'active',
      insuranceExp: '22 Nov 2022',
      vignetteExp: '10 Apr 2024',
      mileage: 'Mileage',
      vin: '1HGBH41JXMN1091861HGBH41JXMN109186',
      itpDate: '10 Apr 2024',
    },
  ],
};

export default Fleet;
