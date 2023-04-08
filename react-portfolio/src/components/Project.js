import "./Project.css"
import SingleProject from "./SingleProject"
export default function Project() {
  const odyssey = {
    image: require("../images/odyssey.png"),
    title: 'Odyssey',
    description: "An outdoor adventure planning app built using React, Express, NodeJS, and PostgreSQL",
    demo: "https://www.w3schools.com",
    code: "https://github.com/LeonXZhou/Odyssey",
  }

  const projects = [odyssey,odyssey,odyssey,odyssey,odyssey];

  const projectsJSX = projects.map((project) => {
    return (<SingleProject
      image={project.image}
      title={project.title}
      description={project.description}
      demoLink={project.demo}
      codeLink={project.code}>
    </SingleProject>)
  })

  return (
    <section className="myProjects">
      <h1>My Projects</h1>
      <div className="project-container">
        {projectsJSX}
        {/* <SingleProject
          image={odyssey.image}
          title={odyssey.title}
          description={odyssey.description}
          demoLink={odyssey.demo}
          codeLink={odyssey.code}>
        </SingleProject> */}
        {/* <SingleProject></SingleProject>
        <SingleProject></SingleProject>
        <SingleProject></SingleProject>
        <SingleProject></SingleProject>
        <SingleProject></SingleProject> */}
      </div>
    </section>
  )
}