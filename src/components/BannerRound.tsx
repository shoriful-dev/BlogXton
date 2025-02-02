import { ReactNode } from "react";


interface BadgeRoundProps {
  className?: string;
  ImgSrc: ReactNode;
}

const BannerRound: React.FC<BadgeRoundProps> = ({ className = '', ImgSrc }) => {
  return <img className={`w-12 h-12 rounded-full border-4 border-white mt-5 mr-5 ml-auto ${className}`} src={ImgSrc as string} />;
};

export default BannerRound;
