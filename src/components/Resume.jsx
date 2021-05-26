import React from "react";
import ResumeHead from "./ResumeComponents/ResumeHead";




function Resume(){
  return (
    <section id="resume" className="s-resume target-section">
        <ResumeHead title="PROJECTS"  />
        <ResumeHead title="EDUCATION" />

  <div className="row s-resume__section">
            <div className="column large-3 tab-12">
                <h3 className="section-header-allcaps">Skills</h3>
            </div>
            <div className="column large-9 tab-12">


                <div className="resume-block">

                    <p></p>

                    <ul className="skill-bars-fat">
                        <li>
                        <div className="progress percent45"></div>
                        <strong>Competitive Programming</strong>
                        </li>
                        <li>
                        <div className="progress percent45"></div>
                        <strong>Front-End development</strong>
                        </li>
                        <li>
                        <div className="progress percent30"></div>
                        <strong>Backend Development</strong>
                        </li>
                        <li>
                        <div className="progress percent50"></div>
                        <strong>Data Structures and Algorithms</strong>
                        </li>
                    </ul>

                </div>

            </div>
        </div>

    </section>


  );
}



export default Resume;
