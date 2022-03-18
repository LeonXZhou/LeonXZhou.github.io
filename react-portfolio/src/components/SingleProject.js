import "./SingleProject.css"
import { useRef } from "react";

export default function SingleProject() {
  const text = useRef(null);
  return (
    <div
      className="single-project" style={{ backgroundImage: `url(${require("../images/devEnvironment.png")})` }}
      onMouseEnter={() => { text.current.classList.toggle("hidden") }}
      onMouseLeave={() => { text.current.classList.toggle("hidden") }}
    >
      <p className="hidden" ref={text}>a projectasdfasdfasdf<br></br>asdf</p>
    </div >);
}