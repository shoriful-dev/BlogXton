import React from 'react';
import Container from '../components/Container';
import Image from '../components/Image';
import Article from '../assets/Article.png';
import LatestArticleCart from '../components/LatestArticleCart';
import LatestImage1 from '../assets/LatestImageOne.png';
import LatestImage2 from '../assets/banner4.png';
import Badge from '../components/Badge';
import { LuClock, LuDot } from 'react-icons/lu';
import { FaArrowRightLong } from 'react-icons/fa6';
import Zim from "../assets/Zim.png";
import { Link } from 'react-router-dom';

const LatestArticle: React.FC = () => {
  return (
    <>
      <Container>
        <section>
          <div className="mt-10 mb-14">
            <h3 className="font-bold font-Prompt text-[35px] pb-2">
              Latest Article
            </h3>
            <Image src={Article} alt="Latest Logo" />
          </div>
          <div className="mb-10 flex justify-between">
            <Link to={'/post'}>
              <div>
                <LatestArticleCart
                  imgSrc={LatestImage1}
                  btnText="Creative"
                  title="Our Begin Now To Beingonan You Wokajon Beinghe."
                />
              </div>
            </Link>
            <div className="w-[320px] h-[447px] relative">
              <Link to={'/blog'}>
                <Badge
                  btnText={'Life Style'}
                  className="font-Prompt py-1 px-4 absolute left-1/2 -translate-x-1/2 mt-2"
                />
              </Link>
              <div className="w-[90%] mx-auto border mt-14 rounded-lg flex justify-between items-center px-3">
                <div className="flex items-center space-x-2">
                  <h3 className="text-[12px] font-medium font-Inter">
                    By Luke Julian
                  </h3>
                </div>
                <span>
                  <LuDot className="text-red text-xl" />
                </span>
                <div className="flex items-center space-x-2">
                  <h3 className="text-[12px] font-medium font-Inter">
                    Nov 22, 2022
                  </h3>
                </div>
                <span>
                  <LuDot className="text-red text-xl" />
                </span>
                <div className="flex items-center space-x-2">
                  <h3 className="text-[12px] font-medium font-Inter">
                    1.5k View
                  </h3>
                </div>
              </div>
              <h3 className="text-[22px] font-semibold font-Prompt mt-5 hover:text-red transition-all duration-300 px-5">
                <Link to={'/post'}>
                  <h3 className="text-center">
                    ullamcorper dolor Proinol augue dolor.
                  </h3>
                </Link>
              </h3>
              <div className="flex justify-between px-7 pt-5">
                <div className="flex space-x-3 items-center">
                  <p className="font-medium font-Prompt text-red">
                    View Details
                  </p>
                  <FaArrowRightLong className="text-red" />
                </div>
                <div className="flex space-x-2 items-center">
                  <LuClock className="text-[#101010]" />
                  <p className="text-sm font-medium font-Inter text-[#101010]">
                    5 Min Read
                  </p>
                </div>
              </div>
              <div className="overflow-hidden mt-5 justify-center flex">
                <Link to={'/post'}>
                  <Image
                    src={Zim}
                    alt=""
                    className="w-[208px] h-[208px] rounded-full hover:scale-110 duration-300 transition-transform"
                  />
                </Link>
              </div>
            </div>
            <Link to={'/post'}>
              <div className="">
                <LatestArticleCart
                  imgSrc={LatestImage2}
                  btnText="Travel"
                  title="Uncharted Horizons: Discovering New Destinations."
                />
              </div>
            </Link>
          </div>
        </section>
      </Container>
    </>
  );
};

export default LatestArticle;
