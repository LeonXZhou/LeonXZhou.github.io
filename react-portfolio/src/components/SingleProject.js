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
      <div className="text hidden" ref={text}>
        <h1>Odyssey</h1>
        <p>This is an app</p>
        <a href="https://www.w3schools.com">Visit W3Schools.com!</a> <br></br>
        <a href="https://www.w3schools.com">Visit W3Schools.com!</a>
      </div>
    </div >);
}