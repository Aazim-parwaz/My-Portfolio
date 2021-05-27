import React from "react";




function About(){
  return (
    <section id="about" className="s-about target-section">

        <div className="row">
            <div className="column large-3 tab-12">
                <img className="s-about__pic" src="images/myPics/aazim.png" alt="profile-pic"/>
            </div>
            <div className="column large-9 tab-12 s-about__content">
                <h3>About Me</h3>
                <p>
                I am Aazim Parwaz. A 2nd Year Computer Science and Engineering Student in National Institute Of Technology, Srinagar.
                I am a budding web developer who loves to design and create elegant cum efficient web Apps. I do full Stack-development with major in Front-end development.
                I am also a competitive programmer in love with Data Structures and Algorithms.
                </p>

                <hr/>

                <div className="row s-about__content-bottom">
                    <div className="column w-1000-stack">
                        <h3>Contact Details</h3>

                        <p>
                        Mattan, Anantnag,192125 <br/>
                        Jammu & Kashmir <br/>
                        India <span id="indian-flag">🇮🇳</span><br/>
                        <a href="tel:+916005696500">(+91)6005696500</a> <br/>
                        <a href="mailto:codeparwaz@gmail.com">codeparwaz@gmail.com</a>
                        </p>

                    </div>
                    <div className="column w-1000-stack">
                        <a href="https://drive.google.com/file/d/1MaxaY-ZvY_u8jbUkhFeDrXvbvwWwXOm_/view?usp=sharing" className="btn btn--download">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M12 16L16 11 13 11 13 4 11 4 11 11 8 11z"></path><path d="M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z"></path></svg>
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </section>

  );
}



export default About;
