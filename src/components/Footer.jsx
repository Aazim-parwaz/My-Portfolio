import React,{useEffect} from "react";
import {Jump} from "react-jump";




function Footer(){
  const year=new Date().getFullYear();

useEffect(()=>{
  const triggers = document.querySelectorAll(".smoothscroll");

        triggers.forEach(function(trigger) {
            trigger.addEventListener("click", function() {
                const target = trigger.getAttribute("href");

                Jump(target, {
                    duration: 1200,
                });
            });
        });

        const pxShow = 900;
      const goTopButton = document.querySelector(".ss-go-top");

      if (!goTopButton) return;

      // Show or hide the button
      if (window.scrollY >= pxShow) goTopButton.classList.add("link-is-visible");

      window.addEventListener('scroll', function() {
          if (window.scrollY >= pxShow) {
              if(!goTopButton.classList.contains('link-is-visible')) goTopButton.classList.add("link-is-visible")
          } else {
              goTopButton.classList.remove("link-is-visible")
          }
      });

},[]);





  return (
    <footer className="s-footer">
        <div className="row">
            <div className="column large-4 medium-6 w-1000-stack s-footer__social-block">
                <ul className="s-footer__social">


 <li>  <a href="https://codeforces.com/profile/code_parwaz_"><i className="fas fa-code" aria-hidden="false"></i></a></li>
              <li>  <a href="https://github.com/Aazim-parwaz"><i className="fab fa-github" aria-hidden="false"></i></a></li>
              <li>  <a href="https://www.linkedin.com/in/aazim-parwaz-342055207/"><i className="fab fa-linkedin" aria-hidden="false"></i></a></li>
                </ul>
            </div>

            <div className="column large-7 medium-6 w-1000-stack ss-copyright">
                <span>© Copyright {year}</span>
                <span>Created with <i style={{color:"red"}} className="fas fa-heart"></i> by <a href="#top">Aazim Parwaz</a></span>
            </div>
        </div>

         <div className="ss-go-top" >
             <a className="smoothscroll" title="Back to Top" href="#top">
                <svg xmlns="http://www.w3.org/TR/SVG" viewBox="0 0 24 24"><path d="M6 4h12v2H6zm5 10v6h2v-6h5l-6-6-6 6z"/></svg>
              </a>
         </div>

    </footer>

  );
}
export default Footer;
