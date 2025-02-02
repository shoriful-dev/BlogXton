import BannerRound from './BannerRound';
import Badge from './Badge';
import { LuClock, LuDot } from 'react-icons/lu';
import { FaArrowRightLong } from 'react-icons/fa6';

const BannerCart = ({imgSrc = '', btnText = ''}) => {
  return (
    <>
      <div className="bg-BannerImage1 w-[490px] h-[541px] border bg-cover rounded-md relative group">
        <BannerRound ImgSrc={imgSrc} className="relative" />
        <div className="px-5">
          <Badge btnText={btnText} className="bottom-36 absolute" />
          <h3 className="text-[30px] font-semibold font-Prompt text-white bottom-10 absolute">
            Our Begin Now To Beingonan You Wokajon Beinghe.
          </h3>
        </div>
        <div className="w-[490px] h-[210px] absolute bottom-[-50px] opacity-0 group-hover:opacity-100 group-hover:bottom-0 duration-500 group-hover:bg-white">
          <div className="w-[400px] ml-10 border mt-5 rounded-lg flex justify-between items-center px-3">
            <div className="flex items-center space-x-2">
              <h3 className="text-[15px] font-medium font-Inter">
                By Luke Julian
              </h3>
            </div>
            <span>
              <LuDot className="text-red text-xl" />
            </span>
            <div className="flex items-center space-x-2">
              <h3 className="text-[15px] font-medium font-Inter">
                Nov 22, 2022
              </h3>
            </div>
            <span>
              <LuDot className="text-red text-xl" />
            </span>
            <div className="flex items-center space-x-2">
              <h3 className="text-[15px] font-medium font-Inter">2.8k View</h3>
            </div>
          </div>
          <h3 className="text-[30px] font-semibold font-Prompt text-center pt-3 hover:text-red transition-all duration-300">
            Our Begin Now To Beingonan You Wokajon Beinghe.
          </h3>
          <div className="flex justify-between px-7 pt-3">
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
      </div>
    </>
  );
};

export default BannerCart;
