import React from 'react';
import Container from './Container';
import Image from './Image';
import ExplorerAutherHoverCart from './ExplorerAutherHoverCart';

interface ExplorerAutherCartProps {
  className?: string;
  btnText: string;
  imgSrc: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string
}

const ExplorerAutherCart: React.FC<ExplorerAutherCartProps> = ({
  btnText,
  imgSrc,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
}) => {
  return (
    <>
      <Container>
        <div className="w-[270px] h-[311px] border rounded-2xl mb-24">
          <button
            className="font-Prompt italic w-[95px]
            h-[26px] bg-red text-white text-xs font-medium rounded-tl rounded-br rounded-lg"
          >
            {btnText}
          </button>
          <div className="flex justify-center pt-o">
            <Image src={imgSrc} className="rounded-full mt-[-5px]" />
          </div>
          <h3 className="text-2xl font-semibold font-Prompt text-center pt-5">
            Mateo Danienobi
          </h3>
          <div className="pt-5 relative group">
            <div className="flex justify-between px-8">
              <p className="font-Prompt">{text1}</p>
              <p className="font-Prompt">{text2}</p>
            </div>
            <div className="w-[77%] h-[1px] mx-auto my-3 bg-gray-300"></div>
            <div className="flex justify-between px-8">
              <p className="font-Prompt">{text3}</p>
              <p className="font-Prompt">{text4}</p>
            </div>
            <div className="w-[77%] h-[1px] mx-auto my-3 bg-gray-300"></div>
            <div className="flex justify-between px-8">
              <p className="font-Prompt">{text5}</p>
              <p className="font-Prompt">{text6}</p>
            </div>
            <div className="absolute left-0 bottom-[-100px] opacity-0 group-hover:opacity-100 group-hover:bottom-[-10px] group-hover:bg-white duration-500">
              <ExplorerAutherHoverCart />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ExplorerAutherCart;
