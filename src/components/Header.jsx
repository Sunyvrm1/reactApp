import "../App.css";
import logo from "../assets/logo-dark.webp";

const Header = () => {
  return (
    <div className="py-[25px] bg-slate-200">
      <div className="w-10/12 my-0 mx-auto grid grid-cols-3 items-center">
        <nav>
          <ul className="flex gap-[30px]">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="logo flex justify-center">
          <img src={logo} alt="" />
        </div>
        <div className="flex justify-end">
          <i class="fa-solid fa-bag-shopping text-[20px]"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
