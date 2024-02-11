
import { useState } from "react";
import classes from "./Header.module.css";
import logo from "../../media/header/logo-garten.svg";
import basketImage from "../../media/header/basket_light.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes.header_row}>
          <div className={classes.header_logo}>
            <img src={logo} alt="logo" />
          </div>

          <div className={classes.menu}>
        
            <ul className={`${classes.nav_list} ${nav ? classes.active : ""}`}>
              <li className={classes.nav_list_item}>
                <a href="#">Main Page</a>
              </li>
              <li className={classes.nav_list_item}>
                <a href="#">Categories</a>
              </li>
              <li className={classes.nav_list_item}>
                <a href="#">All products</a>
              </li>
              <li className={classes.nav_list_item}>
                <a href="#">All sales</a>
              </li>
            </ul>
          </div>

          <div className={`${classes.overlay} ${nav ? classes.activeOverlay : ""}`} />

          <div className={classes.toogleAll}>
            <div className={classes.nav_basket}>
              <img src={basketImage} alt="basket" />
            </div>

            <div onClick={() => setNav(!nav)} 
                 className={classes.mobile_btn}>
                  {nav ? <AiOutlineClose size = {45}/> : <AiOutlineMenu size = {45}/>}
             
            </div>
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

