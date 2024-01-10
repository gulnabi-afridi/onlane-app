import React, { useState } from "react";
import Typography from "../../shared/Typography/Typography";
import SearchBar from "../../shared/Inputs/SearchBar";
import OutlineButton from "../../shared/Buttons/OutlineButton";
import FillButton from "../../shared/Buttons/FillButton";
import { SearchIcon } from "../../../svg/Icons";
import CardsDetailHeader from "./CardsDetailHeader";
import CardsDetailRow from "./CardsDetailRow";
import Pagination from "../../shared/Pagination/Pagination";
import CustomModal from "../../shared/Modal/CustomModal";
import AddCardDetailForm from "../../shared/Forms/AddCardDetailForm";

const Cards = () => {
  //   STATES ============>
  const [currentPage, setCurrentPage] = React.useState(1);
  const [selectedRow, setSelectedRow] = useState(null);
  const [showAddCardDetailModal, setShowAddCarDetailModal] = useState(false);

  const totalPages = 10;

  //   DATA ==============>

  const [cardData, setCardData] = useState([
    {
      id: 1,
      uid: "3A7B1F9C",
      vid: "B-233-XYZ",
      status: "Active",
    },
    {
      id: 2,
      uid: "6D2E8F5A19BC7D",
      vid: "PH-45-ABC",
      status: "Active",
    },
    {
      id: 3,
      uid: "AB8D3E5F26741H2J9K6L",
      vid: "CJ-78-DEF",
      status: "Inactive",
    },
    {
      id: 4,
      uid: "0B5A4C8D3E2F1G7H96IJKL",
      vid: "TM-12-GHI",
      status: "Active",
    },
    {
      id: 5,
      uid: "2F7A1E5C9B3D6A0F4B8E",
      vid: "IS-56-JKL",
      status: "Active",
    },
  ]);

  const cardDetailHeaderData = {
    uid: "UID",
    vid: "Vehicle ID",
    status: "Status",
  };

  //    methods ============>
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const addCardModalHandler = () => {
    setShowAddCarDetailModal(true);
  };

  const closeAddCardModalHandler = () => {
    setShowAddCarDetailModal(false);
  };

  //   Adding Data in rows
  const addCardDataHandler = (formData) => {
    const newCardData = {
      id: cardData.length + 1,
      uid: formData.uid,
      vid: formData.vid,
      status: formData.status,
    };
    setCardData([...cardData, newCardData]);
    closeAddCardModalHandler();
  };

  //   DELETING DATA FROM ROWS
  const deleteCardDataHandler = () => {
    const updatedCardData = cardData.filter((row) => row.id !== selectedRow);
    setCardData(updatedCardData);
  };
  return (
    <>
      <div className="w-full flex flex-col h-full px-8">
        <div className="flex flex-col min-h-[190px] justify-between">
          <Typography.H1 styles="text-black-main font-extrabold pt-2 lg:pt-12">
            Cards
          </Typography.H1>
          {/* top header ----->  */}
          <div className="w-full flex sm:justify-between items-center pl-6 pb-4 flex-wrap gap-y-4 ">
            {/* search bar -->  */}
            <div className="flex gap-2 items-center">
              <SearchIcon />
              <SearchBar />
            </div>
            {/* delete + add button --->  */}
            <div className="flex justify-center items-center gap-3">
              <OutlineButton
                event={deleteCardDataHandler}
                styles="text-[12px] font-poppins w-[100px] sm:w-[91px] font-normal h-[24px] rounded-[7px] text-success-main"
              >
                Delete
              </OutlineButton>
              <FillButton
                event={addCardModalHandler}
                styles="text-[12px] text-white-main font-poppins font-normal w-[100px] sm:w-[91px] h-[24px] rounded-[7px]"
              >
                Add
              </FillButton>
            </div>
          </div>
        </div>
        {/*   TABLE   ===================>*/}
        <div className="w-full h-[calc(100vh-270px)] flex flex-col">
          {/*   HEADER ===================> */}
          <CardsDetailHeader header={cardDetailHeaderData} />
          {/*   ROW ===============> */}
          {cardData.map((row) => (
            <CardsDetailRow
              row={row}
              key={row.id}
              selectedRow={selectedRow}
              setSelectedRow={setSelectedRow}
            />
          ))}
        </div>
        {/* pagination -------->  */}
        <div className="w-full h-[80px] flex justify-center items-start pt-4 px-4 border-t-[1px] border-[#CECECE]">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </div>
      </div>
      {/*     ADD Modal */}
      <CustomModal
        isOpen={showAddCardDetailModal}
        setIsOpen={setShowAddCarDetailModal}
      >
        <AddCardDetailForm
          onClose={closeAddCardModalHandler}
          onSubmit={addCardDataHandler}
        />
      </CustomModal>
    </>
  );
};

export default Cards;
