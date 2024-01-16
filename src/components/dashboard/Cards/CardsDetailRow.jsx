import React, { useEffect } from 'react';
import Typography from '../../shared/Typography/Typography';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { EditIcon } from '../../../svg/Icons';

const CardsDetailRow = ({
  row,
  selectedRow,
  setSelectedRow,
  showEditMenu,
  setShowEditMenu,
  onOpenUpdateModal,
}) => {
  const toggleEditMenu = (id, e) => {
    e.stopPropagation();
    setShowEditMenu((prev) => (prev === id ? null : id));
  };

  const openUpdateModalHandler = (id) => {
    onOpenUpdateModal(id);
  };

  //  useEffect for closing the menu ---------->
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (showEditMenu && e.target.closest('.edit-menu') === null) {
        setShowEditMenu(null);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [showEditMenu, setShowEditMenu]);

  return (
    <div className='w-full min-w-[450px] grid min-h-[36px] rounded-[4px] px-3 grid-cols-[.1fr,1.7fr,1.2fr,1fr,20px] md:grid-cols-[.1fr,1.3fr,1fr,1fr,20px] justify-center items-center  gap-2 sm:gap-0'>
      <button
        onClick={() => setSelectedRow(row.id)}
        className={`w-[15px] h-[15px] ${
          selectedRow === row.id
            ? 'bg-[#0094FF] outline outline-[#737373] outline-offset-2 outline-[1px]'
            : 'bg-transparent  border-[1px] border-[#737373]'
        } rounded-full `}
      ></button>

      <Typography.NormalText styles='text-success-main font-poppins font-light pl-4 overflow-x-auto'>
        {row.uid}
      </Typography.NormalText>

      <Typography.NormalText styles='text-black-main font-poppins font-light overflow-x-auto'>
        {row.vid}
      </Typography.NormalText>
      <div className='w-full flex justify-start '>
        <p
          className={`${
            row.status === 'Active'
              ? 'text-[#2FB719] border-[#2FB719] bg-[#CBEEBB]'
              : 'text-[#E8971E] border-[#E8971E] bg-[#EEDABB]'
          } w-[52px] h-[13px] border-[1px] capitalize rounded-[60px] text-center  text-[8px] font-poppins font-light`}
        >
          {row.status}
        </p>
      </div>
      <div className='flex justify-center rows-center'>
        <div className='relative'>
          <HiOutlineDotsVertical
            className='text-black-main text-[18px] hover:opacity-70 cursor-pointer -z-1'
            onClick={(e) => toggleEditMenu(row.id, e)}
          />
          <div
            className={`${
              showEditMenu === row.id ? 'flex' : 'hidden'
            }  absolute edit-menu right-0 top-[10px] mt-2 space-y-2 px-0 flex justify-center items-center sm:px-6 w-[70px] sm:w-[90px] py-[5px] sm:py-2 bg-[#ffffff] z-10 border border-gray-200 rounded-md shadow-lg`}
          >
            <div
              className='flex items-center cursor-pointer gap-1 sm:gap-[6px] hover:opacity-80'
              onClick={() => openUpdateModalHandler(row.id)}
            >
              <EditIcon ClassName='w-[10px] sm:w-[12px] h-[10px] sm:h-[12px]' />
              <span className='text-[10px] sm:text-[12px] font-normal text-black-main'>
                Edit
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsDetailRow;
