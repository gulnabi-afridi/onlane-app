import React, { useState } from "react";
import Typography from "../Typography/Typography";
import CustomSelectBox from "../Inputs/SelectBox";
import CustomDatePicker from "../Inputs/DatePicker";
import FillButton from "../Buttons/FillButton";
import { extractYearFromDate, formatDate } from "../../utils/formateDate";

const AddCarDetailForm = ({ onClose, onSubmit }) => {
  const [plateNo, setPlateNo] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [insuranceExp, setInsuranceExp] = useState("");
  const [vignetteExp, setVignetteExp] = useState("");
  const [mileage, setMileage] = useState("");
  const [vin, setVin] = useState("");
  const [itpDate, setItpDate] = useState("");

  const [error, setError] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();

    let errorText = "";
    if (plateNo === "") {
      errorText += "Plate No";
    }
    if (!year) {
      errorText += " Year";
    }
    if (!brand) {
      errorText += " Brand";
    }
    if (!model) {
      errorText += " Model";
    }
    if (!color) {
      errorText += " Color";
    }
    if (!insuranceExp) {
      errorText += " Insurance Exp";
    }
    if (!vignetteExp) {
      errorText += " Vignette Expire";
    }
    if (!mileage) {
      errorText += " Mileage";
    }
    if (!vin) {
      errorText += " Vin";
    }
    if (!itpDate) {
      errorText += " ItpDate";
    }

    if (errorText !== "") {
      setError(`Please fill these fields ${errorText}`);
      return;
    }

    const formatedYear = extractYearFromDate(year);
    const formatedVignetteExp = formatDate(vignetteExp);
    const formateItpDate = formatDate(itpDate);
    const formData = {
      plateNo,
      brandModel: {
        brand,
        model,
      },
      model,
      year: formatedYear,
      color,
      status: "active",
      insuranceExp,
      vignetteExp: formatedVignetteExp,
      mileage,
      vin,
      itpDate: formateItpDate,
    };
    onSubmit(formData);
  };
  const brandHandler = (e) => {
    setBrand(e.target.value);
  };
  const colorHandler = (e) => {
    setColor(e.target.value);
  };

  const modelHandler = (e) => {
    setModel(e.target.value);
  };
  return (
    <div className="modal-content py-4 text-left">
      <form
        className="flex justify-between items-center pb-3 px-6 border-solid border-b-[.5px] border-[#939393]"
        onSubmit={submitHandler}
      >
        <Typography.H3 styles="text-black-main font-extrabold ">
          Add new Car
        </Typography.H3>
        <div className="modal-close cursor-pointer z-50" onClick={onClose}>
          <svg
            className="fill-current text-[#929292]"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
          </svg>
        </div>
      </form>
      {/*   CONTENT */}
      <div className="px-6">
        <div className="flex  py-8  gap-[20px] justify-around flex-wrap">
          <div className="flex flex-col gap-2 ">
            <div className="flex flex-col gap-1">
              <Typography.LabelText>Plate Number:</Typography.LabelText>
              <input
                type="text"
                name="plateNumber"
                value={plateNo}
                required
                onChange={(e) => setPlateNo(e.target.value)}
                className="border-solid border-[#000000]  border-[0.5px]   px-2 py-2 h-[17px] w-[258px] text-[10px] focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Typography.LabelText>Brand:</Typography.LabelText>
              <CustomSelectBox
                name="brand"
                value={brand}
                onChange={brandHandler}
                options={[
                  { value: "dacia", label: "Dacia" },
                  {
                    value: "option",
                    label: "Option",
                  },
                  {
                    value: "option2",
                    label: "Option2",
                  },
                ]}
              />
            </div>
            <div className="flex flex-col gap-1">
              <Typography.LabelText>Model:</Typography.LabelText>
              <CustomSelectBox
                name="model"
                options={[
                  { value: "spring", label: "Spring" },
                  {
                    value: "option",
                    label: "Option",
                  },
                  {
                    value: "option2",
                    label: "Option2",
                  },
                ]}
                value={model}
                onChange={modelHandler}
              />
            </div>
            <div className="flex flex-col gap-1">
              <Typography.LabelText>Year:</Typography.LabelText>
              <CustomDatePicker
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <Typography.LabelText>Color:</Typography.LabelText>
              <CustomSelectBox
                name="color"
                value={color}
                options={[
                  { value: "white", label: "White" },
                  { value: "red", label: "Red" },
                  { value: "green", label: "Green" },
                ]}
                onChange={colorHandler}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <Typography.LabelText>
                Insurance Expiry Date:
              </Typography.LabelText>
              <input
                value={insuranceExp}
                onChange={(e) => setInsuranceExp(e.target.value)}
                type="text"
                required
                className="border-solid border-[#000000] border-[0.5px]   px-2 py-2 h-[17px] w-[258px] text-[10px] focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Typography.LabelText>Vignette Expiry Date:</Typography.LabelText>
              <CustomDatePicker
                value={vignetteExp}
                onChange={(e) => setVignetteExp(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <Typography.LabelText>Milage:</Typography.LabelText>
              <input
                type="text"
                className="border-solid border-[#000000] border-[0.5px]   px-2 py-2 h-[17px] w-[258px] text-[10px] focus:outline-none"
                value={mileage}
                required
                onChange={(e) => setMileage(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <Typography.LabelText>VIN Number:</Typography.LabelText>
              <input
                value={vin}
                onChange={(e) => setVin(e.target.value)}
                type="text"
                required
                className="border-solid border-[#000000] border-[0.5px]   px-2 py-2 h-[17px] w-[258px] text-[10px] focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Typography.LabelText>ITP Date:</Typography.LabelText>
              <CustomDatePicker
                value={itpDate}
                onChange={(e) => setItpDate(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/*  Error Messgae */}
        {error && (
          <div className="flex justify-center items-center">
            <Typography.NormalText styles="text-red-500 text-center">
              {error}
            </Typography.NormalText>
          </div>
        )}
      </div>
      {/* FOOTER */}
      <div className="flex justify-end pt-2 px-6 border-solid border-t-[.5px] border-[#939393]">
        <button
          className="px-4 bg-transparent p-3 rounded-lg text-[#929292] hover:bg-gray-100 hover:[#939293] mr-2"
          onClick={onClose}
        >
          Cancel
        </button>

        <FillButton
          event={submitHandler}
          styles="text-[12px] text-white-main font-poppins font-normal w-[91px] h-[24px] my-auto rounded-[7px]"
          type="button"
        >
          Save
        </FillButton>
      </div>
    </div>
  );
};

export default AddCarDetailForm;
