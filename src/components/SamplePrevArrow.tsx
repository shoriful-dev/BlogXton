import React from 'react';
import { FaChevronLeft } from 'react-icons/fa6';

interface SamplePrevArrowProps {
  className?: string;
  onClick: () => void;
}

const SamplePrevArrow: React.FC<SamplePrevArrowProps> = ({ className = '', onClick }) => {
  return (
    <div
      className={`${className} text-2xl rounded-2xl w-12 h-12 border absolute left-16 top-[45%] flex items-center justify-center cursor-pointer bg-red text-white active:scale-150 duration-500 z-10`}
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );
};

export default SamplePrevArrow;
