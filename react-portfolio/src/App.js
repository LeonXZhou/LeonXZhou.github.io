import { useRef } from 'react';

import NavBarTop from "./components/NavBarTop";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Intro from "./components/Intro";
import ParticleBackground from "./components/ParticleBackground";
import AboutMe from "./components/AboutMe";
function App() {
  
  const projectRef = useRef(null);
  const aboutMeRef = useRef(null);
  const resumeRef = useRef(null);
  return (
    <div className="App">
      <NavBarTop aboutMeRef={aboutMeRef} projectRef={projectRef} resumeRef={resumeRef}/>
      <Intro aboutMeRef={aboutMeRef}/>
      <AboutMe aboutMeRef={aboutMeRef} resumeRef={resumeRef}></AboutMe>
      {/* <Project projectRef={projectRef}></Project> */}
      <Resume resumeRef={resumeRef}></Resume>
      <ParticleBackground height={'800px'}></ParticleBackground>
    </div>
  );
}

export default App;
