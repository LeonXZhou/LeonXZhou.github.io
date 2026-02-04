import "./Project.css"
import SingleProject from "./SingleProject"
export default function Project(props) {
  const odyssey = {
    image: require("../images/odyssey.png"),
    title: 'Odyssey',
    description: "An outdoor adventure planning app built using React, Express, NodeJS, and PostgreSQL",
    code: "https://github.com/LeonXZhou/Odyssey",
  }

  const projects = [odyssey];

  const projectsJSX = projects.map((project, index) => {
    return (<SingleProject
      image={project.image}
      title={project.title}
      description={project.description}
      demoLink={project.demo}
      codeLink={project.code}
      key={index}>
    </SingleProject>)
  })

  return (
    <section className="myProjects" ref={props.projectRef}>
      <h1>My Projects</h1>
      <div className="project-container">
        {projectsJSX}
      </div>
    </section>
  )
}