import React from "react";

export const MediumText = ({ children, styles = "text-black-main" }) => {
  return (
    <p className={`text-[12px] sm:text-[15px] font-poppins ${styles}`}>
      {children}
    </p>
  );
};

export const NormalText = ({
  children,
  styles = "text-black-main font-light",
}) => {
  return (
    <p className={`text-[12px] sm:text-[13px] md:text-[14px]  ${styles}`}>
      {children}
    </p>
  );
};

export const LabelText = ({
  children,
  styles = "text-black-main font-normal",
}) => {
  return <label className={` text-[12px]  ${styles}`}>{children}</label>;
};

export const LabelUpdateModal = ({ children, styles }) => {
  return (
    <label className={`text-[10px] ${styles} font-normal text-black-main`}>
      {children}
    </label>
  );
};

export const Heading1 = ({
  children,
  styles = "text-black-main font-extrabold",
}) => {
  return <p className={`text-[30px] sm:text-[35px] ${styles}`}>{children}</p>;
};

export const Heading2 = ({ children, styles = "text-black-main" }) => {
  return (
    <p className={`text-[18px] sm:text-[22px] md:text-[25px] ${styles}`}>
      {children}
    </p>
  );
};

export const Heading3 = ({
  children,
  styles = "text-black-main font-semibold",
}) => {
  return <p className={`text-[20px]  ${styles}`}>{children}</p>;
};

const Typography = {
  MediumText,
  NormalText,
  LabelText,
  LabelUpdateModal,
  H1: Heading1,
  H2: Heading2,
  H3: Heading3,
};

export default Typography;
