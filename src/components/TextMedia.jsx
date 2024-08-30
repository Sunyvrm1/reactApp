import "../App.css";
import BgImage from "../assets/bgImg.jpg";
import Tm1 from "../assets/tm1.jpg";
import Tm2 from "../assets/tm2.jpg";

const TextMedia = () => {
  return (
    <div
      className="py-[100px] bg-cover bg-center"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="w-10/12 my-0 mx-auto grid grid-cols-2 items-center gap-[40px]">
        <div>
          <p className="text-[#b98d58] font-medium">What We Do</p>
          <h2 className="text-[40px] font-medium leading-[1.2] my-[10px]">
            We Produce Unique Coffee Flavors
          </h2>
          <p>
            We invite you every day to enjoy the incredibly delicious coffee
            drinks of our institution, prepared especially for you. Enjoy a
            delicious espresso, flat white or cappuccino in our delightful
            location.
          </p>
          <button className="bg-Green1 hover:bg-Green2 py-2.5 px-8 text-white rounded-[50px] mt-[30px]">
            About Us
          </button>
        </div>
        <div>
          <img src={Tm1} alt="" className="w-[100%] h-[30%]" />
        </div>
      </div>

      {/* tm2 */}

      <div className="w-10/12 my-0 mx-auto grid grid-cols-2 items-center gap-[40px] mt-[100px]">
        <div>
          <img src={Tm2} alt="" className="" />
        </div>
        <div>
          <p className="text-[#b98d58] font-medium">Our Product</p>
          <h2 className="text-[40px] font-medium leading-[1.2] my-[10px]">
            We Produce Blends of Aromatic Coffee
          </h2>
          <p>
            Natural coffee is grown on sunny plantations. We have blended it
            with various additives that give the coffee a unique taste. Try our
            coffee once, you won’t want another!
          </p>
          <button className="bg-Green1 hover:bg-Green2 py-2.5 px-8 text-white rounded-[50px] mt-[30px]">
            About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextMedia;
