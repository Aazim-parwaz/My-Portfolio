import React from "react";


function EducationBlock(props){
  return (
    <div className="resume-block">

        <div className="resume-block__header">
            <h4 className="h3"><a href="https://nitsri.ac.in/">{props.institute}</a></h4>
            <p className="resume-block__header-meta">
                <span>{props.degree}</span>
                <span className="resume-block__header-date">
                    {props.dateRange}
              </span>
            <span>  <p className="resume-block__header-date">CGPA: {props.cgpa}/10</p></span>

            </p>

        </div>
</div>
  )
}
export default EducationBlock;
