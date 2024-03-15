import { LOGO_URL } from "./utils/contants";

const Header = () => {
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
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>CONTACT US</li>
            <li>CART</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;