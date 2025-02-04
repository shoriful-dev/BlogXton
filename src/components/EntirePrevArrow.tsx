import React from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';

interface EntirePrevArrowProps {
  className?: string;
  onClick: () => void
}

const EntirePrevArrow: React.FC<EntirePrevArrowProps> = ({className, onClick}) => {
  return (
    <div
      className={`${className} text-2xl rounded-2xl w-12 h-12 border absolute right-[24%] top-[87%] flex items-center justify-center cursor-pointer hover:bg-red group hover:text-white transition-all duration-1000 z-20`}
      onClick={onClick}
    >
      <FaLongArrowAltLeft />
    </div>
  );
};

export default EntirePrevArrow;
