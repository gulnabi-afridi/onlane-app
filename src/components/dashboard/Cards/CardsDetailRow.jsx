import React from 'react';
import Typography from '../../shared/Typography/Typography';

const CardsDetailRow = ({ row, selectedRow, setSelectedRow }) => {
  return (
    <div className='w-full min-w-[450px] grid min-h-[36px] rounded-[4px] px-3 grid-cols-[.1fr,1.7fr,1.2fr,1fr] md:grid-cols-[.1fr,1.3fr,1fr,1fr] justify-center items-center  gap-2 sm:gap-0'>
      <button
        onClick={() => setSelectedRow(row.id)}
        className={`w-[15px] h-[15px] ${
          selectedRow === row.id
            ? 'bg-[#0094FF] outline outline-[#737373] outline-offset-2 outline-[1px]'
            : 'bg-transparent  border-[1px] border-[#737373]'
        } rounded-full `}
      ></button>

      <Typography.NormalText styles='text-success-main font-poppins font-light pl-4 overflow-x-auto'>
        {row.uid}
      </Typography.NormalText>

      <Typography.NormalText styles='text-black-main font-poppins font-light overflow-x-auto'>
        {row.vid}
      </Typography.NormalText>

      <p
        className={`${
          row.status === 'Active'
            ? 'text-[#2FB719] border-[#2FB719] bg-[#CBEEBB]'
            : 'text-[#E8971E] border-[#E8971E] bg-[#EEDABB]'
        } w-[52px] h-[13px] border-[1px] capitalize rounded-[60px] text-center  text-[8px] font-poppins font-light`}
      >
        {row.status}
      </p>
    </div>
  );
};

export default CardsDetailRow;
