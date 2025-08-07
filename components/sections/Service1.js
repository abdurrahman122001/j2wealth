import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
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
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
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

export default function Service1() {
    return (
        <>

            <section className="project-section bg_light_1" id="service">
                <div className="pd_top_80" />
                <div className="medium-container">
                    <div className="row">
                        <div className="title_all_box style_one text-center dark_color">
                            <div className="title_sections">
                                <div className="before_title">Services</div>
                                <h2>What we Provide</h2>
                                <p>We work with your company to identify position requirements, implement
                                    recruitment
                                    programs, and <br /> initiate employee assessments that maximize recruitment
                                    efforts </p>
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_20" />
                        <div className="col-lg-12">
                            <div className="project_caro_section carousel style_three ">
                                <div className="swiper-container">
                                    <Swiper {...swiperOptions}>
                                        <SwiperSlide>
                                            <div className="project_post style_nine">
                                                <div className="image">
                                                    <img loading="lazy" width={999} height={665} src="../assets/images/projects/project-1-img.jpg" className="img-fluid" alt="img" />
                                                    <div className="image_zoom_box ">
                                                        <a href="../assets/images/projects/project-1-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></a>
                                                    </div>
                                                </div>
                                                <div className="project_caro_content">
                                                    <h2 className="title_pro"><a href="#" rel="bookmark">TAX PLANNING</a></h2>
                                                    <p style={{ fontWeight: 500 }}>Tax Planning may be described as legal way of reducing of tax liability in a year by investing in different schemes as prescribed by income tax Act.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project_post style_nine">
                                                <div className="image">
                                                    <img width={746} height={497} src="../assets/images/projects/project-2-img.jpg" className="img-fluid" alt="img" />
                                                    <div className="image_zoom_box ">
                                                        <a href="../assets/images/projects/project-2-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></a>
                                                    </div>
                                                </div>
                                                <div className="project_caro_content">
                                                    <h2 className="title_pro"><a href="#" rel="bookmark">Mutual Funds</a></h2>
                                                    <p style={{ fontWeight: 500 }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project_post style_nine">
                                                <div className="image">
                                                    <img width={742} height={495} src="../assets/images/projects/project-3-img.jpg" className="img-fluid" alt="img" />
                                                    <div className="image_zoom_box ">
                                                        <a href="../assets/images/projects/project-3-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></a>
                                                    </div>
                                                </div>
                                                <div className="project_caro_content">
                                                    <h2 className="title_pro"><a href="#" rel="bookmark">Stock Broking</a></h2>
                                                    <p style={{ fontWeight: 500 }}>Stockbroking is a financial service that connects investors to the stock market, enabling them to buy and sell shares on designated stock exchanges.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project_post style_nine">
                                                <div className="image">
                                                    <img loading="lazy" width={999} height={665} src="../assets/images/projects/project-4-img.jpg" className="img-fluid" alt="img" />
                                                    <div className="image_zoom_box ">
                                                        <a href="../assets/images/projects/project-1-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></a>
                                                    </div>
                                                </div>
                                                <div className="project_caro_content">
                                                    <h2 className="title_pro"><a href="#" rel="bookmark">PORTFOLIO</a></h2>
                                                    <p style={{ fontWeight: 500 }}>With the help of a research team, knowledgeable portfolio managers and stock market experts at Portfolio Management Service (PMS), a professional financial service, manage your equity portfolio.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project_post style_nine">
                                                <div className="image">
                                                    <img width={746} height={497} src="../assets/images/projects/project-5-img.jpg" className="img-fluid" alt="img" />
                                                    <div className="image_zoom_box ">
                                                        <a href="../assets/images/projects/project-2-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></a>
                                                    </div>
                                                </div>
                                                <div className="project_caro_content">
                                                    <h2 className="title_pro"><a href="#" rel="bookmark">ALTERNATIVE INVESTMENT</a></h2>
                                                    <p style={{ fontWeight: 500 }}>An "alternative investment fund" is a group of pooled funds that are used to invest in venture capital, hedge funds, private equity, and other kinds of investments.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project_post style_nine">
                                                <div className="image">
                                                    <img loading="lazy" width={999} height={665} src="../assets/images/projects/project-1-img.jpg" className="img-fluid" alt="img" />
                                                    <div className="image_zoom_box ">
                                                        <a href="../assets/images/projects/project-1-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></a>
                                                    </div>
                                                </div>
                                                <div className="project_caro_content">
                                                    <h2 className="title_pro"><a href="#" rel="bookmark">Life Insurance</a></h2>
                                                    <p style={{ fontWeight: 500 }}>The gift of life is precious, and you cannot put a price tag on it. But one needs money for survival and to satisfy the needs of the family.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project_post style_nine">
                                                <div className="image">
                                                    <img width={746} height={497} src="../assets/images/projects/project-2-img.jpg" className="img-fluid" alt="img" />
                                                    <div className="image_zoom_box ">
                                                        <a href="../assets/images/projects/project-2-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></a>
                                                    </div>
                                                </div>
                                                <div className="project_caro_content">
                                                    <h2 className="title_pro"><a href="#" rel="bookmark">Guaranteed Return Plan
                                                    </a></h2>
                                                    <p style={{ fontWeight: 500 }}>A guaranteed return plan, as the name suggests, lets you save your money and offers guaranteed returns for your future, with customizable income or return options as per your need.

                                                    </p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project_post style_nine">
                                                <div className="image">
                                                    <img loading="lazy" width={999} height={665} src="../assets/images/projects/project-4-img.jpg" className="img-fluid" alt="img" />
                                                    <div className="image_zoom_box ">
                                                        <a href="../assets/images/projects/project-1-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></a>
                                                    </div>
                                                </div>
                                                <div className="project_caro_content">
                                                    <h2 className="title_pro"><a href="#" rel="bookmark">SAVINGS PLAN</a></h2>
                                                    <p style={{ fontWeight: 500 }} >A savings plan is a unique financial instrument that lets you save money for future needs in a systematic manner while also providing you with life insurance coverage.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project_post style_nine">
                                                <div className="image">
                                                    <img width={746} height={497} src="../assets/images/projects/project-5-img.jpg" className="img-fluid" alt="img" />
                                                    <div className="image_zoom_box ">
                                                        <a href="../assets/images/projects/project-2-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></a>
                                                    </div>
                                                </div>
                                                <div className="project_caro_content">
                                                    <h2 className="title_pro"><a href="#" rel="bookmark">GENERAL INSURANCE</a></h2>
                                                    <p style={{ fontWeight: 500 }}>General insurance, also known as non-life insurance, is a type of insurance that provides coverage for a wide range of risks other than life.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project_post style_nine">
                                                <div className="image">
                                                    <img width={746} height={497} src="../assets/images/projects/project-5-img.jpg" className="img-fluid" alt="img" />
                                                    <div className="image_zoom_box ">
                                                        <a href="../assets/images/projects/project-2-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></a>
                                                    </div>
                                                </div>
                                                <div className="project_caro_content">
                                                    <h2 className="title_pro"><a href="#" rel="bookmark">BONDS</a></h2>
                                                    <p style={{ fontWeight: 500 }}>Bonds refer to high-security debt instruments that enable an entity to raise funds and fulfil capital requirements. </p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project_post style_nine">
                                                <div className="image">
                                                    <img width={746} height={497} src="../assets/images/projects/project-5-img.jpg" className="img-fluid" alt="img" />
                                                    <div className="image_zoom_box ">
                                                        <a href="../assets/images/projects/project-2-img.jpg" data-fancybox="gallery"><span className="fa fa-plus zoom_icon" /></a>
                                                    </div>
                                                </div>
                                                <div className="project_caro_content">
                                                    <h2 className="title_pro"><a href="#" rel="bookmark">FIXED DEPOSITS</a></h2>
                                                    <p style={{ fontWeight: 500 }}>One of the most well-liked methods of saving money in India is through fixed deposits.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                    <div className="p_pagination">
                                        <div className="pswiper-pagination" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pd_bottom_80" />

            </section>

        </>
    )
}
