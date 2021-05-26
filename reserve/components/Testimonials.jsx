import React from "react";


function Testimonials(){

  return (
    <section id="testimonials" className="s-testimonials target-section">

        <div className="s-testimonials__bg"></div>

        <div className="row s-testimonials__header">
            <div className="column large-12">
                <h3>Hear What My Clients Says</h3>
            </div>
        </div>

        <div className="row s-testimonials__content">

            <div className="column">

                <div className="swiper-container testimonial-slider">

                    <div className="swiper-wrapper">

                        <div className="testimonial-slider__slide swiper-slide">
                            <div className="testimonial-slider__author">
                                <img src="images/avatars/user-02.jpg" alt="Author image" className="testimonial-slider__avatar">
                                <cite className="testimonial-slider__cite">
                                    <strong>Tim Cook</strong>
                                    <span>CEO, Apple</span>
                                </cite>
                            </div>
                            <p>
                            Molestiae incidunt consequatur quis ipsa autem nam sit enim magni. Voluptas tempore rem.
                            Explicabo a quaerat sint autem dolore ducimus ut consequatur neque.  Nisi dolores quaerat fuga rem nihil nostrum.
                            Laudantium quia consequatur molestias delectus culpa.
                            </p>
                        </div> <!-- end testimonial-slider__slide -->

                        <div className="testimonial-slider__slide swiper-slide">
                            <div className="testimonial-slider__author">
                                <img src="images/avatars/user-03.jpg" alt="Author image" className="testimonial-slider__avatar">
                                <cite className="testimonial-slider__cite">
                                    <strong>Sundar Pichai</strong>
                                    <span>CEO, Google</span>
                                </cite>
                            </div>
                            <p>
                            Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci.
                            Nisi eaque consequatur. Voluptatem dignissimos ut ducimus accusantium perspiciatis.
                            Quasi voluptas eius distinctio. Atque eos maxime.
                            </p>
                        </div> <!-- end testimonial-slider__slide -->

                        <div className="testimonial-slider__slide swiper-slide">
                            <div className="testimonial-slider__author">
                                <img src="images/avatars/user-04.jpg" alt="Author image" className="testimonial-slider__avatar">
                                <cite className="testimonial-slider__cite">
                                    <strong>Satya Nadella</strong>
                                    <span>CEO, Microsoft</span>
                                </cite>
                            </div>
                            <p>
                            Repellat dignissimos libero. Qui sed at corrupti expedita voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam.
                            Autem eaque officia cum exercitationem sunt voluptatum accusamus. Quasi voluptas eius distinctio.
                            Voluptatem dignissimos ut.
                            </p>
                        </div> <!-- end testimonial-slider__slide -->

                        <div className="testimonial-slider__slide swiper-slide">
                            <div className="testimonial-slider__author">
                                <img src="images/avatars/user-05.jpg" alt="Author image" className="testimonial-slider__avatar">
                                <cite className="testimonial-slider__cite">
                                    <strong>Jeff Bezos</strong>
                                    <span>CEO, Amazon</span>
                                </cite>
                            </div>
                            <p>
                            Nunc interdum lacus sit amet orci. Vestibulum dapibus nunc ac augue. Fusce vel dui. In ac felis
                            quis tortor malesuada pretium. Curabitur vestibulum aliquam leo. Qui sed at corrupti expedita voluptas odit.
                            Nihil ea quia nesciunt. Ducimus aut sed ipsam.
                            </p>
                        </div> <!-- end testimonial-slider__slide -->

                    </div> <!-- end testimonial slider swiper-wrapper -->

                    <div className="swiper-pagination"></div>

                </div> <!-- end swiper-container -->

            </div> <!-- end column -->

        </div> <!-- end row -->

    </section> <!-- end s-testimonials -->

  );
}
export default Testimonials;
