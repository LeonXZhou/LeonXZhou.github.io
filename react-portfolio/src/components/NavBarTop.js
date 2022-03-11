import './NavBar.css';
import NavBarButton from './NavBarButton';

export default function NavBarTop() {
  return (
    <nav className="top">
      <div className="left">
        <NavBarButton>
          Leon Zhou
        </NavBarButton>
      </div>
      <div className="left">
        <NavBarButton>
          Linear Regression
        </NavBarButton>
        <NavBarButton>
          Quadratic Fit
        </NavBarButton>
      </div>
    </nav>
  );
}