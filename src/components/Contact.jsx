import React from "react"

function Contact(){
  return (
    <section id="contact" className="s-contact target-section">

        <div className="row s-contact__header">
            <div className="column large-12">
                <h3 className="section-header-allcaps">Say Hello</h3>
            </div>
        </div>

        <div className="row s-contact__content">

            <div className="column large-7 medium-12">

                <h4 className="huge-text">
                Wanna Reach out to me <br/>
                Drop an <i class="fas fa-envelope"></i> in my inbox !!
                </h4>

            </div>

            <div className="column large-4 medium-12">

                <div className="row contact-infos">
                    <div className="column large-12 medium-6 tab-12">
                        <div className="contact-block">
                            <h5 className="contact-block__header">
                                Email
                            </h5>
                            <p className="contact-block__content">
                                <a className="mailtoui" href="mailto:codeparwaz@gmail.com">codeparwaz@gmail.com</a>
                            </p>
                        </div>
                    </div>
                    <div className="column large-12 medium-6 tab-12">
                        <div className="contact-block">
                            <h5 className="contact-block__header">
                                Phone
                            </h5>
                            <p className="contact-block__content">
                                <a href="#contact">+91***********</a>
                            </p>
                        </div>
                    </div>

                    <div className="column large-12">
                        <a href="mailto:codeparwaz@gmail.com" className="mailtoui btn btn--primary h-full-width">Let's Talk</a>
                    </div>
                </div>

            </div>
        </div>

    </section>

  );
}

export default Contact;
