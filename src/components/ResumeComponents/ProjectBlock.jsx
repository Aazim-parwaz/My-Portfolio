import React from "react";


function ProjectBlock(props){
  return(
    <div className="resume-block">

        <div className="resume-block__header">
            <h4 className="h3"><a href={props.Glink}>{props.projectName}</a></h4>
            <p className="resume-block__header-meta">
                <span>{props.workedAs}</span>
                <span className="resume-block__header-date">
                    {props.dateRange}
                </span>
            </p>
        </div>

        <p>
        {props.projectDetails}
        </p>

    </div>
  );
}
export default ProjectBlock;
