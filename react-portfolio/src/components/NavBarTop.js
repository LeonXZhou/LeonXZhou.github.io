import './NavBar.css';
import NavBarButton from './NavBarButton';
export default function NavBarTop() {
  return (
    <nav className="top">
      <div className="left">
        <NavBarButton>
          LZ
        </NavBarButton>
      </div>
      <div className="right">
        <NavBarButton>
          Projects
        </NavBarButton>
        <NavBarButton>
          About
        </NavBarButton>
        <NavBarButton>
          Contact 
        </NavBarButton>
        <NavBarButton>
          Resume
        </NavBarButton>
      </div>

    </nav>
  );
}