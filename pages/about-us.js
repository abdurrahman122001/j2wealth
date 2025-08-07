import VideoBox from "@/components/elements/VideoBox";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Head from "next/head";
import { PartnerLogoSlider } from "@/components/sections/TeamSlider";

export default function AboutUs() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  const swiperOptions = {
    // General
    direction: "horizontal",
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    centeredSlides: true,

    // Navigation
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // Pagination
    pagination: {
      el: ".swiper-pagination",
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
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1350: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  };

  return (
    <>
      <Head>
        <title>Creote - About Us</title>
      </Head>

      <Layout breadcrumbTitle="About Us">
        {/*-about-*/}
        <section className="about-section">
          {/*===============spacing==============*/}
          <div className="pd_top_90" />
          {/*===============spacing==============*/}
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-12 ">
                <div className="about_content position-relative z_99">
                  <div className="title_all_box style_one text-left  dark_color">
                    <div className="title_sections">
                      <div className="before_title">We are</div>
                      <h2>About Our CEO</h2>
                    </div>
                  </div>
                  {/*===============spacing==============*/}
                  <div className="pd_bottom_15" />
                  {/*===============spacing==============*/}

                  <div className="description_box">
                    <p>
                      Mr.Jilani is Founder, MD and CEO of J2 Wealth Pvt Ltd.-
                      Jilani,as a professional entrepreneur set up J2 Wealth in
                      2019. He has more than 18 years of experience in the
                      financial services industry, across wealth management and
                      direct equity. He is responsible for providing direction
                      and leadership towards the achievement of the
                      organization's strategic goals and objectives. Under his
                      leadership, J2 Wealth has grown from its humble beginnings
                      to becoming the leading Independent Financial Advisor in
                      India managing more than INR 2,000 crore in client assets.
                    </p>
                  </div>
                  {/*===============spacing==============*/}
                  <div className="pd_bottom_25" />
                  {/*===============spacing==============*/}

                  <div className="theme_btn_all color_one">
                    <Link href="#" className="theme-btn five">
                      Contact us
                      <i className="icon-right-arrow" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12">
                <div className="image_boxes style_two">
                  <img
                    src="/assets/images/shape-1.png"
                    className="background_image"
                    alt="image"
                  />
                  <div className="image one w-100">
                    <img
                      src="/assets/images/jilani.png"
                      className="img-fluid"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*===============spacing==============*/}
          <div className="pd_bottom_70" />
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-12">
                <div className="image_boxes style_two">
                  <img
                    src="/assets/images/shape-1.png"
                    className="background_image"
                    alt="image"
                  />
                  <div className="image one w-100">
                    <img
                      src="/assets/images/business-head.png"
                      className="img-fluid"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 ">
                <div className="about_content position-relative z_99">
                  <div className="title_all_box style_one text-left  dark_color">
                    <div className="title_sections">
                      <div className="before_title">We are</div>
                      <h2>ABOUT OUR BUSINESS HEAD</h2>
                    </div>
                  </div>
                  {/*===============spacing==============*/}
                  <div className="pd_bottom_15" />
                  {/*===============spacing==============*/}

                  <div className="description_box">
                    <p>
                      Mr. Rajasekar, the Business Head at J2 Wealth Private
                      Limited, brings with him over 20 years of extensive
                      industry experience. Throughout his illustrious career, he
                      has excelled in the financial services sector,
                      demonstrating exceptional expertise and delivering
                      outstanding results. With a remarkable track record, Mr.
                      Rajasekar has successfully managing more than 500 clients
                      with an AUM of more than 300 Crores. His previous tenure
                      at Cholamandalam Securities Ltd further enriched his
                      knowledge and honed his skills, positioning him as a
                      seasoned professional in the field. With his wealth of
                      experience and proven success, Mr. Rajasekar plays a
                      pivotal role in driving the growth and success of J2
                      Wealth, making him a valuable asset to the organization.
                    </p>
                  </div>
                  {/*===============spacing==============*/}
                  <div className="pd_bottom_25" />
                  {/*===============spacing==============*/}

                  <div className="theme_btn_all color_one">
                    <Link href="#" className="theme-btn five">
                      Contact us
                      <i className="icon-right-arrow" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*-about end-*/}
        {/*-service-*/}
        <section className="service-icon-section bg_light_1">
          {/*===============spacing==============*/}
          <div className="pd_top_90" />
          {/*===============spacing==============*/}
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="title_all_box style_one text-center dark_color">
                  <div className="title_sections">
                    <div className="before_title">Our Business</div>
                    <h2 className="title">Stand Out From The Rest</h2>
                  </div>
                  {/*===============spacing==============*/}
                  <div className="pd_bottom_20" />
                  {/*===============spacing==============*/}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="simple_image_boxes parallax_cover height_264px">
                  <img
                    src="/assets/images/icon-img-ab-1.jpg"
                    className="simp_img cover-parallax"
                    alt="image"
                  />
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_20" />
                {/*===============spacing==============*/}
                <div className="icon_box_all style_three">
                  <div className="icon_content ">
                    <div className="icon">
                      <span className=" icon-bow-and-arrow" />
                    </div>
                    <div className="txt_content">
                      <h3>
                        <Link href="#">Our Mission</Link>
                      </h3>
                      <p>
                        We foster long-term relationships built on trust,
                        transparency and thought leadership. Our mission is to
                        preserve, protect, and grow our clients' legacy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-4 mt-lg-0 mt-xl-0">
                <div className="icon_box_all style_three">
                  <div className="icon_content ">
                    <div className="icon">
                      <span className=" icon-growth" />
                    </div>
                    <div className="txt_content">
                      <h3>
                        <Link href="#">Our Core Values</Link>
                      </h3>
                      <p>
                        Equal blame belongs to those who fail in their duty
                        through weakness of will which the same as saying.
                      </p>
                      <ul>
                        <li>Integrity</li>
                        <li>Commitment to excellence</li>
                        <li>Consumer focus</li>
                        <li>Accountability</li>
                        <li>Inclusiveness</li>
                      </ul>
                      <div className="btn_left">
                        <Link href="#" className="theme-btn one">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-4 mt-lg-4 mt-xl-0">
                <div className="icon_box_all style_three">
                  <div className="icon_content ">
                    <div className="icon">
                      <span className=" icon-binoculars" />
                    </div>
                    <div className="txt_content">
                      <h3>
                        <Link href="#">Our Vision</Link>
                      </h3>
                      <p>
                        We believe financial freedom is attainable for everyone.
                        Our experienced team is dedicated to helping clients
                        reach their financial goals.
                      </p>
                    </div>
                  </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_20" />
                {/*===============spacing==============*/}
                <div className="simple_image_boxes  height_264px">
                  <img
                    src="/assets/images/icon-img-ab-2.jpg"
                    className="simp_img img-fluid"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
          {/*===============spacing==============*/}
          <div className="pd_top_90" />
          {/*===============spacing==============*/}
        </section>
        {/*-service end-*/}
        {/*-timeline--*/}
        <PartnerLogoSlider />
        {/*-timeline--*/}
        {/*-tab--*/}
        <section
          className="tab-section bg_op_1"
          style={{ backgroundImage: "url(/assets/images/tab-sec-bg.jpg)" }}
        >
          {/*===============spacing==============*/}
          <div className="pd_top_100" />
          {/*===============spacing==============*/}
          <div className="container">
            <div className="row">
              <div className="tabs_all_box  tabs_all_box_start type_one">
                <div className="tab_over_all_box">
                  <div className="tabs_header clearfix">
                    <ul className="showcase_tabs_btns nav-pills nav   clearfix">
                      <li className="nav-item">
                        <a
                          className={
                            activeIndex === 1
                              ? "s_tab_btn nav-link active"
                              : "s_tab_btn nav-link"
                          }
                          onClick={() => handleOnClick(1)}
                        >
                          01. Affordable
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={
                            activeIndex === 2
                              ? "s_tab_btn nav-link active"
                              : "s_tab_btn nav-link"
                          }
                          onClick={() => handleOnClick(2)}
                        >
                          02. Knowledge
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={
                            activeIndex === 3
                              ? "s_tab_btn nav-link active"
                              : "s_tab_btn nav-link"
                          }
                          onClick={() => handleOnClick(3)}
                        >
                          03. Saves Time
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={
                            activeIndex === 4
                              ? "s_tab_btn nav-link active"
                              : "s_tab_btn nav-link"
                          }
                          onClick={() => handleOnClick(4)}
                        >
                          04. Fast &amp; Quality
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={
                            activeIndex === 5
                              ? "s_tab_btn nav-link active"
                              : "s_tab_btn nav-link"
                          }
                          onClick={() => handleOnClick(5)}
                        >
                          05. Experienced
                        </a>
                      </li>
                    </ul>
                    <div className="toll_free">
                      <Link href="tel:180667586677">
                        {" "}
                        <i className="icon-phone-call" />
                        Call For Free Consultation
                      </Link>
                    </div>
                  </div>
                  <div className="s_tab_wrapper">
                    <div className="s_tabs_content">
                      <div
                        className={
                          activeIndex === 1
                            ? "s_tab fade active-tab show"
                            : "s_tab fade"
                        }
                      >
                        <div
                          className="tab_content one"
                          style={{
                            backgroundImage:
                              "url(/assets/images/tab-image.jpg)",
                          }}
                        >
                          <div className="content_image">
                            <h6>Why Creote</h6>
                            <h2>Affordable &amp; Flexible</h2>
                            <p>
                              Must explain too you how all this mistaken idea of
                              denouncing pleasures praising pain was born and we
                              will give you complete account of the system the
                              actual teachings of the great explorer.
                            </p>
                            <Link href="#" className="rd_more">
                              Read More <i className="icon-right-arrow" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          activeIndex === 2
                            ? "s_tab fade active-tab show"
                            : "s_tab fade"
                        }
                      >
                        <div
                          className="tab_content one"
                          style={{
                            backgroundImage:
                              "url(/assets/images/blog/blog-image-8.jpg)",
                          }}
                        >
                          <div className="content_image">
                            <h6>Why Creote</h6>
                            <h2>Affordable &amp; Flexible</h2>
                            <p>
                              Must explain too you how all this mistaken idea of
                              denouncing pleasures praising pain was born and we
                              will give you complete account of the system the
                              actual teachings of the great explorer.
                            </p>
                            <Link href="#" className="rd_more">
                              Read More
                              <i className="icon-right-arrow" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          activeIndex === 3
                            ? "s_tab fade active-tab show"
                            : "s_tab fade"
                        }
                      >
                        <div
                          className="tab_content one"
                          style={{
                            backgroundImage:
                              "url(/assets/images/banner-five-bg.jpg)",
                          }}
                        >
                          <div className="content_image">
                            <h6>Why Creote</h6>
                            <h2>Affordable &amp; Flexible</h2>
                            <p>
                              Must explain too you how all this mistaken idea of
                              denouncing pleasures praising pain was born and we
                              will give you complete account of the system the
                              actual teachings of the great explorer.
                            </p>
                            <Link href="#" className="rd_more">
                              Read More <i className="icon-right-arrow" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          activeIndex === 4
                            ? "s_tab fade active-tab show"
                            : "s_tab fade"
                        }
                      >
                        <div
                          className="tab_content one"
                          style={{
                            backgroundImage:
                              "url(/assets/images/home-4-about-1.jpg)",
                          }}
                        >
                          <div className="content_image">
                            <h6>Why Creote</h6>
                            <h2>Affordable &amp; Flexible</h2>
                            <p>
                              Must explain too you how all this mistaken idea of
                              denouncing pleasures praising pain was born and we
                              will give you complete account of the system the
                              actual teachings of the great explorer.
                            </p>
                            <Link href="#" className="rd_more">
                              Read More <i className="icon-right-arrow" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          activeIndex === 5
                            ? "s_tab fade active-tab show"
                            : "s_tab fade"
                        }
                      >
                        <div
                          className="tab_content one"
                          style={{
                            backgroundImage:
                              "url(/assets/images/image-about-ls.jpg)",
                          }}
                        >
                          <div className="content_image">
                            <h6>Why Creote</h6>
                            <h2>Affordable &amp; Flexible</h2>
                            <p>
                              Must explain too you how all this mistaken idea of
                              denouncing pleasures praising pain was born and we
                              will give you complete account of the system the
                              actual teachings of the great explorer.
                            </p>
                            <Link href="#" className="rd_more">
                              Read More <i className="icon-right-arrow" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*===============spacing==============*/}
          <div className="pd_bottom_90" />
          {/*===============spacing==============*/}
        </section>
        {/*-tab-end-*/}
        {/*-newsteller-*/}
        <section className="newsteller style_one bg_dark_1">
          {/*===============spacing==============*/}
          <div className="pd_top_40" />
          {/*===============spacing==============*/}
          <div className="auto-container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="content">
                  <h2>Join Our Mailing List</h2>
                  <p>
                    For receiving our news and updates in your inbox directly.{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="item_scubscribe">
                  <div className="input_group">
                    <form
                      className="mc4wp-form"
                      method="post"
                      data-name="Subscibe"
                    >
                      <div className="mc4wp-form-fields">
                        <input
                          type="email"
                          name="EMAIL"
                          placeholder="Your email address"
                          required
                        />
                        <input type="submit" defaultValue="Sign up" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*===============spacing==============*/}
          <div className="pd_bottom_40" />
          {/*===============spacing==============*/}
        </section>
        {/*-newsteller end-*/}
      </Layout>
    </>
  );
}
