import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";
import { FaBars, FaTimes } from "react-icons/fa";
import { SiYourtraveldottv } from "react-icons/si";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <header className={classes.header}>
      <NavLink to="/" className={classes.logo}>
        <SiYourtraveldottv className={classes.navbar__icon} />
        YourTrips
      </NavLink>
      <nav className={click ? classes.nav__menu_active : classes.nav__menu}>
        <ul>
          <li className={classes.nav__item} onClick={handleClick}>
            <NavLink to="/" className={classes.nav__links}>
              Home
            </NavLink>
          </li>
          <li className={classes.nav__item} onClick={handleClick}>
            <NavLink to="/about-us" className={classes.nav__links}>
              About us
            </NavLink>
          </li>
          <li className={classes.nav__item} onClick={handleClick}>
            <NavLink to="/new-tour" className={classes.nav__links}>
              Add New Tour
            </NavLink>
          </li>
          <li className={classes.nav__item} onClick={handleClick}>
            <NavLink to="/favorites" className={classes.nav__links}>
              My favorites
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={classes.menu__icon} onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
}

export default MainNavigation;
