import React, { useState } from 'react';
import Typography from '../Typography/Typography';
import FillButton from '../Buttons/FillButton';

const AddCardDetailForm = ({ onClose, onSubmit }) => {
  const [uid, setUid] = useState('');
  const [vid, setVid] = useState('');

  //     ERROR STATE
  const [error, setError] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();

    let errorText = '';
    if (!uid) {
      errorText += ' UID';
    }
    if (!vid) {
      errorText += ' VID';
    }

    if (errorText !== '') {
      setError(`Please fill these fields ${errorText}`);
      return;
    }

    const formData = {
      uid,
      vid,
      status: 'Active',
    };

    onSubmit(formData);
  };

  return (
    <div className='modal-content py-4 text-left'>
      <form
        className='flex justify-between items-center pb-3 px-6 border-solid border-b-[.5px] border-[#939393]'
        onSubmit={submitHandler}
      >
        <Typography.H3 styles='text-black-main font-extrabold '>
          Add new Card
        </Typography.H3>
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
      </form>
      {/*   CONTENT */}
      <div className='px-6'>
        <div className='flex  py-8  gap-[20px] justify-around flex-wrap'>
          <div className='flex flex-col gap-2 '>
            <div className='flex flex-col gap-1'>
              <Typography.LabelText>Card UID</Typography.LabelText>
              <input
                type='text'
                name='uid'
                value={uid}
                required
                onChange={(e) => setUid(e.target.value)}
                className='border-solid border-[#000000] border-[0.5px] py-2 px-1 h-[19px] flex justify-center items-center w-[258px] text-[10px] focus:outline-none'
              />
            </div>
          </div>
          <div className='flex flex-col gap-2 '>
            <div className='flex flex-col gap-1'>
              <Typography.LabelText>Vehicle ID</Typography.LabelText>
              <input
                type='text'
                name='plateNumber'
                value={vid}
                required
                onChange={(e) => setVid(e.target.value)}
                className='border-solid border-[#000000]  border-[0.5px] px-1 h-[19px] flex justify-center items-center py-2 w-[258px] text-[10px] focus:outline-none'
              />
            </div>
          </div>
        </div>
        {/* ERROR MESSAGE */}
        <div className='flex justify-center items-center'>
          <Typography.NormalText styles='text-red-500 text-center'>
            {error}
          </Typography.NormalText>
        </div>
      </div>
      {/* FOOTER */}
      <div className='flex justify-end pt-2 px-6 border-solid border-t-[.5px] border-[#939393]'>
        <button
          className='px-4 bg-transparent p-3 rounded-lg text-[#929292] hover:bg-gray-100 hover:[#939293] mr-2'
          onClick={onClose}
        >
          Cancel
        </button>

        <FillButton
          event={submitHandler}
          styles='text-[12px] text-white-main font-poppins font-normal w-[91px] h-[24px] my-auto rounded-[7px]'
          type='button'
        >
          Save
        </FillButton>
      </div>
    </div>
  );
};

export default AddCardDetailForm;
