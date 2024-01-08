import React from 'react';

const Modal = ({ setIsOpen, children, sizes = 'w-[450px] min-h-[150px]' }) => {
  // Function to handle overlay click
  const handleOverlayClick = (e) => {
    setIsOpen(false);
  };

  // Function to prevent clicks inside the modal from closing it
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className='fixed inset-0 z-50 overflow-y-auto overflow-x-hidden'>
      <div className='flex items-center justify-center min-h-screen'>
        {/* Overlay */}
        <div
          onClick={handleOverlayClick}
          className='fixed inset-0 bg-black bg-opacity-50'
        ></div>

        {/* Modal Content */}
        <div
          onClick={handleModalClick}
          className={`relative ${sizes} bg-white rounded-lg shadow px-4 py-4 sm:py-7 mx-4`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
