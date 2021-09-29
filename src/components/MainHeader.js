import { NavLink } from 'react-router-dom';
import classes from './MainHeader.module.css';
import logo from '../assets/images/logo.png';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <img src={logo} alt='pokemon-logo' />
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/home' activeClassName={classes.active}>
              Home
            </NavLink>
            <NavLink to='/comparison' activeClassName={classes.active}>
              Battle
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
