import './NavBar.css';
import NavBarButton from './NavBarButton';
export default function NavBarTop(props) {

  const scrollToProjects = ()=>{
    if (props?.projectRef?.current) {
      props.projectRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  const scrollToAboutMe = ()=>{
    if (props?.aboutMeRef?.current) {
      props.aboutMeRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  const scrollToResume = ()=>{
    if (props?.resumeRef?.current) {
      props.resumeRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
  return (
    <nav className="top">
      <div className="left">
        <NavBarButton>
          LZ
        </NavBarButton>
      </div>
      <div className="right">
        <NavBarButton scrollTo={scrollToAboutMe}>
          About
        </NavBarButton>
        {/* <NavBarButton scrollTo={scrollToProjects}>
          Projects
        </NavBarButton> */}
        {/* <NavBarButton>
          Contact 
        </NavBarButton> */}
        <NavBarButton scrollTo={scrollToResume}>
          Resume
        </NavBarButton>
      </div>

    </nav>
  );
}