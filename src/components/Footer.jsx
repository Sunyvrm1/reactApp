import "../App.css";
import logo from "../assets/logo-footer.webp";

const Footer = () => {
  return (
    <div className="py-[100px] bg-[#222]">
      <div className="w-10/12 my-0 mx-auto grid grid-cols-1 justify-items-center gap-[40px]">
        <img src={logo} alt="" />
        <nav>
          <ul className="flex gap-[30px]">
            <li>
              <a href="#" className="text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-[20px]">
          <div className="border-[1px] border-[#fff4] border-solid p-[10px] w-[45px] h-[45px] flex justify-center items-center rounded-[50%]">
            <i class="fa-brands fa-facebook-f text-white text-[20px]"></i>
          </div>
          <div className="border-[1px] border-[#fff4] border-solid p-[10px] w-[45px] h-[45px] flex justify-center items-center rounded-[50%]">
            <i class="fa-brands fa-twitter text-white text-[20px]"></i>
          </div>
          <div className="border-[1px] border-[#fff4] border-solid p-[10px] w-[45px] h-[45px] flex justify-center items-center rounded-[50%]">
            <i class="fa-brands fa-instagram text-white text-[20px]"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
