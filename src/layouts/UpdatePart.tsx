import React from 'react';
import Container from '../components/Container';
import Image from '../components/Image';
import UpdateImage from '../assets/update.png';
import ManImage from '../assets/ManImage.png';

const UpdatePart: React.FC = () => {
  return (
    <>
      <Container>
        <div className="bg-[#F7E8E1] py-20 relative mb-[100px] rounded-3xl">
          <div className="w-[75%]">
            <div className="flex justify-center">
              <Image src={UpdateImage} />
            </div>
            <div className="flex justify-center pt-5">
              <h3 className="w-[608px] font-Prompt font-bold text-[40px] text-center">
                Become An Author And Share Your Great Stories.
              </h3>
            </div>
            <div className="flex justify-center mt-10">
              <button className="relative text-lg font-medium font-Prompt py-3 px-10 bg-red-500 text-white bg-red rounded-lg overflow-hidden group">
                <span className="relative z-10 transition-colors duration-500">
                  Become An Author
                </span>
                <div className="absolute inset-0 bg-black transform scale-x-0 origin-right transition-transform duration-500 ease-in-out group-hover:scale-x-100"></div>
              </button>
            </div>
          </div>
          <div className="absolute top-[6px] right-5">
            <Image src={ManImage}/>
          </div>
        </div>
      </Container>
    </>
  );
};

export default UpdatePart;
