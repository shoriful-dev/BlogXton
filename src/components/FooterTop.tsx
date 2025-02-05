import React from 'react';
import Container from '../components/Container';
import Image from '../components/Image';
import Shape from '../assets/Shape.png';
import { BiSolidSend } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const FooterTop: React.FC = () => {
  return (
    <>
      <div className="bg-[#F8F7F5] py-16 h-[456px] relative">
        <Container>
          <div className="">
            <div className="">
              <Image src={Shape} alt="Shape" />
            </div>
            <div className="absolute top-[30%] -translate-x-1/2 left-1/2 text-center">
              <h3 className="text-[40px] font-bold font-Inter w-[790px] ">
                Get the best blog stories into your inbox Connect Us now.
              </h3>
              <div className="mt-10 flex relative">
                <input
                  type="text"
                  placeholder="Enter Your Email..."
                  className="w-[600px] h-[56px] rounded-l-3xl outline-none px-5"
                />
                <div className="flex items-center space-x-1 absolute right-10 w-[150px] h-[56px] border-l bg-white rounded-r-3xl justify-center hover:bg-red hover:text-white duration-500 transition-all">
                  <Link to={'/contact'}>
                    <button className="text-[13px] font-medium font-Inter ">
                      Subscribe
                    </button>
                  </Link>
                  <BiSolidSend className="mt-1" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default FooterTop;
