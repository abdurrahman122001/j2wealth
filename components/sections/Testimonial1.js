
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Testimonial1() {
    const swiperOptions = {
        // General
        direction: 'horizontal',
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,

        // Navigation
        navigation: {
            nextEl: '.prev-single-one',
            prevEl: '.prev-single-one',
        },

        // Pagination
        pagination: {
            el: '.number-pagination',
            clickable: true,
            type: "fraction"
        }
    };
    return (
        <>
            <section className="testimonial bg_op_1" style={{ backgroundImage: 'url(/assets/images/testimonialbg.jpg)' }}>
                <div className="row align-items-center">
                    <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 pd_zero">
                        <div className="image">
                            <img src="/assets/images/testi-image.jpg" className="object-fit-cover img-fluid height_560px" alt="image" />
                        </div>
                    </div>
                    <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 pd_zero">
                        {/*===============spacing==============*/}
                        <div className="pd_top_70" />
                        {/*===============spacing==============*/}
                        <div className="testimonial_sec_wrapper pd_left_70">
                            <div className="title_all_box style_one light_color">
                                <div className="title_sections">
                                    <div className="before_title">
                                        Quote About
                                    </div>
                                    <h2> Customers Experience</h2>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_20" />
                                {/*===============spacing==============*/}
                            </div>
                            <div className="testimonial_sec light_color style_one">
                                <div className="icon_quotes">
                                    <i className="icon-quote" />
                                </div>
                                <div className="swiper-container">
                                    <Swiper {...swiperOptions} className="swiper-wrapper">
                                        <SwiperSlide>
                                            <div className="testimonial_box">
                                                <div className="rating">
                                                    <ul>
                                                        <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" />
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="authour_details  image_yes ">
                                                    <div className="image">
                                                        <img src="/assets/images/testimonial1.jpg" alt="image" />
                                                    </div>
                                                    <div className="details">
                                                        <h2>MR. VALANTIN ALBERT</h2>
                                                        <span>Project Manager  LNG Corporation - Singapore</span>
                                                    </div>
                                                </div>
                                                <div className="comment">
                                                    My long association with the J2 Wealth has brought excellent financial results for me and my loved ones. I’m impressed by their client relationships, effective communication, empathy, and thorough risk assessments. Wishing them continued success!
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testimonial_box">
                                                <div className="rating">
                                                    <ul>
                                                        <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" />
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="authour_details  image_yes ">
                                                    <div className="image">
                                                        <img src="/assets/images/testimonial2.jpg" alt="image" />
                                                    </div>
                                                    <div className="details">
                                                        <h2>MR. GANESAN G</h2>
                                                        <span>Ex-DGM HR  Cairn India</span>
                                                    </div>
                                                </div>
                                                <div className="comment">
                                                    My long and rewarding association with J2 Wealth has been exciting and memorable. Their success is driven by genuine customer focus, dedicated hard work, and exceptional support. Wishing Jilani and his team continued growth and success
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testimonial_box">
                                                <div className="rating">
                                                    <ul>
                                                        <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /></li>
                                                    </ul>
                                                </div>
                                                <div className="authour_details  image_yes ">
                                                    <div className="image">
                                                        <img src="/assets/images/testimonial3.jpg" alt="image" />
                                                    </div>
                                                    <div className="details">
                                                        <h2>MRS.GEETHA JAYARAM</h2>
                                                        <span>Ex-VIce President  Wipro</span>
                                                    </div>
                                                </div>
                                                <div className="comment">
                                                    I’m not very knowledgeable about financial matters, but J2 Wealth has greatly helped me grow my portfolio. Their team is always extremely helpful and responsive whenever I need assistance. I’m grateful for their outstanding support and expertise.
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testimonial_box">
                                                <div className="rating">
                                                    <ul>
                                                        <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /></li>
                                                    </ul>
                                                </div>
                                                <div className="authour_details  image_yes ">
                                                    <div className="image">
                                                        <img src="/assets/images/testimonial4.jpg" alt="image" />
                                                    </div>
                                                    <div className="details">
                                                        <h2>MR.SRIDHAR A</h2>
                                                        <span>Executive Vice President - Strategic Programs  E.I.D Parry India Limited</span>
                                                    </div>
                                                </div>
                                                <div className="comment">
                                                    J2 wealth: Excellent financial advisors in wealth creation to its clients. Has been customer friendly by communicating through emails, social medias and connecting to the financial experts with personal meetings by organising get to gethers. I wish them all the best                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testimonial_box">
                                                <div className="rating">
                                                    <ul>
                                                        <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /></li>
                                                    </ul>
                                                </div>
                                                <div className="authour_details  image_yes ">
                                                    <div className="image">
                                                        <img src="/assets/images/testimonial5.jpg" alt="image" />
                                                    </div>
                                                    <div className="details">
                                                        <h2>MR. RAMACHANDRAN P</h2>
                                                        <span>Tube Investment of India  Ex- President</span>
                                                    </div>
                                                </div>
                                                <div className="comment">
                                                    J2 Wealth has been exceptional since day one, consistently delivering impressive investment growth. Their commitment to clear communication, expert staff, and innovative technology ensures outstanding service. Their experienced and approachable leadership makes them truly stand out                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testimonial_box">
                                                <div className="rating">
                                                    <ul>
                                                        <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /></li>
                                                    </ul>
                                                </div>
                                                <div className="authour_details  image_yes ">
                                                    <div className="image">
                                                        <img src="/assets/images/testimonial6.jpg" alt="image" />
                                                    </div>
                                                    <div className="details">
                                                        <h2>MR. HUSSAINI KAGALWALA</h2>
                                                        <span>Vice President, Mobility & Cx  EJADA</span>
                                                    </div>
                                                </div>
                                                <div className="comment">
                                                    When he started J2 Wealth , I trusted him with my portfolio, and I haven’t regretted it. Over the past five years, J2 Wealth has exceeded my expectations with exceptional responsiveness and dedication                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testimonial_box">
                                                <div className="rating">
                                                    <ul>
                                                        <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /></li>
                                                    </ul>
                                                </div>
                                                <div className="authour_details  image_yes ">
                                                    <div className="image">
                                                        <img src="/assets/images/testimonial7.jpg" alt="image" />
                                                    </div>
                                                    <div className="details">
                                                        <h2>MRS. SRI PRIYA S</h2>
                                                        <span>United States Of America</span>
                                                    </div>
                                                </div>
                                                <div className="comment">
                                                    As one of the first clients of J2 Wealth, I had the confidence to transfer all my savings to them, and I’ve been consistently pleased with the results. Their prompt responses, regardless of time differences, and sincere efforts to address my financial needs have reinforced my trust and confidence in their services.
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testimonial_box">
                                                <div className="rating">
                                                    <ul>
                                                        <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /></li>
                                                    </ul>
                                                </div>
                                                <div className="authour_details  image_yes ">
                                                    <div className="image">
                                                        <img src="/assets/images/testimonial8.jpg" alt="image" />
                                                    </div>
                                                    <div className="details">
                                                        <h2>MRS. RAMANI NATARAJAN</h2>
                                                        <span>Senior Advocate  High Court - Chennai</span>
                                                    </div>
                                                </div>
                                                <div className="comment">
                                                    I feel very grateful and happy to have chosen J2 Wealth as my Investment adivsor. Thanks to their meticulously researched advice value of my investments as increased at a healthy pace !                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                    <div className="arrows">
                                        <div className="prev-single-one" />
                                        <div className="next-single-one" />
                                    </div>
                                    <div className="num_pagination">
                                        <div className="number-pagination">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_70" />
                        {/*===============spacing==============*/}
                    </div>
                    {/*-empty column-*/}
                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12">
                    </div>
                    {/*-empty column-*/}
                </div>
            </section>

        </>
    )
}
