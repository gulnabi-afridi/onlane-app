import React from 'react';
import { MdExpandMore } from 'react-icons/md';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const siblingCount = 1;
  const totalBlocks = 2 * siblingCount + 3;

  const paginationRange = () => {
    const pages = [];

    if (totalPages <= 4) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    if (currentPage <= 3) {
      for (let i = 1; i <= 3; i++) {
        pages.push(i);
      }
      pages.push('...');
      pages.push(totalPages);
    } else if (currentPage > totalPages - 3) {
      pages.push(1);
      pages.push('...');
      for (let i = totalPages - 2; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      pages.push('...');
      pages.push(currentPage - 1);
      pages.push(currentPage);
      pages.push(currentPage + 1);
      pages.push('...');
      pages.push(totalPages);
    }

    return pages;
  };
  const pages = paginationRange();

  return (
    <div className='w-full h-full flex justify-between items-center'>
      <p className='text-[12px] md:text-[15px] text-black-main font-poppins'>
        <span className='font-bold'> Items: </span>5 out of 5
      </p>
      <div className='flex sm:flex-row flex-col-reverse justify-center items-center gap-3 sm:gap-2 md:gap-3'>
        {/* items per page ---->  */}
        <div className='flex justify-center items-center gap-1 md:gap-2'>
          <p className='text-[10px] md:text-[12px] text-black-main font-normal font-poppins'>
            Items/ page:
          </p>
          <input
            type='number'
            className='w-[60px] md:w-[75px] h-[15px] md:h-[20px] rounded-sm border-[1px] text-[12px] border-black-main focus:outline-none px-1'
          />
        </div>
        <div className='flex items-center justify-center'>
          <button
            className='mx-[2px] md:mx-1 w-[20px] sm:w-[25px] md:w-[30px] h-[20px] sm:h-[25px] md:h-[30px] select-none flex justify-center items-center text-gray-500 bg-white rounded-md border border-gray-300 hover:bg-gray-100'
            disabled={currentPage === 1}
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          >
            <MdExpandMore className='text-[22px] -rotate-90' />
          </button>
          {pages.map((page, index) => (
            <button
              key={index}
              className={`mx-[2px] md:mx-1 w-[20px] sm:w-[25px] md:w-[30px] h-[20px] sm:h-[25px] md:h-[30px] flex justify-center items-center ${
                currentPage === page
                  ? 'bg-success-main text-black-main'
                  : 'text-black-main bg-white'
              } rounded-md border text-[12px] md:text-[16px] border-gray-300 hover:bg-gray-100`}
              onClick={() => page !== '...' && onPageChange(page)}
              disabled={page === '...'}
            >
              {page}
            </button>
          ))}
          <button
            className='mx-[2px] md:mx-1 w-[20px] sm:w-[25px] md:w-[30px] h-[20px] sm:h-[25px] md:h-[30px] select-none flex justify-center items-center text-gray-500 bg-white rounded-md border border-gray-300 hover:bg-gray-100'
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          >
            <MdExpandMore className='text-[22px] -rotate-90' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
