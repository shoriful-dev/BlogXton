import React from 'react';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa6';

interface ExplorerAutherHoverCartProps {
  className?: string
}

const ExplorerAutherHoverCart: React.FC<ExplorerAutherHoverCartProps> = () => {
  return (
    <>
        <div className="w-[260px] h-[311px] p-6 space-y-10">
          <div className="space-y-5">
            {/* Facebook */}
            <div className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-2">
                <div className="bg-black transition-colors p-2 rounded-full">
                  <FaFacebook className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-600 hover:underline">
                  FACEBOOK
                </span>
              </div>
              <span className="text-sm text-gray-900">
                3.5K Like
              </span>
            </div>

            {/* Twitter */}
            <div className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-2">
                <div className="bg-black transition-colors p-2 rounded-full">
                  <BsTwitter className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-600 hover:underline">
                  TWITTER
                </span>
              </div>
              <span className="text-sm text-gray-900">
                60k Follower
              </span>
            </div>

            {/* Pinterest */}
            <div className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-2">
                <div className="bg-black transition-colors p-2 rounded-full">
                  <svg
                    className="w-4 h-4 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0a12 12 0 0 0-4.37 23.17c-.1-.937-.2-2.38.043-3.41.217-.937 1.407-5.965 1.407-5.965s-.36-.72-.36-1.78c0-1.67.97-2.916 2.173-2.916 1.024 0 1.518.769 1.518 1.688 0 1.03-.653 2.567-.992 3.992-.283 1.195.598 2.169 1.777 2.169 2.133 0 3.772-2.25 3.772-5.495 0-2.873-2.064-4.882-5.013-4.882-3.414 0-5.418 2.562-5.418 5.208 0 1.031.397 2.137.893 2.739.098.119.112.223.083.345-.091.379-.293 1.194-.333 1.361-.053.219-.174.265-.402.16-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146A12 12 0 1 0 12 0" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-600 hover:underline">
                  PINTEREST
                </span>
              </div>
              <span className="text-sm text-gray-900">
                25k Follower
              </span>
            </div>

            {/* Instagram */}
            <div className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-2">
                <div className="bg-black transition-colors p-2 rounded-full">
                  <BsInstagram className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-600 hover:underline">
                  INSTAGRAM
                </span>
              </div>
              <span className="text-sm text-gray-900">
                75k Follower
              </span>
            </div>
          </div>

          {/* View Details Button */}
          <div className="flex justify-center">
            <button className="text-[#FF4E64] hover:text-[#ff3551] transition-colors text-sm font-medium hover:underline">
              View Details →
            </button>
          </div>
        </div>
    </>
  );
}

export default ExplorerAutherHoverCart;
