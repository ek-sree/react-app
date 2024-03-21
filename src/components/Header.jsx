import { useState } from "react";
import { LOGO_URL } from "./utils/contants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../customHooks/useOnlineStatus";

const Header = () => {
  const [btnChange, setBtnChange] = useState("Login");
  const online = useOnlineStatus();

  const handleChange = () => {
    setBtnChange((prevBtn) => (prevBtn === "Login" ? "Logout" : "Login"));
  };

  return (
    <div className="flex justify-between shadow-xl m-4 h-28">
      <div className="w-56">
        <img className="w-50 h-20 ml-16 mt-5" src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex space-x-4 pl-20">
          <li className="px-4 hover:underline">
            <Link to="/">HOME</Link>
          </li>
          <li className="px-4 hover:underline">
            <Link to="/grocery">GROCERY</Link>
          </li>
          <li className="px-4 hover:underline">
            <Link to="/about">ABOUT US</Link>
          </li>
          <li className="px-4 hover:underline">
            <Link to="/contact">CONTACT US</Link>
          </li>
          <li className="px-4 hover:underline">CART</li>
          
        </ul>
      </div>
            <button className="pr-15 border border-solid border-black bg-slate-300 w-20 h-10 mt-10 ml-10 hover:bg-slate-600 rounded-xl hover:text-white" onClick={handleChange}>{btnChange}</button>
      <div className="flex items-center mr-20 w-25">
        <span>Online status: {online ? "✅" : "❌"}</span>
      </div>
    </div>
  );
};

export default Header;
