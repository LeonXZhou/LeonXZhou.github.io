import NavBarTop from "./components/NavBarTop";
import Project from "./components/Project";
import Intro from "./components/Intro";
import ParticleBackground from "./components/ParticleBackground";

import {useEffect} from 'react';
import AboutMe from "./components/AboutMe";
function App() {
  return (
    <div className="App">
      <NavBarTop/>
      <Intro/>
      <Project></Project>
      <AboutMe></AboutMe>
      <ParticleBackground height={'800px'}></ParticleBackground>
    </div>
  );
}

export default App;
