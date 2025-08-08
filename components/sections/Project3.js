import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Project3() {
    const swiperOptions = {
        // General
        direction: 'horizontal',
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 5,
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
                slidesPerView: 3,
                spaceBetween: 30,
            },
            991: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1199: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
            1350: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
        }
    };

    const tools = [
        {
            id: 1,
            title: "FINANCIAL CALCULATOR",
            description: "Calculate your investment returns and plan your financial future with our comprehensive calculator.",
            image: "/assets/images/projects/project-4-img.jpg"
        },
        {
            id: 2,
            title: "DOWNLOAD FORMS",
            description: "Access all necessary investment forms and documents for your convenience.",
            image: "/assets/images/projects/project-3-img.jpg"
        },
        {
            id: 3,
            title: "PAY PREMIUM ONLINE",
            description: "Conveniently make your premium payments through our secure portal.",
            image: "/assets/images/projects/project-2-img.jpg"
        },
        {
            id: 4,
            title: "FINANCIAL FITNESS",
            description: "Assess and improve your financial health with our assessment tools.",
            image: "/assets/images/projects/project-6-img.jpg"
        },
        {
            id: 5,
            title: "RISK PROFILE",
            description: "Determine your investment risk tolerance with our profile assessment.",
            image: "/assets/images/projects/project-5-img.jpg"
        },
        {
            id: 6,
            title: "TAX CALCULATOR",
            description: "Estimate your tax liabilities and plan your investments accordingly.",
            image: "/assets/images/projects/project-4-img.jpg"
        }
    ];

    return (
        <>
            <section className="project-section bg_dark_3">
                {/*===============spacing==============*/}
                <div className="pd_top_85" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-8 col-sm-12 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0">
                            <div className="title_all_box style_three light_color">
                                <div className="title_sections three left">
                                    <div className="before_title">Tools</div>
                                    <h2>Investor Corner</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="theme_btn_all color_one text-md-end">
                                <Link href="#" className="theme-btn five">View All Tools <i className="icon-right-arrow" /></Link>
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_35" />
                        {/*===============spacing==============*/}
                    </div>
                </div>
                <div className="container-fluid pd_zero">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="project_caro_section style_two light_color">
                                <div className="swiper-container">
                                    <Swiper {...swiperOptions} className="swiper-wrapper">
                                        {tools.map((tool) => (
                                            <SwiperSlide key={tool.id}>
                                                <div className="project_post style_seven">
                                                    <div className="image_box">
                                                        <img 
                                                            src={tool.image} 
                                                            className="img-fluid" 
                                                            alt={tool.title}
                                                        />
                                                    </div>
                                                    <div className="content_box">
                                                        <h2 className="title_pro">
                                                            <Link href="#">{tool.title}</Link>
                                                        </h2>
                                                        <div className="image_zoom_box">
                                                            <Link href={tool.image} data-fancybox="gallery">
                                                                <span className="fa fa-plus zoom_icon" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="overlay">
                                                        <div className="text">
                                                            <h2 className="title_pro">
                                                                <Link href="#">{tool.title}</Link>
                                                            </h2>
                                                            <p className="short_desc">{tool.description}</p>
                                                            <Link href="#" className="read_more tp_five">Explore Tool</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                    <div className="p_pagination">
                                        <div className="swiper-pagination" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_65" />
                {/*===============spacing==============*/}
            </section>
        </>
    )
}