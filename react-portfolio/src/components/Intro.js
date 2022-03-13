import { useEffect, useRef } from 'react';
import "./Intro.css";



export default function Intro(props) {
  const mottoElement = useRef(null);
  const pitchElement = useRef(null);
  useEffect(() => {
    const targetMotto = "Coding to create!";
    let currentMotto = "_";
    let toggleCounter = 0;
    const underscore = setInterval(() => {
      if (toggleCounter < 3) {
        mottoElement.current.classList.toggle("hidden")
        toggleCounter++;
      }
      else {
        clearInterval(underscore);

        let typeCounter = -1;
        const type = setInterval(() => {
          typeCounter++;
          currentMotto = currentMotto.slice(0, currentMotto.length - 1) + targetMotto[typeCounter] + currentMotto.slice(currentMotto.length - 1, currentMotto.length);
          mottoElement.current.innerText = currentMotto;
          if (typeCounter === targetMotto.length - 1) {
            currentMotto = currentMotto.slice(0, currentMotto.length - 1);
            mottoElement.current.innerText = currentMotto;
            pitchElement.current.classList.toggle("hidden")
            clearInterval(type);
          }
        }, 100)
      }
    }, 400);
  }, [])
  return (
    <>
      <div className="intro">
        <p>Hi, my name is</p>
        <p className="name">Leon Zhou.</p>
        <p ref={mottoElement} className="motto hidden">_</p>
        <p ref={pitchElement} className="pitch hidden">I'm a software engineer with a passion for solving
          complex problems with technology. </p>
      </div>
      <div className="icon-container">
        <i className="fa-solid fa-angles-down fa-bounce "></i>
      </div>
    </>
  );
}