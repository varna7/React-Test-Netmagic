import { FaCaretDown } from "react-icons/fa6";
import { BsChevronBarRight, BsChevronBarLeft } from "react-icons/bs";

import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

const PageDetails = () => {
  return (
    <div className="text-right px-4 text-gray-400 d-flex justify-content-end gap-1">
      <p className="flex gap-2 items-center ">
        Raws per page: <span>10</span>
        <FaCaretDown />
      </p>
      <p className="hidden md:block">1-1 of 1</p>
      <p className="flex gap-3 items-center">
        <BsChevronBarLeft />
        <HiOutlineChevronLeft /> <HiOutlineChevronRight /> <BsChevronBarRight />
      </p>
    </div>
  );
};

export default PageDetails;