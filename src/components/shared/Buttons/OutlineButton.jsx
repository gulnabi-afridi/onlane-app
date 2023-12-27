import React from 'react';

const OutlineButton = ({
  children,
  event = (e) => {},
  type = 'button',
  styles = '',
}) => {
  return (
    <button
      onClick={event}
      type={type}
      className={`${styles} hover:opacity-80 active:translate-y-[2px] border-[1px] border-success-main`}
    >
      <p className='tracking-wide'>{children}</p>
    </button>
  );
};

export default OutlineButton;
