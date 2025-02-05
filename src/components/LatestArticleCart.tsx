import React from 'react';
import Container from './Container';
import Image from './Image';
import Badge from './Badge';
import { LuClock, LuDot } from 'react-icons/lu';
import { FaArrowRightLong } from 'react-icons/fa6';

interface LatestArticleProps {
  className?: string;
  imgSrc: string;
  btnText: string;
  title: string
}

const LatestArticleCart: React.FC<LatestArticleProps> = ({ imgSrc, btnText, title }) => {
  return (
    <>
      <Container>
        <div className="w-[370px] h-[458px] border relative overflow-hidden">
          <Image src={imgSrc} alt="" className='hover:scale-110 duration-300 transition-transform'/>
          <Badge
            btnText={btnText}
            className="bg-red absolute top-5 left-5 px-4"
          />
          <div className="w-[90%] mx-auto border mt-10 rounded-lg flex justify-between items-center px-3">
            <div className="flex items-center space-x-2">
              <h3 className="text-[13px] font-medium font-Inter">
                By Luke Julian
              </h3>
            </div>
            <span>
              <LuDot className="text-red text-xl" />
            </span>
            <div className="flex items-center space-x-2">
              <h3 className="text-[13px] font-medium font-Inter">
                Nov 22, 2022
              </h3>
            </div>
            <span>
              <LuDot className="text-red text-xl" />
            </span>
            <div className="flex items-center space-x-2">
              <h3 className="text-[13px] font-medium font-Inter">1.5k View</h3>
            </div>
          </div>
          <h3 className="text-[22px] font-semibold font-Prompt mt-5 hover:text-red transition-all duration-300 px-5">
            {title}
          </h3>
          <div className="flex justify-between px-7 pt-5">
            <div className="flex space-x-3 items-center">
              <p className="font-medium font-Prompt text-red">View Details</p>
              <FaArrowRightLong className="text-red" />
            </div>
            <div className="flex space-x-2 items-center">
              <LuClock className="text-[#101010]" />
              <p className="text-sm font-medium font-Inter text-[#101010]">
                5 Min Read
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default LatestArticleCart;
