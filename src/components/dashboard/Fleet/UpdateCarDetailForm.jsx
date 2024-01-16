import React, { useState } from 'react';
import FillButton from '../../shared/Buttons/FillButton';
import Typography from '../../shared/Typography/Typography';

const UpdateCarDetailForm = ({ onClose, updateFormData, onUpdate }) => {
  // console.log("Updated Data", updateFormData.brandModel.brand);
  const [updatedData, setUpdatedData] = useState({
    plateNo: updateFormData.plateNo,
    color: updateFormData.color,
    insuranceExp: updateFormData.insuranceExp,
    itpDate: updateFormData.itpDate,
    mileage: updateFormData.mileage,
    model: updateFormData.model,
    status: updateFormData.status,
    vignetteExp: updateFormData.vignetteExp,
    vin: updateFormData.vin,
    year: updateFormData.year,
    id: updateFormData.id,
    brandModel: {
      brand: updateFormData.brandModel.brand,
      model: updateFormData.brandModel.model,
    },
  });

  const updateFormHandler = () => {
    onUpdate(updatedData);
    onClose();
  };

  return (
    <div className='modal-content py-4 text-left '>
      <div className='flex justify-between items-center pb-2 px-6 '>
        {/* */}
        <div className='flex flex-col gap-1'>
          <h4
            className='font-medium 
         text-[15px] text-[#25A18E]'
          >
            Car Information Card
          </h4>
          <div className='flex gap-4 items-center'>
            <Typography.H2 styles='text-black-main font-bold'>
              Tesla Model Y
            </Typography.H2>
            <p className='text-[#2FB719] w-[52px] h-[13px] border-[1px] capitalize rounded-[60px] text-center border-[#2FB719] bg-[#CBEEBB] text-[8px] font-poppins font-light'>
              Active
            </p>
          </div>
          <h4 className='text-[10px] text-[#B1B1B1] font-normal'>
            Base Information
          </h4>
        </div>
        <div className='modal-close cursor-pointer z-50' onClick={onClose}>
          <svg
            className='fill-current text-[#929292]'
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'
            viewBox='0 0 18 18'
          >
            <path d='M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z'></path>
          </svg>
        </div>
      </div>
      {/*   CONTENT */}
      <div className='px-4 sm:px-6 '>
        <div className='flex py-3 gap-[14px] justify-around flex-col border-solid border-t-[1px] border-[#CECECE] '>
          <div className='flex gap-2 items-center'>
            <Typography.LabelUpdateModal styles='basis-1/6'>
              Plate Number:
            </Typography.LabelUpdateModal>
            <input
              type='text'
              value={updatedData.plateNo}
              onChange={(e) =>
                setUpdatedData({
                  ...updatedData,
                  plateNo: e.target.value,
                })
              }
              className='update-input flex-1 text-[10px] outline-none px-2 py-1 '
            />
          </div>
          <div className='flex gap-2 items-center'>
            <Typography.LabelUpdateModal styles='basis-1/6'>
              Brand:
            </Typography.LabelUpdateModal>
            <input
              type='text'
              value={updatedData.brandModel.brand}
              onChange={(e) =>
                setUpdatedData({
                  ...updatedData,
                  brandModel: {
                    brand: e.target.value,
                    model: updatedData.brandModel.model,
                  },
                })
              }
              className='update-input flex-1 text-[10px] outline-none px-2 py-1  '
            />
          </div>
          <div className='flex gap-2 items-center'>
            <Typography.LabelUpdateModal styles='basis-1/6'>
              Model:
            </Typography.LabelUpdateModal>
            <input
              type='text'
              value={updatedData.brandModel.model}
              onChange={(e) =>
                setUpdatedData({
                  ...updatedData,
                  brandModel: {
                    model: e.target.value,
                    brand: updatedData.brandModel.brand,
                  },
                })
              }
              className='update-input flex-1 text-[10px] outline-none px-2 py-1  '
            />
          </div>
          <div className='flex gap-2 items-center'>
            <Typography.LabelUpdateModal styles='basis-1/6'>
              VIN:
            </Typography.LabelUpdateModal>
            <input
              type='text'
              value={updatedData.vin}
              onChange={(e) =>
                setUpdatedData({
                  ...updatedData,
                  vin: e.target.value,
                })
              }
              className='update-input flex-1 text-[10px] outline-none px-2 py-1  '
            />
          </div>
          {/*         Additional Information */}
          <h4 className='text-[10px] text-[#B1B1B1] font-normal border-b-[1px] border-[#CECECE] border-solid pb-2'>
            Additional Information
          </h4>
          <div className='flex gap-2 items-center'>
            <Typography.LabelUpdateModal styles='basis-1/6'>
              Year:
            </Typography.LabelUpdateModal>
            <input
              type='text'
              className='update-input flex-1 text-[10px] outline-none px-2 py-1  '
            />
          </div>
          <div className='flex gap-2 items-center'>
            <Typography.LabelUpdateModal styles='basis-1/6'>
              Milage:
            </Typography.LabelUpdateModal>
            <input
              type='text'
              className='update-input flex-1 text-[10px] outline-none px-2 py-1  '
            />
          </div>
          <div className='flex gap-2 items-center'>
            <Typography.LabelUpdateModal styles='basis-1/6'>
              Color:
            </Typography.LabelUpdateModal>
            <input
              type='text'
              className='update-input flex-1 text-[10px] outline-none px-2 py-1  '
            />
          </div>
          <div className='flex gap-2 items-center'>
            <Typography.LabelUpdateModal styles='basis-1/6'>
              Vignette Exp:
            </Typography.LabelUpdateModal>
            <input
              type='text'
              className='update-input flex-1 text-[10px] outline-none px-2 py-1  '
            />
          </div>
          <div className='flex gap-2 items-center'>
            <Typography.LabelUpdateModal styles='basis-1/6'>
              ITP Exp:
            </Typography.LabelUpdateModal>
            <input
              type='text'
              className='update-input flex-1 text-[10px] outline-none px-2 py-1  '
            />
          </div>
          <div className='flex gap-2 items-center'>
            <Typography.LabelUpdateModal styles='basis-1/6'>
              Insurance:
            </Typography.LabelUpdateModal>
            <input
              type='text'
              className='update-input flex-1 text-[10px] outline-none px-2 py-1  '
            />
          </div>
        </div>
      </div>
      {/* FOOTER */}
      <div className='flex justify-end pt-2 px-4 sm:px-6'>
        <button
          className='px-4 bg-transparent p-3 rounded-lg text-[#929292] hover:bg-gray-100 hover:[#939293] mr-2'
          onClick={onClose}
        >
          Cancel
        </button>

        <FillButton
          event={updateFormHandler}
          styles='text-[12px] text-white-main font-poppins font-normal w-[91px] h-[24px] my-auto rounded-[7px]'
          type='button'
        >
          Save
        </FillButton>
      </div>
    </div>
  );
};

export default UpdateCarDetailForm;
