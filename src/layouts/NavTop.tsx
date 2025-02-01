import Container from "../components/Container";
import Image from "../components/Image";
import Logo from "../assets/Logo.png";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";

const NavTop = () => {
  return (
    <>
      <div className="bg-black py-4 invisible lg:visible">
        <Container>
          <nav className="flex justify-between items-center">
            <div className="flex space-x-5">
              <h3 className="text-[13px] font-Prompt text-white">
                Novembar 30, 2022
              </h3>
              <h3 className="text-[13px] font-light font-Prompt text-white">
                28°C
              </h3>
            </div>
            <div className="">
              <Image src={Logo} alt="blogxton logo" />
            </div>
            <div className="flex space-x-5">
              <div className="text-white flex space-x-2 items-center">
                <FaFacebookF className="hover:text-red transition-all duration-300 cursor-pointer" />
                <p className="font-light font-Prompt text-[13px]">3.5k</p>
              </div>
              <div className="text-white flex space-x-2 items-center">
                <IoLogoTwitter className="hover:text-red transition-all duration-300 cursor-pointer" />
                <p className="font-light font-Prompt text-[13px]">2.1k</p>
              </div>
              <div className="text-white flex space-x-2 items-center">
                <FaPinterestP className="hover:text-red transition-all duration-300 cursor-pointer" />
                <p className="font-light font-Prompt text-[13px]">1.9k</p>
              </div>
              <div className="text-white flex space-x-2 items-center">
                <GrInstagram className="hover:text-red transition-all duration-300 cursor-pointer" />
                <p className="font-light font-Prompt text-[13px]">5.5k</p>
              </div>
            </div>
          </nav>
        </Container>
      </div>
    </>
  );
}

export default NavTop;
