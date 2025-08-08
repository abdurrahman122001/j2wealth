import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function Testimonial4() {
    const swiperOptions = {
        // General
        direction: 'horizontal',
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,

        // Navigation
        navigation: {
            nextEl: '.next-single-one_three',
            prevEl: '.prev-single-one_three',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            991: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1199: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1350: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    };
    
    return (
        <>
            <section className="testimonial-section bg_light_1">
                {/*===============spacing==============*/}
                <div className="pd_top_75" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title_all_box style_three text-center dark_color">
                                <div className="title_sections three">
                                    <div className="before_title">Quote About</div>
                                    <h2>Customers Experience</h2>
                                    <p>Shared Time Human Resources Management, Inc. performs executive <br /> searches and
                                        professional recruitment for our clients.</p>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_25" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                    <div className="testimonial_sec light_color style_three">
                        <div className="swiper-container">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                <SwiperSlide>
                                    <div className="testimonial_box">
                                        <i className="icon-quote" />
                                        <div className="rating">
                                            <ul>
                                                <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /></li>
                                            </ul>
                                        </div>
                                        <p className="description">
                                            My long association with the J2 Wealth has brought excellent financial results for me and my loved ones. I'm impressed by their client relationships, effective communication, empathy, and thorough risk assessments. Wishing them continued success!
                                        </p>
                                        <h3 className="title">MR. VALANTIN ALBERT</h3>
                                        <p className="from">Project Manager LNG Corporation - Singapore</p>
                                        <div className="pic">
                                            <img src="/assets/images/testimonial1.jpg" alt="image" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial_box">
                                        <i className="icon-quote" />
                                        <div className="rating">
                                            <ul>
                                                <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /></li>
                                            </ul>
                                        </div>
                                        <p className="description">
                                            My long and rewarding association with J2 Wealth has been exciting and memorable. Their success is driven by genuine customer focus, dedicated hard work, and exceptional support. Wishing Jilani and his team continued growth and success
                                        </p>
                                        <h3 className="title">MR. GANESAN G</h3>
                                        <p className="from">Ex-DGM HR Cairn India</p>
                                        <div className="pic">
                                            <img src="/assets/images/testimonial2.jpg" alt="image" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial_box">
                                        <i className="icon-quote" />
                                        <div className="rating">
                                            <ul>
                                                <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /></li>
                                            </ul>
                                        </div>
                                        <p className="description">
                                            I'm not very knowledgeable about financial matters, but J2 Wealth has greatly helped me grow my portfolio. Their team is always extremely helpful and responsive whenever I need assistance. I'm grateful for their outstanding support and expertise.
                                        </p>
                                        <h3 className="title">MRS.GEETHA JAYARAM</h3>
                                        <p className="from">Ex-VIce President Wipro</p>
                                        <div className="pic">
                                            <img src="/assets/images/testimonial3.jpg" alt="image" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial_box">
                                        <i className="icon-quote" />
                                        <div className="rating">
                                            <ul>
                                                <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /></li>
                                            </ul>
                                        </div>
                                        <p className="description">
                                            J2 wealth: Excellent financial advisors in wealth creation to its clients. Has been customer friendly by communicating through emails, social medias and connecting to the financial experts with personal meetings by organising get to gethers. I wish them all the best
                                        </p>
                                        <h3 className="title">MR.SRIDHAR A</h3>
                                        <p className="from">Executive Vice President - Strategic Programs E.I.D Parry India Limited</p>
                                        <div className="pic">
                                            <img src="/assets/images/testimonial4.jpg" alt="image" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial_box">
                                        <i className="icon-quote" />
                                        <div className="rating">
                                            <ul>
                                                <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /></li>
                                            </ul>
                                        </div>
                                        <p className="description">
                                            J2 Wealth has been exceptional since day one, consistently delivering impressive investment growth. Their commitment to clear communication, expert staff, and innovative technology ensures outstanding service. Their experienced and approachable leadership makes them truly stand out
                                        </p>
                                        <h3 className="title">MR. RAMACHANDRAN P</h3>
                                        <p className="from">Tube Investment of India Ex- President</p>
                                        <div className="pic">
                                            <img src="/assets/images/testimonial5.jpg" alt="image" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial_box">
                                        <i className="icon-quote" />
                                        <div className="rating">
                                            <ul>
                                                <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /></li>
                                            </ul>
                                        </div>
                                        <p className="description">
                                            When he started J2 Wealth, I trusted him with my portfolio, and I haven't regretted it. Over the past five years, J2 Wealth has exceeded my expectations with exceptional responsiveness and dedication
                                        </p>
                                        <h3 className="title">MR. HUSSAINI KAGALWALA</h3>
                                        <p className="from">Vice President, Mobility & Cx EJADA</p>
                                        <div className="pic">
                                            <img src="/assets/images/testimonial6.jpg" alt="image" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial_box">
                                        <i className="icon-quote" />
                                        <div className="rating">
                                            <ul>
                                                <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /></li>
                                            </ul>
                                        </div>
                                        <p className="description">
                                            As one of the first clients of J2 Wealth, I had the confidence to transfer all my savings to them, and I've been consistently pleased with the results. Their prompt responses, regardless of time differences, and sincere efforts to address my financial needs have reinforced my trust and confidence in their services.
                                        </p>
                                        <h3 className="title">MRS. SRI PRIYA S</h3>
                                        <p className="from">United States Of America</p>
                                        <div className="pic">
                                            <img src="/assets/images/testimonial7.jpg" alt="image" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial_box">
                                        <i className="icon-quote" />
                                        <div className="rating">
                                            <ul>
                                                <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /></li>
                                            </ul>
                                        </div>
                                        <p className="description">
                                            I feel very grateful and happy to have chosen J2 Wealth as my Investment adivsor. Thanks to their meticulously researched advice value of my investments as increased at a healthy pace!
                                        </p>
                                        <h3 className="title">MRS. RAMANI NATARAJAN</h3>
                                        <p className="from">Senior Advocate High Court - Chennai</p>
                                        <div className="pic">
                                            <img src="/assets/images/testimonial8.jpg" alt="image" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="arrows">
                            <div className="prev-single-one_three" />
                            <div className="next-single-one_three" />
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_55" />
                {/*===============spacing==============*/}
            </section>

            <style jsx global>{`
                /* Add these styles to ensure equal height */
                .swiper-wrapper {
                    display: flex;
                    align-items: stretch; /* This makes all slides the same height */
                }
                
                .swiper-slide {
                    height: auto; /* Allow height to adjust based on content */
                    display: flex; /* Needed for proper height adjustment */
                }
                
                .testimonial_box {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    background: #fff;
                    padding: 30px;
                    border-radius: 10px;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
                    position: relative;
                }
                
                /* Rest of your existing styles */
                .testimonial-section {
                    position: relative;
                    overflow: hidden;
                }
                
                .testimonial_sec {
                    position: relative;
                }
                
                .testimonial_box .icon-quote {
                    position: absolute;
                    top: 30px;
                    right: 30px;
                    font-size: 60px;
                    color: rgba(0,0,0,0.05);
                    z-index: 0;
                }
                
                .testimonial_box .rating {
                    margin-bottom: 15px;
                    position: relative;
                    z-index: 1;
                }
                
                .testimonial_box .rating ul {
                    padding: 0;
                    margin: 0;
                    list-style: none;
                }
                
                .testimonial_box .rating ul li {
                    display: inline-block;
                }
                
                .testimonial_box .rating ul li span.fa-star {
                    color: #ffc107;
                    margin-right: 3px;
                }
                
                .testimonial_box .description {
                    font-size: 16px;
                    line-height: 1.6;
                    margin-bottom: 20px;
                    position: relative;
                    z-index: 1;
                    flex-grow: 1; /* This makes the description take up available space */
                }
                
                .testimonial_box .title {
                    font-size: 18px;
                    font-weight: 600;
                    margin-bottom: 5px;
                    position: relative;
                    z-index: 1;
                }
                
                .testimonial_box .from {
                    font-size: 14px;
                    color: #777;
                    margin-bottom: 20px;
                    position: relative;
                    z-index: 1;
                }
                
                   .testimonial_box .pic {
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    overflow: hidden;
                    margin: 20px auto 0; /* Centers the image horizontally and adds space above */
                    border: 3px solid #fff;
                    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
                }
                
                .testimonial_box .pic img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                    display: block;
                }
                
                .arrows {
                    position: relative;
                    margin-top: 30px;
                    text-align: center;
                }
                
                .prev-single-one_three,
                .next-single-one_three {
                    display: inline-block;
                    width: 40px;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    background: #fff;
                    color: #333;
                    border-radius: 50%;
                    margin: 0 5px;
                    cursor: pointer;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                    transition: all 0.3s ease;
                }
                
                .prev-single-one_three:hover,
                .next-single-one_three:hover {
                    background: #2a41e8;
                    color: #fff;
                }
            `}</style>
        </>
    )
}