import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Image from "../components/Image";
import ErrorImage from "../assets/pngwingcom.png";
import { FaHome } from "react-icons/fa";


const Error = () => {
  return (
    <div className="bg-ErrorBG bg-[#fffaf0] h-[750px] py-">
      <Container>
        <div className="flex items-center justify-center">
          <Image src={ErrorImage} className="w-[400px] h-[400px]" />
        </div>
        <h2 className="text-center font-Prompt text-lg text-gray-400">
          Sorry, The page you are looking for was removed, renamed or might
          never existed
        </h2>
        <div className="flex justify-center mt-20">
          <Link to={'/'}>
            <button className="relative text-lg font-medium font-Prompt py-3 px-10 text-white bg-red rounded-lg overflow-hidden group">
              <span className="relative z-10 transition-colors duration-500 flex items-center gap-x-2">
                <FaHome />
                Back to Home
              </span>
              <div className="absolute inset-0 bg-black transform scale-x-0 origin-right transition-transform duration-500 ease-in-out group-hover:scale-x-100"></div>
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Error;
