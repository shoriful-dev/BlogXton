import Container from '../components/Container';
import Image from '../components/Image';
import EntireLogo from '../assets/Category.png';
import EntireTopicCart from '../components/EntireTopicCart';
import Fashion from '../assets/Fashion.png';
import Travel from '../assets/Travel.png';
import Photography from '../assets/Phothography.png';
import Fitness from '../assets/Fitness.png';
import RealState from '../assets/RealState.png';
import LifeStyle from '../assets/LifeStyle.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import EntireNextArrow from '../components/EntireNextArrow';
import EntirePrevArrow from '../components/EntirePrevArrow';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const Entirecartdata = [
  {
    imgSrc: Fashion,
    title: 'Fashion',
    text1: '800 Article',
    text2: '3.9k View',
  },
  { imgSrc: Travel, title: 'Travel', text1: '700 Article', text2: '1.6k View' },
  {
    imgSrc: Photography,
    title: 'Photography',
    text1: '600 Article',
    text2: '3.2k View',
  },
  {
    imgSrc: Fitness,
    title: 'Fitness',
    text1: '400 Article',
    text2: '3.1k View',
  },
  {
    imgSrc: RealState,
    title: 'Real State',
    text1: '400 Article',
    text2: '3.1k View',
  },
  {
    imgSrc: LifeStyle,
    title: 'Life Style',
    text1: '400 Article',
    text2: '3.1k View',
  },
];

const EntireTopic: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <div className="flex justify-between items-center pt-20 mb-4">
        <div className="flex-col space-y-3">
          <h3 className="text-[35px] font-Prompt font-bold">Entire Topic</h3>
          <Image
            src={EntireLogo || '/placeholder.svg'}
            alt="Entire Logo"
            className=""
          />
        </div>
        <div className="flex space-x-4 group">
          <EntirePrevArrow onClick={() => sliderRef.current?.slickPrev()} />
          <EntireNextArrow onClick={() => sliderRef.current?.slickNext()} />
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <Slider ref={sliderRef} {...settings}>
            {Entirecartdata.map((card, index) => (
          <Link to={'/blog'}>
              <div key={index} className="px-1">
                <EntireTopicCart
                  imgSrc={card.imgSrc}
                  title={card.title}
                  text1={card.text1}
                  text2={card.text2}
                />
              </div>
          </Link>
            ))}
        </Slider>
      </div>
    </Container>
  );
};

export default EntireTopic;
