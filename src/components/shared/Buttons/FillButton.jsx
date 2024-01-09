import React from "react";

const FillButton = ({
  children,
  event = (e) => {},
  type = "button",
  styles = "font-samRoboto px-4 py-2 bg-success-main text-[16px] sm:text-[20px] font-semibold text-white-main",
}) => {
  return (
    <button
      onClick={event}
      type={type}
      className={`${styles} hover:opacity-80 active:translate-y-[2px] bg-success-main`}
    >
      <p className="tracking-wide">{children}</p>
    </button>
  );
};

export default FillButton;
