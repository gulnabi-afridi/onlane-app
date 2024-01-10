import React from 'react';

const ComponentWrapper = ({ styles = '', children }) => {
  return (
    <div className={`w-full ${styles}`}>
      <div className='w-full h-full max-w-[1500px] m-auto md:px-0 px-2'>
        {children}
      </div>
    </div>
  );
};

export default ComponentWrapper;
