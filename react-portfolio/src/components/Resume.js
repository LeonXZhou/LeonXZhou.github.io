import "./Resume.css"
export default function Resume(props) {

  return (
    <div className="resumeContainer" ref={props.resumeRef}>
      <iframe src="https://docs.google.com/document/d/e/2PACX-1vTEY1ivzBpsqhijklco6jG9K8FWnOvQtz3iVR99u5i1pFaDP-bazgDt0XhCi_4v-g/pub?embedded=true"></iframe>
    </div>
  )
} 