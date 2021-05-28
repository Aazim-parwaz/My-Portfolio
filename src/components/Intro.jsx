import React, {useEffect} from "react";
import Rellax from "rellax";

function Intro(){

  useEffect(() => {
      new Rellax(".rellax", {speed: -7});


      const hdr = document.querySelector('.s-header');
      const hero = document.querySelector('#hero');
      let triggerHeight;

      if (!(hdr && hero)) return;

      setTimeout(function(){
        console.log(hero.offsetHeight);
          triggerHeight = hero.offsetHeight - 170;

      }, 1000);

      window.addEventListener('scroll', function () {

          let loc = window.scrollY;


          if (loc > triggerHeight) {
              hdr.classList.add('sticky');
          } else {
              hdr.classList.remove('sticky');
          }

          if (loc > triggerHeight + 20) {
              hdr.classList.add('offset');
          } else {
              hdr.classList.remove('offset');
          }

          if (loc > triggerHeight + 150) {
              hdr.classList.add('scrolling');
          } else {
              hdr.classList.remove('scrolling');
          }

      });


      const toggleButton = document.querySelector('.s-header__menu-toggle');
          const headerNavWrap = document.querySelector('.s-header__nav-wrap');
          const siteBody = document.querySelector("body");

          if (!(toggleButton && headerNavWrap)) return;

          toggleButton.addEventListener('click', function(event){
              event.preventDefault();
              toggleButton.classList.toggle('is-clicked');
              siteBody.classList.toggle('menu-is-open');
          });

          headerNavWrap.querySelectorAll('.s-header__nav a').forEach(function(link) {
              link.addEventListener("click", function(evt) {

                  // at 800px and below
                  if (window.matchMedia('(max-width: 800px)').matches) {
                      toggleButton.classList.toggle('is-clicked');
                      siteBody.classList.toggle('menu-is-open');
                  }
              });
          });

          window.addEventListener('resize', function() {

              // above 800px
              if (window.matchMedia('(min-width: 801px)').matches) {
                  if (siteBody.classList.contains('menu-is-open')) siteBody.classList.remove('menu-is-open');
                  if (toggleButton.classList.contains("is-clicked")) toggleButton.classList.remove("is-clicked");
              }
          });



          const sections = document.querySelectorAll(".target-section");

        // Add an event listener listening for scroll
        window.addEventListener("scroll", navHighlight);

        function navHighlight() {

            // Get current scroll position
            let scrollY = window.pageYOffset;

            // Loop through sections to get height(including padding and border),
            // top and ID values for each
            sections.forEach(function(current) {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 50;
                const sectionId = current.getAttribute("id");

               /* If our current scroll position enters the space where current section
                * on screen is, add .current class to parent element(li) of the thecorresponding
                * navigation link, else remove it. To know which link is active, we use
                * sectionId variable we are getting while looping through sections as
                * an selector
                */
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelector(".s-header__nav a[href*=" + sectionId + "]").parentNode.classList.add("current");
                } else {
                    document.querySelector(".s-header__nav a[href*=" + sectionId + "]").parentNode.classList.remove("current");
                }
            });
        }

      },[]);


  return(
    <section id="hero" className="s-hero target-section">

        <div className="s-hero__bg rellax"></div>

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

                        <a href="https://codeforces.com/profile/code_parwaz_"><i className="fas fa-code" aria-hidden="false"></i></a>
                        <a href="https://github.com/Aazim-parwaz"><i className="fab fa-github" aria-hidden="false"></i></a>
                        <a href="https://www.linkedin.com/in/aazim-parwaz-342055207/"><i className="fab fa-linkedin" aria-hidden="false"></i></a>
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
