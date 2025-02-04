import type React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

interface EntirePrevArrowProps {
  className?: string;
  onClick?: () => void;
}

const EntirePrevArrow: React.FC<EntirePrevArrowProps> = ({
  className,
  onClick,
}) => {
  return (
    <div
      className={`${className} text-2xl rounded-2xl w-12 h-12 border absolute right-[20%] top-[87%] flex items-center justify-center cursor-pointer bg-red text-white transition-all duration-1000 z-10`}
      onClick={onClick}
    >
      <FaLongArrowAltRight />
    </div>
  );
};

export default EntirePrevArrow;
