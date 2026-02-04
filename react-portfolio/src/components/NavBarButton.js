import './NavBarButton.css';

export default function NavBarButton(props) {
  return (
    <div className="navButton" onClick={props.scrollTo}>
      {props.children}
    </div>
  );
}