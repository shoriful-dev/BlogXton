import React from 'react';
import Container from '../components/Container';
import Image from '../components/Image';
import { Link } from 'react-router-dom';
import FooterTop from '../components/FooterTop';

const Footer: React.FC = () => {
  return (
    <>
      <FooterTop />
      <div className="bg-FooterBG h-[537px] py-14">
        <Container>
          <div className=""></div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
