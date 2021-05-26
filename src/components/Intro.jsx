import React from "react";

function Intro(){
  return(
    <section id="hero" className="s-hero target-section">

        <div className="s-hero__bg rellax" data-rellax-speed={-7}></div>

        <div className="row s-hero__content">
            <div className="column">

                <div className="s-hero__content-about">

                    <h1>I'm Aazim Parwaz</h1>

                    <h3>
                    A <span>Student</span>, budding <span>Software developer</span> and <span>Competitive Programmer</span> enjoying every bit of code
                    with adrenaline rush and passion to learn more. Let's <a className="smoothscroll" href="#about">start scrolling</a>
                    and learn more <a className="smoothscroll" href="#about">about me</a>.
                    </h3>

                    <div className="s-hero__content-social">

                        <a href="https://codeforces.com/profile/code_parwaz_"><i className="fas fa-code" aria-hidden="true"></i></a>
                        <a href="https://github.com/Aazim-parwaz"><i className="fab fa-github" aria-hidden="true"></i></a>
                        <a href="https://www.linkedin.com/in/aazim-parwaz-342055207/"><i className="fab fa-linkedin" aria-hidden="true"></i></a>
                    </div>

                </div>

            </div>
        </div>

        <div className="s-hero__scroll">
            <a href="#about" className="s-hero__scroll-link smoothscroll">
            <span classname="scroll-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M18.707 12.707L17.293 11.293 13 15.586 13 6 11 6 11 15.586 6.707 11.293 5.293 12.707 12 19.414z" /></svg>
        </span>
                <span className="scroll-text">Scroll Down</span>
            </a>
        </div>

    </section>

  );
}

export default Intro;
