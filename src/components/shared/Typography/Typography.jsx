import React from 'react';

export const MediumText = ({ text }) => {
  return <p className='text-[15px] font-normal '></p>;
};

export const LightText = ({ text }) => {
  return <p className='text-[15px] font-extralight '></p>;
};

export const NormalText = ({ text }) => {
  return <p className='text-[15px] font-light'></p>;
};

export const Heading1 = ({ text }) => {
  return <p className='text-[35px] font-extrabold'></p>;
};

export const Heading2 = ({ text }) => {
  return <p className='text-[25px] font-semibold'></p>;
};

const Typography = {
  MediumText,
  LightText,
  NormalText,
  H1: Heading1,
  H2: Heading2,
};

export default Typography;
