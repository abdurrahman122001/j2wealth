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

            <section className="project-section bg_op_1">
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
                                                    <h2 className="title_pro"><a href="#" rel="bookmark">ALTERNATIVE</a></h2>
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
                                                    <h2 className="title_pro"><a href="#" rel="bookmark">Essential Steps to Writing
                                                        Job Description</a></h2>
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
            </section>
            <div className="pd_bottom_80" />

            <section className="service_section bg_light_1" id="service">
                {/*===============spacing==============*/}
                <div className="pd_top_80" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row">
                        <div className="title_all_box style_one text-center dark_color">
                            <div className="title_sections">
                                <div className="before_title">Leading</div>
                                <h2>Effective Solutions</h2>
                                <p>We work with your company to identify position requirements, implement
                                    recruitment
                                    programs, and <br /> initiate employee assessments that maximize recruitment
                                    efforts </p>
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_20" />
                        {/*===============spacing==============*/}
                        <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="service_box style_two dark_color">
                                <div className="service_content_two ">
                                    <div className="content_inner" style={{ backgroundImage: 'url(/assets/images/service/service-image-1.png)' }}>
                                        <div className="content_inner_in">
                                            <div className="icon_image">
                                                <img src="/assets/images/010-job-search.png" className="img-fluid" alt="Service Image" />
                                            </div>
                                            <h2>
                                                <Link href="#">Recruitment Process</Link >
                                            </h2>
                                            <p>These cases are perfectly simple and easy to distinguish.</p>
                                            <ul>
                                                <li>Reducing Redundancy</li>
                                                <li>Uncovering Hidden Resources</li>
                                                <li>Increasing Company’s Agility</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="ovarlay_link">
                                        <Link href="#">
                                            <i className="icon-right-arrow" />
                                        </Link >
                                    </div>
                                    <div className="overlay_content">
                                        <h2>
                                            <Link href="#">Recruitment Process</Link >
                                        </h2>
                                        <p>These cases are perfectly simple and easy to distinguish.</p>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="mr_bottom_20" />
                            {/*===============spacing==============*/}
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="service_box style_two dark_color">
                                <div className="service_content_two  active_ser">
                                    <div className="content_inner" style={{ backgroundImage: 'url(/assets/images/service/service-image-2.png)' }}>
                                        <div className="content_inner_in">
                                            <div className="icon_image">
                                                <img src="/assets/images/service-ico-1.png" className="img-fluid" alt="Service Image" />
                                            </div>
                                            <h2>
                                                <Link href="#">Employee Relations</Link >
                                            </h2>
                                            <p>Indignation sed dislike men who are beguiled and demoralized.</p>
                                            <ul>
                                                <li>
                                                    Improving Communication
                                                </li>
                                                <li>
                                                    Employee issue resolution
                                                </li>
                                                <li>
                                                    Proper Documentation Process
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="ovarlay_link">
                                        <Link href="#">
                                            <i className="icon-right-arrow" />
                                        </Link >
                                    </div>
                                    <div className="overlay_content">
                                        <h2>
                                            <Link href="#">Employee Relations</Link >
                                        </h2>
                                        <p>Indignation sed dislike men who are beguiled and demoralized.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="mr_bottom_20" />
                            {/*===============spacing==============*/}
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="service_box style_two dark_color">
                                <div className="service_content_two ">
                                    <div className="content_inner" style={{ backgroundImage: 'url(/assets/images/service/service-image-3.png)' }}>
                                        <div className="content_inner_in">
                                            <div className="icon_image">
                                                <img src="/assets/images/service-ico-2.png" className="img-fluid" alt="Service Image" />
                                            </div>
                                            <h2>
                                                <Link href="#">Compliance Audits</Link >
                                            </h2>
                                            <p>Prevents our being able too what get like best every pleasure.</p>
                                            <ul>
                                                <li>
                                                    Handling of employment
                                                </li>
                                                <li>
                                                    Greater retention rates
                                                </li>
                                                <li>
                                                    A fully engaged workforce
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="ovarlay_link">
                                        <Link href="#">
                                            <i className="icon-right-arrow" />
                                        </Link >
                                    </div>
                                    <div className="overlay_content">
                                        <h2>
                                            <Link href="#">Compliance Audits</Link >
                                        </h2>
                                        <p>Prevents our being able too what get like best every pleasure.</p>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="mr_bottom_20" />
                            {/*===============spacing==============*/}
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_70" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
