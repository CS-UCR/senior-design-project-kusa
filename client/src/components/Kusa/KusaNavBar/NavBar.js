import { Nav, NavLink, Bars, NavMenu } from './NavBarElements';
import { DarkToggle } from './DarkToggle/DarkToggle';
import { IconHome2, IconPlant, IconMessage, IconFriends, IconTrophy, IconUsers, IconMenu2} from "@tabler/icons";
import "./NavBar.css";

const Navbar = () => {
  return (
    <>
      <Nav className="navbar-icon-tabler">
        <NavLink to='/'></NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle></NavLink>
          
          <DarkToggle/>

          <NavLink to='/home' >
            <IconHome2 />
          </NavLink>

          <NavLink to='/chat' activeStyle>
            <IconMessage/>
          </NavLink>

          <NavLink to='/friends' activeStyle>
            <IconFriends/>
          </NavLink>

          <NavLink to='/achievements' activeStyle>
             <IconTrophy/>
          </NavLink>

          <NavLink to='/profile' activeStyle>
            <IconUsers/>
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;