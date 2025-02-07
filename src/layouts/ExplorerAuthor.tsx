import React from 'react';
import Container from '../components/Container';
import Image from '../components/Image';
import Auther from '../assets/auther.png';
import ExplorerAutherCart from '../components/ExplorerAutherCart';
import AutherImage from '../assets/auther1.png';

const ExplorerAuthor: React.FC = () => {
  return (
    <>
      <Container>
        <section>
          <div className="">
            <h3 className="text-[35px] font-bold font-Prompt">
              Explorer Author
            </h3>
            <Image src={Auther} className="mb-10" />
          </div>
          <div className="flex justify-between">
          <div className="">
            <ExplorerAutherCart
              btnText={'Life Style'}
              imgSrc={AutherImage}
              text1="Post"
              text2="50"
              text3="Post Views"
              text4="1,056"
              text5="Like"
              text6="500"
            />
          </div>
          <div className="">
            <ExplorerAutherCart
              btnText={'Life Style'}
              imgSrc={AutherImage}
              text1="Post"
              text2="50"
              text3="Post Views"
              text4="1,056"
              text5="Like"
              text6="500"
            />
          </div>
          <div className="">
            <ExplorerAutherCart
              btnText={'Life Style'}
              imgSrc={AutherImage}
              text1="Post"
              text2="50"
              text3="Post Views"
              text4="1,056"
              text5="Like"
              text6="500"
            />
          </div>
          <div className="">
            <ExplorerAutherCart
              btnText={'Life Style'}
              imgSrc={AutherImage}
              text1="Post"
              text2="50"
              text3="Post Views"
              text4="1,056"
              text5="Like"
              text6="500"
            />
          </div>
          </div>
        </section>
      </Container>
    </>
  );
}

export default ExplorerAuthor;
