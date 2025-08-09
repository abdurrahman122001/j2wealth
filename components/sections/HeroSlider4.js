import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper"
import VideoBox from "../elements/VideoBox"
import Link from "next/link"

export default function HeroSlider4() {
    const swiperOptions = {
        direction: 'horizontal',
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
        navigation: {
            nextEl: '.h1n',
            prevEl: '.h1p',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    }

    return (
        <>
            <section className="slider style_three pag_position_two">
                <Swiper {...swiperOptions} className="banner_carousel owl_nav_none owl_dots_block theme_carousel">

                    {/* Slide 1 */}
                    <SwiperSlide className="slide-item">
                        <div className="slide-item-content content_center">
                            <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/sliders/slider-4-3.jpg)' }} />
                            <div className="auto-container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="slider_content" style={{ padding: '50px 0px' }}>
                                            <h6 className="animated _fadeInDownBig">Our Vision to Grow Better</h6>
                                            <h1 className="animated _fadeInDownBig">
                                                Secure Your Future <br /> with SIP Plans
                                            </h1>
                                            <p className="animated _flipInY">
                                                Duty obligations of business it will frequently occur that pleasures <br />
                                                have to be repudiated and annoyances accepted.
                                            </p>
                                            <ul>
                                                <li>
                                                    <Link href="#" className="theme-btn five animated _zoomIn">
                                                        Read More
                                                    </Link>
                                                </li>
                                                <li>
                                                    <div className="video_box animated _flipInX">
                                                        <VideoBox />
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide 2 */}
                    <SwiperSlide className="slide-item">
                        <div className="slide-item-content content_right">
                            <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/sliders/slider-4-2.jpg)' }} />
                            <div className="auto-container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="slider_content" style={{ padding: '50px 0px' }}>
                                            <h6 className="animated _fadeInDownBig">Hire the Best</h6>
                                            <h1 className="animated _fadeInDownBig">
                                                Grow Wealth with <br /> Smart Strategies
                                            </h1>
                                            <p className="animated _flipInY">
                                                On the other hand, we denounce with righteous indignation and <br />
                                                dislike men who are so beguiled.
                                            </p>
                                            <ul>
                                                <li>
                                                    <Link href="#" className="theme-btn five animated _zoomIn">
                                                        Read More
                                                    </Link>
                                                </li>
                                                <li>
                                                    <div className="video_box animated _flipInX">
                                                        <VideoBox />
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide 3 */}
                    <SwiperSlide className="slide-item">
                        <div className="slide-item-content content_left">
                            <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/sliders/slider-4-1.jpg)' }} />
                            <div className="auto-container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="slider_content" style={{ padding: '50px 0px' }}>
                                            <h6 className="animated _fadeInDownBig">Our Vision to Grow Better</h6>
                                            <h1 className="animated _fadeInDownBig">
                                                A Happy Family & <br /> Secure Finances
                                            </h1>
                                            <p className="animated _flipInY">
                                                These cases are perfectly simple and easy to distinguish. In a free <br />
                                                hour, when our power of choice is untrammelled.
                                            </p>
                                            <ul>
                                                <li>
                                                    <Link href="#" className="theme-btn five animated _zoomIn">
                                                        Read More
                                                    </Link>
                                                </li>
                                                <li>
                                                    <div className="video_box animated _flipInX">
                                                        <VideoBox />
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <div className="swiper-pagination"></div>
                </Swiper>
            </section>
        </>
    )
}
