import React, { useEffect } from 'react';

import ComponentWrapper from '../Wrappers/ComponentWrapper';

const CustomModal = ({
  isOpen,
  setIsOpen,
  children,
  styles = ' md:w-[795px] md:max-w-[800px]',
}) => {
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleOverlayClick = () => {
    if (isOpen) {
      toggleModal();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-active');
    } else {
      document.body.classList.remove('modal-active');
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className='modal fixed w-full h-full top-0 left-0 flex items-center justify-center '>
          <div
            className='modal-overlay absolute w-full h-full bg-gray-900 opacity-50 border'
            onClick={handleOverlayClick}
          ></div>

          <div
            className={`${styles} modal-container bg-[#ffffff] w-[95%] mx-auto rounded shadow-lg z-50 modal-rounded`}
          >
            <ComponentWrapper>{children}</ComponentWrapper>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomModal;
