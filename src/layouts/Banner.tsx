import BannerCart from "../components/BannerCart";
import RoundImage1 from "../assets/round1.png";

const Banner = () => {
  return (
    <>
      <div className="">
        <BannerCart imgSrc={RoundImage1} btnText="Travel"/>
      </div>
    </>
  );
}

export default Banner;
