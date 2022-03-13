import NavBarTop from "./components/NavBarTop";
import Intro from "./components/Intro";
import ParticleBackground from "./components/ParticleBackground";

import {useEffect} from 'react';
import AboutMe from "./components/AboutMe";
function App() {
  useEffect(()=>{
    const canvas = document.querySelector('#tsparticles canvas')
    canvas.style.removeProperty('width');
    console.log(canvas.style)
  },[])
  return (
    <div className="App">
      <NavBarTop/>
      <Intro/>
      <AboutMe></AboutMe>
      <ParticleBackground height={'800px'}></ParticleBackground>
    </div>
  );
}

export default App;
