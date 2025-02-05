import React from 'react';
import Container from '../components/Container';
import Image from '../components/Image';
import { Link } from 'react-router-dom';
import Logo from '../assets/darkLogo.svg';
import FooterTop from '../components/FooterTop';
import Cat from '../assets/cat.png';
import Zim from '../assets/footerZim.png';
import { RiFacebookFill } from 'react-icons/ri';
import { FaPinterestP, FaTwitter } from 'react-icons/fa6';
import { IoLogoInstagram } from 'react-icons/io';

const Footer: React.FC = () => {
  return (
    <section>
      <FooterTop />
      <div className="bg-FooterBG h-[537px] py-10">
        <Container>
          <footer className="w-full bg-white pt-8 px-4 md:px-6">
            <div className="max-w-[1170px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-8">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <div className="">
                    <Image src={Logo} />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-[29px] font-semibold font-Prompt w-[267px]">
                    We Would Love To Hear From You.
                  </h3>
                  <p className="text-red text-[15px] font-semibold font-Inter">
                    Any question for us?
                  </p>
                  <div className="flex space-x-2 relative">
                    <input
                      type="text"
                      placeholder="Enter Your Email..."
                      className="max-w-[270px] border-b outline-none"
                    />
                    <button className="underline underline-offset-2 text-red absolute right-[168px] text-[11px] font-semibold font-Inter">
                      Send
                    </button>
                  </div>
                </div>
              </div>

              {/* Middle Column */}
              <div className="space-y-6">
                <h3 className="text-[22px] font-Prompt font-medium text-red">
                  Top Article This Week
                </h3>
                <div className="space-y-5">
                  <div className="flex space-x-3 items-center w-[320px]">
                    <div>
                      <Image src={Cat} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-base font-Prompt w-[195px]">
                        Our Begin Now To Being What You Will Be.
                      </h4>
                      <div className="flex items-center text-sm text-gray-500 space-x-2">
                        <span className="text-xs font-medium font-Inter">
                          Nov 02, 2023
                        </span>
                        <span className="text-red">•</span>
                        <span className="text-xs font-medium font-Inter">
                          593 Comment
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-3 items-center w-[320px]">
                    <div>
                      <Image src={Zim} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-base font-Prompt w-[195px]">
                        Our Begin Now To Being What You Will Be.
                      </h4>
                      <div className="flex items-center text-sm text-gray-500 space-x-2">
                        <span className="text-xs font-medium font-Inter">
                          Nov 02, 2023
                        </span>
                        <span className="text-red">•</span>
                        <span className="text-xs font-medium font-Inter">
                          593 Comment
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-5">
                  <h3 className="text-[22px] font-Prompt text-red font-medium">
                    Quick Link
                  </h3>
                  <nav className="flex flex-col space-y-2">
                    {['About', 'Topic', 'Post', 'Feature', 'Contact'].map(
                      item => (
                        <Link
                          to={'/'}
                          key={item}
                          className="group flex items-center text-[17px] font-Inter hover:translate-x-4 transition-all duration-500 text-gray-400 hover:text-black"
                        >
                          <span className="opacity-0 -ml-4 mr-2 text-red group-hover:opacity-100 transition-opacity duration-500">
                            •
                          </span>
                          {item}
                        </Link>
                      )
                    )}
                  </nav>
                </div>
                <div className="space-y-5">
                  <h3 className="text-[22px] font-Prompt text-red font-medium">
                    Social Media
                  </h3>
                  <nav className="flex flex-col space-y-4">
                    {[
                      { name: 'FACEBOOK', icon: <RiFacebookFill size={16} /> },
                      { name: 'TWITTER', icon: <FaTwitter size={16} /> },
                      {
                        name: 'PINTEREST',
                        icon: <FaPinterestP size={16} />,
                      },
                      {
                        name: 'INSTAGRAM',
                        icon: <IoLogoInstagram size={16} />,
                      },
                    ].map(social => (
                      <Link
                        to={''}
                        key={social.name}
                        className="group flex items-center space-x-2 text-gray-600 hover:text-red"
                      >
                        <div className="relative w-8 h-8 overflow-hidden rounded-full border border-gray-300">
                          <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full">
                            {social.icon}
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                            <span className="text-xs font-semibold">3.5K</span>
                          </div>
                        </div>
                        <span className="transition-colors duration-300 ease-in-out group-hover:text-red-500">
                          {social.name}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="max-w-[1170px] mx-auto mt-16 pt-4 border-t border-b pb-4">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <Link
                  to={''}
                  className="text-red text-xl font-medium font-Prompt"
                >
                  Help Center
                </Link>
                <nav className="flex items-center space-x-6 text-sm text-gray-600">
                  <Link
                    to={''}
                    className="text-xs font-medium font-Inter hover:text-red"
                  >
                    PRIVACY POLICY
                  </Link>
                  <Link
                    to={''}
                    className="text-xs font-medium font-Inter hover:text-red"
                  >
                    TERMS & CONDITIONS
                  </Link>
                  <Link
                    to={''}
                    className="text-xs font-medium font-Inter hover:text-red"
                  >
                    SERVICES
                  </Link>
                  <Link
                    to={''}
                    className="text-xs font-medium font-Inter hover:text-red"
                  >
                    HELP
                  </Link>
                </nav>
              </div>
            </div>
            <div className="text-center text-[13px] font-Prompt pt-12">
              © 2023 Blogxton Is Proudly Powered By
              <span className="text-red text-[13px] font-Prompt">
                Egons Lab
              </span>
            </div>
          </footer>
        </Container>
      </div>
    </section>
  );
};

export default Footer;
