import type React from 'react';
import { useRef } from 'react';
import BannerCart from '../components/BannerCart';
import RoundImage1 from '../assets/round1.png';
import RoundImage2 from '../assets/round2.png';
import RoundImage3 from '../assets/round3.png';
import RoundImage4 from '../assets/round4.png';
import RoundImage5 from '../assets/round5.png';
import RoundImage6 from '../assets/round6.png';
import RoundImage7 from '../assets/round7.png';
import RoundImage8 from '../assets/round8.png';
import BannerImage1 from '../assets/banner1.png';
import BannerImage2 from '../assets/banner2.png';
import BannerImage3 from '../assets/banner3.png';
import BannerImage4 from '../assets/banner4.png';
import BannerImage5 from '../assets/banner5.png';
import BannerImage6 from '../assets/banner6.png';
import BannerImage7 from '../assets/banner7.png';
import BannerImage8 from '../assets/banner8.png';
import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import '../index.css';
import SampleNextArrow from '../components/SampleNextArrow';
import SamplePrevArrow from '../components/SamplePrevArrow';

const bannerData = [
  { roundImg: RoundImage1, bannerImg: BannerImage1, btnText: 'Interior' },
  { roundImg: RoundImage2, bannerImg: BannerImage2, btnText: 'Foodest' },
  { roundImg: RoundImage3, bannerImg: BannerImage3, btnText: 'Life Style' },
  { roundImg: RoundImage4, bannerImg: BannerImage4, btnText: 'Tour' },
  { roundImg: RoundImage5, bannerImg: BannerImage5, btnText: 'Green Land' },
  { roundImg: RoundImage6, bannerImg: BannerImage6, btnText: 'Foods' },
  { roundImg: RoundImage7, bannerImg: BannerImage7, btnText: 'Sports' },
  { roundImg: RoundImage8, bannerImg: BannerImage8, btnText: 'Travel' },
];

const Banner: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const settings = {
    className: 'cursor-controlled-slider',
    centerMode: true,
    infinite: true,
    centerPadding: '200px',
    slidesToShow: 3,
    speed: 1000,
    autoplay: true,
    draggable: false,
    swipe: false,
    pauseOnHover: true,
    nextArrow: (
      <SampleNextArrow onClick={() => sliderRef.current?.slickNext()} />
    ),
    prevArrow: (
      <SamplePrevArrow onClick={() => sliderRef.current?.slickPrev()} />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: '40px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '40px',
        },
      },
    ],
  };

  return (
    <div className="overflow-hidden">
      <Slider ref={sliderRef} {...settings}>
        {bannerData.map((banner, index) => (
          <Link to={'/post'} key={index}>
            <div className="px-2">
              <BannerCart
                imgSrc={banner.roundImg}
                btnText={banner.btnText}
                bannerImage={banner.bannerImg}
              />
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
