import "../App.css";
import BgImage from "../assets/banner.jpg";

const Hero = () => {
  return (
    <div>
      <div
        className="py-[150px] bg-cover bg-center"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        <div className="w-10/12 my-0 mx-auto flex flex-col items-center">
          <p className="text-white mb-[5px]">We grow aromatic coffee.</p>
          <h1 className="text-white text-[60px] font-semibold text-center leading-[1.2]">
            Coffee from the Best <br /> Sunny Plantations
          </h1>
          <button className="bg-Green1 hover:bg-Green2 py-2.5 px-7 text-white rounded-[50px] mt-[30px]">
            About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
