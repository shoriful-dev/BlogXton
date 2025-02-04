import React from 'react';
import { FaChevronRight } from 'react-icons/fa6';

interface SampleNextArrowProps {
  className?: string;
  onClick: () => void
}

const SampleNextArrow: React.FC<SampleNextArrowProps> = ({className = '', onClick }) => {
  return (
    <div
      className={`${className} text-2xl rounded-2xl w-12 h-12 border absolute right-16 top-[45%] flex items-center justify-center cursor-pointer bg-red text-white active:scale-150 duration-500 z-10`}
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );
};

export default SampleNextArrow;
