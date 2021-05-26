import React from "react";
import ProjectBlock from "./ProjectBlock";
import EducationBlock from "./EducationBlock"
import description from "./description";

const {projects,education}=description;


function ResumeHead(props){
 const title=props.title;
  return(
    <div className="row s-resume__section">
        <div className="column large-3 tab-12">
            <h3 className="section-header-allcaps">{title}</h3>
        </div>
        <div className="column large-9 tab-12">

        {title==="PROJECTS"?projects.map((project)=> <ProjectBlock Glink={project.Glink} projectName={project.projectName} workedAs={project.workedAs} dateRange={project.dateRange} projectDetails={project.projectDetails}/>):
        education.map((education)=> <EducationBlock institute={education.institute} degree={education.degree} dateRange={education.dateRange} cgpa={education.cgpa}/>)}

            </div>


        </div>


  );
}
export default ResumeHead;
