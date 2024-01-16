import React, { useState } from 'react';
import Typography from '../../shared/Typography/Typography';
import FillButton from '../../shared/Buttons/FillButton';

const UpdateCardDetail = ({ onClose, updateFormData, onUpdate }) => {
  const [updatedData, setUpdatedData] = useState({
    uid: updateFormData.uid,
    vid: updateFormData.vid,
    id: updateFormData.id,
    status: updateFormData.status,
  });

  const updateFormHandler = () => {
    onUpdate(updatedData);
    onClose();
  };

  return (
    <div className='modal-content w-full flex flex-col py-6 sm:py-8 text-left '>
      {/* top header ------>  */}
      <div className='w-full flex justify-between items-center pb-2 px-4 sm:px-6 '>
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
              Card Model
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
            className='fill-current hover:opacity-70 text-[#929292]'
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 18 18'
          >
            <path d='M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z'></path>
          </svg>
        </div>
      </div>
      {/* form --------> */}
      <form className='w-full flex px-4 sm:px-6 pt-4 sm:pt-8 gap-[20px] justify-around flex-wrap'>
        <div className='w-full grid grid-cols-[60px,calc(100%-70px)] sm:grid-cols-[80px,calc(100%-80px)] gap-4'>
          <Typography.LabelText>Card UID</Typography.LabelText>
          <input
            type='text'
            name='uid'
            value={updatedData.uid}
            required
            onChange={(e) =>
              setUpdatedData({
                ...updatedData,
                uid: e.target.value,
              })
            }
            className='border-solid border-[#000000] border-[0.5px] py-2 px-1 h-[19px] flex justify-center items-center w-[95%] text-[10px] focus:outline-none'
          />
        </div>
        <div className='w-full grid grid-cols-[60px,calc(100%-70px)] sm:grid-cols-[80px,calc(100%-80px)] gap-4'>
          <Typography.LabelText>Vehicle ID</Typography.LabelText>
          <input
            type='text'
            name='plateNumber'
            value={updatedData.vid}
            required
            onChange={(e) =>
              setUpdatedData({
                ...updatedData,
                vid: e.target.value,
              })
            }
            className='border-solid border-[#000000]  border-[0.5px] px-1 h-[19px] flex justify-center items-center py-2 w-[95%] text-[10px] focus:outline-none'
          />
        </div>
        {/* buttons */}
        <div className='w-full flex justify-end pt-1 border-solid '>
          <button
            type='button'
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
      </form>
    </div>
  );
};

export default UpdateCardDetail;
