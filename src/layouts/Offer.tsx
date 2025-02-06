import React from 'react';
import Container from '../components/Container';
import Image from '../components/Image';
import HomeImage from "../assets/Home.png";
import { Link } from 'react-router-dom';

const Offer: React.FC = () => {
  return (
    <>
      <Container>
        <div className="py-[100px]">
          <Link to={'/contact'}>
            <Image src={HomeImage} />
          </Link>
        </div>
      </Container>
    </>
  );
}

export default Offer;
