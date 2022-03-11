import './NavBarButton.css';

export default function NavBarButton(props) {
  return (
    <div className="navButton" onClick={()=>{console.log(props)}}>
      {props.children}
    </div>
  );
}