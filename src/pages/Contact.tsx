import React from 'react';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa6';
import { IoCall } from 'react-icons/io5';
import { TfiEmail } from 'react-icons/tfi';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <div className="w-full max-w-[1170px] mx-auto px-4 py-[100px]">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6 border py-10 px-10">
          <h2 className="text-5xl font-bold font-Prompt">Contact Us</h2>
          <p className="text-muted-foreground text-xl font-Inter">
            Morbi quis elementum ex, id commodo odio. In maximus, augue europea
            vestibulum gomat.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-20">
            <Link
              to={'/'}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FaFacebook className="h-10 w-10 hover:text-blue-500 duration-300 transition-all" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              to={'/'}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <BsTwitter className="h-10 w-10 hover:text-blue-400 duration-300 transition-all" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              to={'/'}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <BsInstagram className="h-10 w-10 hover:text-red duration-300 transition-all" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>

          {/* Contact Details */}
          <div className="space-y-5">
            <div className="flex space-x-5 items-center pt-5">
              <div className="border border-red w-12 h-12 rounded-full items-center justify-center flex">
                <IoCall className="text-2xl text-red" />
              </div>
              <div className="">
                <div className="text-gray-400 font-Inter hover:text-red">
                  +880 566 1111 985
                </div>
                <div className="text-gray-400 font-Inter hover:text-red">
                  +880 657 1111 576
                </div>
              </div>
            </div>
            <div className="flex space-x-5 items-center pt-2">
              <div className="border border-red w-12 h-12 rounded-full items-center justify-center flex">
                <TfiEmail className="text-2xl text-red" />{' '}
              </div>
              <div className="">
                <div className="text-gray-400 font-Inter hover:text-red">
                  info@example.com
                </div>
                <div className="text-gray-400 font-Inter hover:text-red">
                  info@support.com
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold font-Inter">Have Any Questions</h2>
          <form className="space-y-10">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full py-3 border outline-none px-5 rounded-lg focus-within:border-red"
            />
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full py-3 border outline-none px-5 rounded-lg focus-within:border-red"
              />
              <input
                type="text"
                placeholder="Enter Your Subject"
                className="w-full py-3 border outline-none px-5 rounded-lg focus-within:border-red"
              />
            </div>
            <textarea
              placeholder="Enter Your Message"
              className="min-h-[150px] w-full border outline-none py-5 px-5 rounded-lg focus-within:border-red"
            />
          </form>
          <div className="">
            <button className="relative text-lg font-medium font-Prompt py-3 px-10 text-white bg-red rounded-lg overflow-hidden group">
              <span className="relative z-10 transition-colors duration-500">
                Send Massage
              </span>
              <div className="absolute inset-0 bg-black transform scale-x-0 origin-right transition-transform duration-500 ease-in-out group-hover:scale-x-100"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
