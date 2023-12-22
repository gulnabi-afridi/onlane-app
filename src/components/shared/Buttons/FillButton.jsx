import React from 'react';
import Typography from '../Typography/Typography';

const FillButton = ({
  children,
  event = (e) => {},
  styles = 'font-samRoboto px-4 py-2 bg-success-main',
}) => {
  return (
    <button
      onClick={event}
      className={`${styles} hover:opacity-80 active:translate-y-[2px]`}
    >
      <p className='text-[20px] font-semibold text-white-main'>{children}</p>
    </button>
  );
};

export default FillButton;
