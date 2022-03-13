import { useEffect } from 'react';
import "./Intro.css";



export default function Intro(props) {
  useEffect(() => {
    const targetMotto = "Coding to create!";
    const mottoElement = document.querySelector('.motto');
    let currentMotto = "_";
    let toggleCounter = 0;

    const underscore = setInterval(() => {
      if (toggleCounter === 2) {
        let typeCounter = -1;
        clearInterval(underscore);
        const type = setInterval(() => {
          typeCounter++;
          currentMotto = currentMotto.slice(0, currentMotto.length - 1) + targetMotto[typeCounter] + currentMotto.slice(currentMotto.length - 1, currentMotto.length);
          mottoElement.innerText = currentMotto;
          console.log('asdf')
          if (typeCounter === targetMotto.length - 1) {
            currentMotto = currentMotto.slice(0, currentMotto.length - 1);
            mottoElement.innerText = currentMotto;
            document.querySelector('.pitch').classList.toggle("slide")
            clearInterval(type);
          }

        }, 100)
      }
      mottoElement.classList.toggle("hidden")
      toggleCounter++;
    }, 400);
  }, [])
  return (
    <>
      <div className="intro">
        <p>Hi, my name is</p>
        <p className="name">Leon Zhou.</p>
        <p className="motto hidden">_</p>
        <p className="pitch">I'm a software engineer with a passion for solving
          complex problems with technology. </p>
      </div>
      <div className="icon-container">
        <i className="fa-solid fa-angles-down fa-bounce "></i>
      </div>
    </>
  );
}