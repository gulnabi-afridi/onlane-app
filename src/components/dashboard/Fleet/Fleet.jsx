'use client';

import React, { useState } from 'react';
import Typography from '../../shared/Typography/Typography';
import SearchBar from '../../shared/Inputs/SearchBar';
import FillButton from '../../shared/Buttons/FillButton';
import OutlineButton from '../../shared/Buttons/OutlineButton';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import Pagination from '../../shared/Pagination/Pagination';
import CarDetailRow from './CarDetailRow';
import CarDetailHeader from './CarDetailHeader';
import Modal from '../../shared/Modal/Modal';

const Fleet = () => {
  // states ------->
  const [currentPage, setCurrentPage] = React.useState(1);
  const [selectedRow, setSelectedRow] = useState(2);
  const [addCarDetailModal, setAddCarDetailModal] = useState(false);
  const totalPages = 10;

  // states ends here ----->

  // methods ------->
  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  // methods ends here ------->

  // data ---- >
  const [carData, setCarData] = useState([
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
  ]);

  return (
    <React.Fragment>
      <div className='w-full flex flex-col h-full px-8'>
        <div className='flex flex-col min-h-[190px] justify-between'>
          <Typography.H1 styles='text-black-main font-extrabold pt-2 lg:pt-12'>
            Fleet Management
          </Typography.H1>
          {/* top header ----->  */}
          <div className='w-full flex justify-between items-center pl-6 pb-4'>
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
        <div className='w-full h-[calc(100vh-270px)] overflow-auto hideScroll flex flex-col'>
          {/* header -->  */}
          <CarDetailHeader header={fleetTableHeader} />
          {/* rows ----->  */}
          {carData.map((item, index) => {
            return (
              <CarDetailRow
                key={index}
                row={item}
                selectedRow={selectedRow}
                setSelectedRow={setSelectedRow}
              />
            );
          })}
        </div>
        {/* pagination -------->  */}
        <div className='w-full h-[80px] flex justify-center items-start pt-4 px-4 border-t-[1px] border-[#CECECE]'>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </div>
      </div>

      {/* Add new product modal -------->  */}
      {addCarDetailModal && (
        <Modal setIsOpen={setAddCarDetailModal}>
          <div className='flex w-full flex-col '>sjxnsx</div>
        </Modal>
      )}
    </React.Fragment>
  );
};

const fleetTableHeader = [
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
];

export default Fleet;
