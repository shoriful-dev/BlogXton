import React from 'react';
import Image from './Image';
import { FaGripLinesVertical } from 'react-icons/fa6';

interface EntireTopicCartProps {
  imgSrc: string;
  title: string;
  text1: string;
  text2: string
}

const EntireTopicCart: React.FC<EntireTopicCartProps> = ({imgSrc, title, text1, text2}) => {
  return (
    <>
      <div className="w-[270px] h-[245px] rounded-lg border shadow-lg mb-10 mt-10 overflow-hidden">
        <Image src={imgSrc} alt="Category" className='hover:scale-110 transition-transform duration-300 ease-in-out'/>
        <h3 className="text-2xl font-medium font-Prompt text-center pt-5 hover:text-red duration-700">
          {title}
        </h3>
        <div className="flex items-center justify-center space-x-3 pt-3">
          <p className='font-Inter text-[13px] font-medium'>{text1}</p>
          <span>
            <FaGripLinesVertical className='text-red'/>
          </span>
          <p className='font-Inter text-[13px] font-medium'>{text2}</p>
        </div>
      </div>
    </>
  );
}

export default EntireTopicCart;
