import Layout from "@/components/layout/Layout"
import { useState } from 'react'
import Link from "next/link"

export default function StockBroking() {
  const [isActive, setIsActive] = useState({ status: false, key: 1 });

  const handleToggle = (key) => {
    setIsActive(isActive.key === key ? { status: false } : { status: true, key });
  };

  return (
    <>
      <Layout breadcrumbTitle="Stock Broking" headerStyle={4} footerStyle={4}>
        <div>
          <div className="auto-container">
            <div className="row default_row">
              <div id="primary" className="content-area service col-lg-8 col-md-12">
                <main role="main" className="site-main">
                  <div className="pd_top_85" />
                  <article className="clearfix service type-service hentry">
                    <div className="title_all_box style_one dark_color">
                      <div className="title_sections left">
                        <div className="before_title">Trade with Confidence</div>
                        <div className="title">Stock Broking</div>
                        <p>
                          Stockbroking is a financial service that connects investors to the stock market, enabling them to buy and sell shares on designated stock exchanges.
                        </p>
                      </div>
                    </div>

                    <div className="pd_bottom_25" />

                    <div className="row no-space">
                      <div className="col-xl-6 col-lg-12 ps-0 pe-xl-3">
                        <div className="description_box">
                          <p>
                            At J2 Wealth, we offer a seamless stockbroking experience, backed by market expertise, diverse investment options,
                            customized portfolios, and real-time insights to help you make informed decisions.
                          </p>
                        </div>
                        <div className="pd_bottom_25" />
                        <div className="icon_box_all style_one">
                          <div className="icon_content">
                            <div className="icon">
                              <img src="/assets/images/icon-image-nike.png" className="img-fluid svg_image" alt="Market Expertise" />
                            </div>
                            <div className="txt_content">
                              <h3><Link href="#">Market Expertise</Link></h3>
                              <p>Access seasoned professionals for investment guidance.</p>
                            </div>
                          </div>
                        </div>
                        <div className="pd_bottom_25" />
                        <div className="simple_image_boxes">
                          <img src="/assets/images/stock-broking-graph.jpg" className="object-fit-cover-center height_570px" alt="Stock Market Trends" />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-12 ps-0 ps-xl-3">
                        <div className="icon_box_all style_one">
                          <div className="icon_content">
                            <div className="icon">
                              <img src="/assets/images/icon-image-nike.png" className="img-fluid svg_image" alt="Diverse Options" />
                            </div>
                            <div className="txt_content">
                              <h3><Link href="#">Diverse Investment Options</Link></h3>
                              <p>Explore stocks, bonds, and other asset classes.</p>
                            </div>
                          </div>
                        </div>
                        <div className="pd_bottom_25" />
                        <div className="icon_box_all style_one">
                          <div className="icon_content">
                            <div className="icon">
                              <img src="/assets/images/icon-image-nike.png" className="img-fluid svg_image" alt="Customized Portfolios" />
                            </div>
                            <div className="txt_content">
                              <h3><Link href="#">Customized Portfolios</Link></h3>
                              <p>Strategies tailored to your individual risk appetite.</p>
                            </div>
                          </div>
                        </div>
                        <div className="pd_bottom_25" />
                        <h3>Real-time Insights</h3>
                        <div className="pd_bottom_15" />
                        <div className="description_box">
                          <p>
                            Stay informed with market trends and analysis, so you can act quickly and confidently.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pd_bottom_25" />

                    <h3>Key Highlights</h3>
                    <div className="pd_bottom_25" />
                    <div className="faq_section type_two">
                      <div className="block_faq">
                        <div className="accordion">
                          <dl>
                            <dt 
                              className={isActive.key === 1 ? "faq_header active" : "faq_header"} 
                              onClick={() => handleToggle(1)}
                            >
                              Market Expertise<span className="icon-play" />
                            </dt>
                            <dd style={{ display: isActive.key === 1 ? "block" : "none" }}>
                              <p>Access to seasoned professionals for investment guidance.</p>
                            </dd>
                            <dt 
                              className={isActive.key === 2 ? "faq_header active" : "faq_header"} 
                              onClick={() => handleToggle(2)}
                            >
                              Diverse Investment Options<span className="icon-play" />
                            </dt>
                            <dd style={{ display: isActive.key === 2 ? "block" : "none" }}>
                              <p>Explore stocks, bonds, and more to build a diversified portfolio.</p>
                            </dd>
                            <dt 
                              className={isActive.key === 3 ? "faq_header active" : "faq_header"} 
                              onClick={() => handleToggle(3)}
                            >
                              Real-time Insights<span className="icon-play" />
                            </dt>
                            <dd style={{ display: isActive.key === 3 ? "block" : "none" }}>
                              <p>Stay updated with market trends and analysis tailored to your strategy.</p>
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>

                  </article>
                  <div className="pd_bottom_65" />
                </main>
              </div>

              <aside className="widget-area all_side_bar col-lg-4 col-md-12">
                <div className="service_siderbar side_bar">
                  <div className="pd_top_85" />
                  <div className="widgets_grid_box">
                    <div className="widget creote_widget_service_list">
                      <h4 className="widget-title">Our Investment Services</h4>
                      <ul className="service_list_box">
                        <li><Link href="#">Stock Broking</Link></li>
                        <li><Link href="#">Mutual Funds</Link></li>
                        <li><Link href="#">Portfolio Management</Link></li>
                        <li><Link href="#">Savings Plans</Link></li>
                        <li><Link href="#">Tax Planning</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="widgets_grid_box">
                    <div className="brouchure_box_widget">
                      <div className="widget_content">
                        <h3>Stock Broking Guide</h3>
                        <div className="color_white_1 clearfix">
                          <Link href="#" className="theme-btn color_white_1 one">Download</Link>
                        </div>
                        <img src="/assets/images/stock-broking-guide.jpg" alt="Stock Broking Guide" />
                      </div>
                    </div>
                  </div>
                  <div className="widgets_grid_box">
                    <div className="widget widget_contactus">
                      <div className="contact_box_widget widget_box">
                        <div className="widget_content">
                          <div className="top_section">
                            <h3>Have Questions?</h3>
                            <p>Our brokers are ready to assist you.</p>
                          </div>
                          <div className="bottom_section">
                            <Link href="tel:+919500363787" className="phone_number">+91 95003 63787</Link>
                            <Link href="mailto:customercare@j2wealth.co.in" className="mailid">customercare@j2wealth.co.in</Link>
                          </div>
                        </div>
                        <Link href="#" className="theme-btn one">Contact Broker</Link>
                      </div>
                    </div>
                  </div>
                  <div className="pd_bottom_65" />
                </div>
              </aside>
            </div>
          </div>

          <section className="newsteller style_one bg_dark_1">
            <div className="pd_top_40" />
            <div className="auto-container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="content">
                    <h2>Join Our Mailing List</h2>
                    <p>Receive our latest market updates and stock tips in your inbox.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="item_scubscribe">
                    <div className="input_group">
                      <form method="post" data-name="Subscribe">
                        <div className="mc4wp-form-fields">
                          <input type="email" name="EMAIL" placeholder="Your email address" required />
                          <input type="submit" defaultValue="Sign up" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pd_bottom_40" />
          </section>
        </div>
      </Layout>
    </>
  )
}
