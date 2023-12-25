import React from 'react';

export const MediumText = ({ children, styles = 'text-black-main' }) => {
  return (
    <p className={`text-[12px] sm:text-[15px] font-poppins ${styles}`}>
      {children}
    </p>
  );
};

export const NormalText = ({
  children,
  styles = 'text-black-main font-light',
}) => {
  return <p className={`text-[15px] ${styles}`}>{children}</p>;
};

export const Heading1 = ({
  children,
  styles = 'text-black-main font-extrabold',
}) => {
  return <p className={`text-[30px] sm:text-[35px] ${styles}`}>{children}</p>;
};

export const Heading2 = ({ children, styles = 'text-black-main' }) => {
  return <p className={`text-[25px] ${styles}`}>{children}</p>;
};

export const Heading3 = ({ children, styles = 'text-black-main' }) => {
  return <p className={`text-[20px] font-semibold ${styles}`}>{children}</p>;
};

const Typography = {
  MediumText,
  NormalText,
  H1: Heading1,
  H2: Heading2,
  H3: Heading3,
};

export default Typography;
