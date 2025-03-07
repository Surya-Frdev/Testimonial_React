import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./testimonial.css";

function Testimonial() {
    return (
        <div className="testimonial">
            <h2>What Our Clients Say</h2>
            <p className="heading-para">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="2500">
                        <div className="clients-say">
                            <div className="clients-container">
                                <figure className="client-img m-auto">
                                    <img src={`${process.env.PUBLIC_URL}/img/client-1.png`} alt="client" />
                                </figure>
                                <img src={`${process.env.PUBLIC_URL}/img/rating-1.png`} alt="ratings" className="ratings"/>
                                <p className="clients-para m-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                <h6>ABC Ltd</h6>
                                <h4>ABINAVE MUGUNT</h4>
                                <p className="client-position">CEO - ABC</p>
                            </div>
                            <div className="clients-container">
                                <figure className="client-img m-auto">
                                    <img src={`${process.env.PUBLIC_URL}/img/client-2.png`} alt="client" />
                                </figure>
                                <img src={`${process.env.PUBLIC_URL}/img/rating-2.png`} alt="ratings" className="ratings"/>
                                <p className="clients-para m-auto">Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.</p>
                                <h6>MNC</h6>
                                <h4>SRI LEKHA</h4>
                                <p className="client-position">CEO - MNC</p>
                            </div>
                            <div className="clients-container">
                                <figure className="client-img m-auto">
                                    <img src={`${process.env.PUBLIC_URL}/img/client-3.png`} alt="client" />
                                </figure>
                                <img src={`${process.env.PUBLIC_URL}/img/rating-3.png`} alt="ratings" className="ratings"/>
                                <p className="clients-para m-auto">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
                                <h6>BCA</h6>
                                <h4>ALBERT HAI</h4>
                                <p className="client-position">CEO - BCA</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2500">
                        <div className="clients-say">
                            <div className="clients-container">
                                <figure className="client-img m-auto">
                                    <img src={`${process.env.PUBLIC_URL}/img/client-1.png`} alt="client" />
                                </figure>
                                <img src={`${process.env.PUBLIC_URL}/img/rating-1.png`} alt="ratings" className="ratings"/>
                                <p className="clients-para m-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                <h6>ABC Ltd</h6>
                                <h4>ABINAVE MUGUNT</h4>
                                <p className="client-position">CEO - ABC</p>
                            </div>
                            <div className="clients-container">
                                <figure className="client-img m-auto">
                                    <img src={`${process.env.PUBLIC_URL}/img/client-2.png`} alt="client" />
                                </figure>
                                <img src={`${process.env.PUBLIC_URL}/img/rating-2.png`} alt="ratings" className="ratings"/>
                                <p className="clients-para m-auto">Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.</p>
                                <h6>MNC</h6>
                                <h4>SRI LEKHA</h4>
                                <p className="client-position">CEO - MNC</p>
                            </div>
                            <div className="clients-container">
                                <figure className="client-img m-auto">
                                    <img src={`${process.env.PUBLIC_URL}/img/client-3.png`} alt="client" />
                                </figure>
                                <img src={`${process.env.PUBLIC_URL}/img/rating-3.png`} alt="ratings" className="ratings"/>
                                <p className="clients-para m-auto">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
                                <h6>BCA</h6>
                                <h4>ALBERT HAI</h4>
                                <p className="client-position">CEO - BCA</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2500">
                        <div className="clients-say">
                            <div className="clients-container">
                                <figure className="client-img m-auto">
                                    <img src={`${process.env.PUBLIC_URL}/img/client-1.png`} alt="client" />
                                </figure>
                                <img src={`${process.env.PUBLIC_URL}/img/rating-1.png`} alt="ratings" className="ratings"/>
                                <p className="clients-para m-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                <h6>ABC Ltd</h6>
                                <h4>ABINAVE MUGUNT</h4>
                                <p className="client-position">CEO - ABC</p>
                            </div>
                            <div className="clients-container">
                                <figure className="client-img m-auto">
                                    <img src={`${process.env.PUBLIC_URL}/img/client-2.png`} alt="client" />
                                </figure>
                                <img src={`${process.env.PUBLIC_URL}/img/rating-2.png`} alt="ratings" className="ratings"/>
                                <p className="clients-para m-auto">Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.</p>
                                <h6>MNC</h6>
                                <h4>SRI LEKHA</h4>
                                <p className="client-position">CEO - MNC</p>
                            </div>
                            <div className="clients-container">
                                <figure className="client-img m-auto">
                                    <img src={`${process.env.PUBLIC_URL}/img/client-3.png`} alt="client" />
                                </figure>
                                <img src={`${process.env.PUBLIC_URL}/img/rating-3.png`} alt="ratings" className="ratings"/>
                                <p className="clients-para m-auto">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
                                <h6>BCA</h6>
                                <h4>ALBERT HAI</h4>
                                <p className="client-position">CEO - BCA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Testimonial;