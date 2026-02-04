import './AboutMe.css';
import leonImage from "../images/Leon.png";
export default function AboutMe(props) {

  const scrollToResume = ()=>{
    if (props?.resumeRef?.current) {
      props.resumeRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  return (
    <>
      <section className="about-me-container" ref={props.aboutMeRef}>
        <h1>About Me</h1>
        <div className="content-flex">
          <p>
            Hello! My name is Leon and I love coding to solve complex problems. I started my coding journey in middle school making games, using drop and drag code. I immediately fell in love with the creative and craftsmanship aspect of code. Having the ability to translate my ideas into tangible creations was really empowering.
            <br></br>
            <br></br>
            Throughout university, I pursued a degree in engineering physics with a specialization in computing. The engineering physics program at Queen’s University combines the core aspects of a degree in physics with the core aspects of a more traditional engineering discipline. In my case, my sub-option was computer engineering, giving me a broad exposure to Computer Science principles alongside a strong mathematical foundation from physics.
            <br></br>
            <br></br>
            Currently, I am working at UKG (Ultimate Kronos Group) in the workforce management scheduling domain, where I am maintaing, architecting, and leading new implementation of employee request functionalities for our enterprise clients.
            <br></br>
          </p>
          <img src={leonImage} alt="not found"></img>
        </div>
        <div className="icon-container" >
          <i className="fa-solid fa-angles-down fa-bounce" onClick={scrollToResume}></i>
        </div>
      </section>
    </>

  );
}