import Link from "next/link"
import VideoBox from "../elements/VideoBox"

export default function About3() {
  return (
    <>
      <section className="about-section">
        <div className="pd_top_85" />
        <div className="container">
          <div className="row">
            {/* Left—Images and Video */}
            <div className="col-xl-6 col-lg-12 mb-5 mb-lg-5 mb-xl-0">
              <div className="image_boxes style_four">
                <div className="image_box one">
                  <img
                    src="/assets/images/about/about-11.jpg"
                    className="img-fluid"
                    alt="about"
                  />
                </div>
                <div className="image_box">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 ps-0 pe-0 pe-lg-3 mb-4 mb-lg-0">
                      <div className="imgs">
                        <img
                          src="/assets/images/about/about-3.jpg"
                          className="img-fluid one_img"
                          alt="about"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 ps-0 ps-lg-3 pe-0 pe-lg-0">
                      <div className="imgs">
                        <img
                          src="/assets/images/about/about-4.jpg"
                          className="img-fluid one_img"
                          alt="about"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="image_content_inner viceo_en">
                  <h2>Fostering Your Financial Future</h2>
                  <div className="video_box_null">
                    <VideoBox />
                  </div>
                </div>
              </div>
            </div>

            {/* Right—Text Content */}
            <div className="col-xl-6 col-lg-12">
              <div className="pd_left_20">
                <div className="pd_top_25" />
                <div className="title_all_box style_three dark_color">
                  <div className="title_sections three left">
                    <div className="before_title">About Us</div>
                    <h2>Wealth Management That Puts You First</h2>
                    <p>
                      J2 Wealth is among India's fastest-growing wealth
                      management firms, helping individuals and businesses grow,
                      protect, and preserve their assets. We proudly serve over
                      1,500 clients in India and worldwide.
                    </p>
                  </div>
                </div>
                <div className="mr_bottom_25" />

                <div className="description_box">
                  <p>
                    Led by Founder & CEO Mr. Jilani, with 18+ years in financial
                    services, we manage more than ₹2,000 crore in client
                    portfolios through trusted, personalised solutions.
                  </p>
                </div>
                <div className="mr_bottom_25" />

                <div className="title_sections three left">
                  <h3>Our Mission</h3>
                  <p>
                    We aim to empower financial freedom for all, building
                    lasting relationships based on trust, transparency, and a
                    holistic approach to wealth creation.
                  </p>
                </div>
                <div className="mr_bottom_30" />

                <div className="theme_btn_all color_one">
                  <Link href="#" className="theme-btn five">
                    Contact Us <i className="icon-right-arrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pd_bottom_60" />
      </section>
    </>
  )
}
