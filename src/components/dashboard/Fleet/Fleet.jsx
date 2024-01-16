'use client';

import React, { useState } from 'react';
import Typography from '../../shared/Typography/Typography';
import SearchBar from '../../shared/Inputs/SearchBar';
import FillButton from '../../shared/Buttons/FillButton';
import OutlineButton from '../../shared/Buttons/OutlineButton';
import Pagination from '../../shared/Pagination/Pagination';
import CarDetailRow from './CarDetailRow';
import CarDetailHeader from './CarDetailHeader';
import CustomModal from '../../shared/Modal/CustomModal';
import AddCarDetailForm from '../../dashboard/Fleet/AddCarDetailForm';
import UpdateCarDetailForm from '../../dashboard/Fleet/UpdateCarDetailForm';
import { SearchIcon } from '../../../svg/Icons';

const Fleet = () => {
  // states ------->
  const [currentPage, setCurrentPage] = React.useState(1);
  const [selectedRow, setSelectedRow] = useState(2);
  const [addCarDetailModal, setAddCarDetailModal] = useState(false);
  const [showEditMenu, setShowEditMenu] = useState(null);

  const [updateCardDetailModal, setUpdateCartDetailModal] = useState(false);
  const [updateFormData, setUpdateFormData] = useState(null);

  const totalPages = 10;

  // states ends here ----->

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
      insuranceExp: '22 Nov 2022',
      vignetteExp: '10 Apr 2024',
      mileage: 'Mileage',
      vin: '1HGBH41JXMN1091861HGBH41JXMN109186',
      itpDate: '10 Apr 2024',
    },
  ]);

  // methods ------->
  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  // methods ends here ------->
  const addCarModalHandler = () => {
    setShowEditMenu(null);
    setAddCarDetailModal(true);
  };

  const closeAddCarModalHandler = () => {
    setAddCarDetailModal(false);
  };

  const updateCarModalHandler = (id) => {
    const selectedCar = carData.find((car) => car.id === id);
    setUpdateFormData(selectedCar);
    setUpdateCartDetailModal(true);
  };
  const closeUpdateCarModalHandler = () => {
    setUpdateCartDetailModal(false);
  };

  const addCarDataHandler = (formData) => {
    const newCarData = [...carData];
    const newCarEntry = {
      id: newCarData.length + 1,
      plateNo: formData.plateNo,
      brandModel: {
        brand: formData.brandModel.brand,
        model: formData.brandModel.model,
      },
      model: formData.model,
      year: formData.year,
      color: formData.color,
      status: formData.status,
      insuranceExp: formData.insuranceExp,
      vignetteExp: formData.vignetteExp,
      mileage: formData.mileage,
      vin: formData.vin,
      itpDate: formData.itpDate,
    };

    newCarData.push(newCarEntry);
    setCarData(newCarData);
    closeAddCarModalHandler();
  };

  const deleteCarHandler = () => {
    setShowEditMenu(null);
    const updatedCarData = carData.filter((item) => item.id !== selectedRow);
    setCarData(updatedCarData);
  };

  const updateCarDataHandler = (updatedCarData) => {
    // Find the index of the item with the matching id
    const index = carData.findIndex((car) => car.id === updatedCarData.id);

    // If the item is found, update the array, otherwise add the new data
    if (index !== -1) {
      const updatedData = [...carData];
      updatedData[index] = updatedCarData;
      setCarData(updatedData);
    } else {
      // If the item is not found, you can handle it according to your requirements
      console.error('Item with id', updatedCarData.id, 'not found.');
    }
  };

  return (
    <React.Fragment>
      <div className='w-full flex flex-col h-full px-2 md:px-4 lg:px-8'>
        <div className='flex flex-col min-h-[150px] lg:min-h-[190px] justify-between'>
          <Typography.H1 styles='text-black-main font-extrabold pt-2 lg:pt-12'>
            Fleet Management
          </Typography.H1>
          {/* top header ----->  */}
          <div className='w-full flex justify-between md:gap-0 gap-4 items-center flex-wrap pl-0 sm:pl-6 pb-4'>
            {/* search bar -->  */}
            <div className='w-auto flex justify-center items-center gap-2'>
              <button>
                <SearchIcon />
              </button>
              <SearchBar />
            </div>
            {/* delete + add button --->  */}
            <div className='sm:w-auto w-full flex justify-end sm:justify-center items-center gap-2 md:gap-3'>
              <OutlineButton
                event={deleteCarHandler}
                styles='text-[12px] font-poppins w-[91px] font-normal h-[24px] rounded-[7px] text-success-main'
              >
                Delete
              </OutlineButton>
              <FillButton
                event={addCarModalHandler}
                styles='text-[12px] text-white-main font-poppins font-normal w-[91px] h-[24px] rounded-[7px]'
              >
                Add
              </FillButton>
            </div>
          </div>
        </div>
        {/* table ------>  */}
        <div className='w-full overflow-auto'>
          <div className='w-full max-w-[1100px] overflow-auto flex justify-start h-[calc(100vh-230px)] lg:h-[calc(100vh-270px)] flex-col'>
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
                  onOpenUpdateModal={updateCarModalHandler}
                  showEditMenu={showEditMenu}
                  setShowEditMenu={setShowEditMenu}
                />
              );
            })}
          </div>
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

      <CustomModal setIsOpen={setAddCarDetailModal} isOpen={addCarDetailModal}>
        <AddCarDetailForm
          onClose={closeAddCarModalHandler}
          onSubmit={addCarDataHandler}
        />
      </CustomModal>

      {/*     Update Modal  */}
      <CustomModal
        setIsOpen={setUpdateCartDetailModal}
        isOpen={updateCardDetailModal}
        styles='md:w-[499px] md:max-w-[520px] h-[80%] my-auto overflow-y-scroll'
      >
        <UpdateCarDetailForm
          onClose={closeUpdateCarModalHandler}
          updateFormData={updateFormData}
          onUpdate={updateCarDataHandler}
        />
      </CustomModal>
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
