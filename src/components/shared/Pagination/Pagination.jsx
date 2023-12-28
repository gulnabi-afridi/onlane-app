import React from 'react';

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
    <div className='w-full flex justify-between items-center'>
      <p className='text-[15px] text-black-main font-poppins'>
        <span className='font-bold'> Items: </span>5 out of 5
      </p>
      <div className='flex justify-center items-center gap-3'>
        {/* items per page ---->  */}
        <div className='flex justify-center items-center gap-2'>
          <p className='text-[12px] text-black-main font-normal font-poppins'>
            Items/ page:
          </p>
          <input
            type='number'
            className='w-[75px] h-[20px] rounded-sm border-[1px] text-[12px] border-black-main focus:outline-none px-1'
          />
        </div>
        <div className='flex items-center justify-center'>
          <button
            className='mx-1 px-2 py-[2px] select-none text-gray-500 bg-white rounded-md border border-gray-300 hover:bg-gray-100'
            disabled={currentPage === 1}
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          >
            {'<'}
          </button>
          {pages.map((page, index) => (
            <button
              key={index}
              className={`mx-1 px-2 py-[2px] ${
                currentPage === page
                  ? 'bg-success-main text-black-main'
                  : 'text-black-main bg-white'
              } rounded-md border border-gray-300 hover:bg-gray-100`}
              onClick={() => page !== '...' && onPageChange(page)}
              disabled={page === '...'}
            >
              {page}
            </button>
          ))}
          <button
            className='mx-1 px-2 py-[2px] select-none text-gray-500 bg-white rounded-md border border-gray-300 hover:bg-gray-100'
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          >
            {'>'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
