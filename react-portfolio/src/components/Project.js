import "./Project.css"
import SingleProject from "./SingleProject"
export default function Project() {
  return (
    <section className="myProjects">
      <h1>My Projects</h1>
      <div className="project-container">
        <SingleProject></SingleProject>
        <SingleProject></SingleProject>
        <SingleProject></SingleProject>
        <SingleProject></SingleProject>
        <SingleProject></SingleProject>
        <SingleProject></SingleProject>
      </div>
    </section>
  )
}