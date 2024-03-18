import { useState } from "react";
import { LOGO_URL } from "./utils/contants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../customHooks/useOnlineStatus";


const Header = () => {

  const [btnChange,setbtnChange] =useState("Login")

  const online =useOnlineStatus()

  const handlechange=()=>{
    btnChange ==='Login' ? setbtnChange("Logout") : setbtnChange("Login")
  }
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
            alt="logo"
          />
        </div>
        <div className="nav-items">
          <ul>
          <li>Online status : {online ? "✅" : "❌"}</li>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT US</Link></li>
            <li><Link to="/contact">CONTACT US</Link></li>
            <li>CART</li>
            <li><button onClick={handlechange}>{btnChange}</button></li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;