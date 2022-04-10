import "./SingleProject.css"
import { useRef } from "react";

export default function SingleProject(props) {
  const text = useRef(null);
  return (
    <div
      className="single-project" style={{ backgroundImage: `url(${props.image})` }}
      onMouseEnter={() => { text.current.classList.toggle("hidden") }}
      onMouseLeave={() => { text.current.classList.toggle("hidden") }}
    >
      <div className="text hidden" ref={text}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <a href={props.demoLink} target="_blank">Demo</a> 
        <br></br>
        <a href={props.codeLink} target="_blank">Source Code</a>
      </div>
    </div >);
}