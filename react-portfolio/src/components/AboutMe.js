import './AboutMe.css';
import leonImage from "../images/Leon.png";
export default function AboutMe() {
  console.log(window)
  return (
    <div className="about-me-container">
      <h1>About Me</h1>
      <div className="content-flex">
        <p>
          Hello! My name is Leon and I love coding to solve complex problems. I started my coding journey in middle school making games, using drop and drag code. I immediately fell in love with the creative and craftsmanship aspect of code. Having the ability to translate my ideas into tangible creations was really empowering.
          <br></br>
          <br></br>
          Throughout university, I pursued a degree in engineering physics with a specialization in computing. The engineering physics program at Queen’s University combines the core aspects of a degree in physics with the core aspects of a more traditional engineering discipline. In my case, my sub-option was computer engineering, giving me a broad exposure to CS principles alongside a strong mathematical foundation from physics.
          <br></br>
          <br></br>
          I recently completed a web development program with Lighthouse Labs to reskill and specialize. I am excited to jump into the professional world of web dev. I’m currently based in Vancouver, but I love exploring new places so I’m very open to relocation for opportunities outside of North American time zones.
          <br></br>
          <br></br>
          Outside of coding, you’ll find me (as any good Vancouverite would say) adventuring in the great outdoors. I love hiking, yoga, and paddleboarding. Sometimes you might even find me under an apple tree praying for inspiration -->
        </p>
        <img src={leonImage} alt="Girl in a jacket"></img>
      </div>
    </div>
  );
}