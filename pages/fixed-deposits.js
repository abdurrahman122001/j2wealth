import Layout from "@/components/layout/Layout"
import { useState } from "react"
import Link from "next/link"

export default function FixedDeposits() {
  const [isActive, setIsActive] = useState({ status: false, key: 1 })

  const handleToggle = (key) => {
    setIsActive(isActive.key === key ? { status: false } : { status: true, key })
  }

  return (
    <>
      <Layout breadcrumbTitle="Fixed Deposits" headerStyle={4} footerStyle={1}>
        <div className="auto-container">
          <div className="row default_row">
            <div id="primary" className="content-area service col-lg-8">
              <main role="main" className="site-main">
                <div className="pd_top_85" />
                <article className="clearfix service type-service hentry">
                  <div className="title_all_box style_one dark_color">
                    <div className="title_sections left">
                      <div className="before_title">Secure Savings</div>
                      <div className="title">Fixed Deposits</div>
                      <p>
                        One of the most well-liked methods of saving money in India is through fixed deposits. They are simple to open, a safe investment with significant rewards. It is a set-rate-of-return investment choice with little risk. You may invest your money with FDs and receive a fixed rate of return for a predetermined amount of time.
                      </p>
                    </div>
                  </div>

                  <div className="pd_bottom_25" />

                  <div className="description_box">
                    <p>
                      Fixed deposits are among the traditional investment options (FDs). Sometimes referred to as term deposits with high interest rates, they are offered by banks. Because of their longevity, guaranteed returns over time, and reputation for safety, fixed-rate bonds (FDs) have long been linked to investing. A simple strategy for building money is to save.
                    </p>
                  </div>

                  <div className="pd_bottom_25" />

                  <h3>Quick Info</h3>
                  <div className="faq_section type_two">
                    <div className="block_faq">
                      <div className="accordion">
                        <dl>
                          <dt
                            className={isActive.key === 1 ? "faq_header active" : "faq_header"}
                            onClick={() => handleToggle(1)}
                          >
                            Quick Links<span className="icon-play" />
                          </dt>
                          <dd style={{ display: isActive.key === 1 ? "block" : "none" }}>
                            <p>
                              Mutual Funds · Stock Broking · Life Insurance · General Insurance · Bonds · Fixed Deposits · Taxation
                            </p>
                          </dd>

                          <dt
                            className={isActive.key === 2 ? "faq_header active" : "faq_header"}
                            onClick={() => handleToggle(2)}
                          >
                            Disclaimer & Registration<span className="icon-play" />
                          </dt>
                          <dd style={{ display: isActive.key === 2 ? "block" : "none" }}>
                            <p>
                              J2 Wealth is an AMFI Registered Mutual Fund Distributor.<br />
                              Disclaimer: Mutual fund investments are subject to market risks. Please read the scheme information and other related documents carefully before investing. Past performance is not indicative of future returns. Please consider your specific investment requirements before choosing a fund or designing a portfolio that suits your needs.<br />
                              J2 Wealth makes no warranties or representations, express or implied. It accepts no liability for damages or losses caused in connection with the use of its products or services. Terms and conditions of the website are applicable.
                            </p>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </article>
                <div className="pd_bottom_65" />
              </main>
            </div>

            <aside className="widget-area all_side_bar col-lg-4">
              <div className="service_siderbar side_bar">
                <div className="pd_top_85" />

                <div className="widgets_grid_box">
                  <div className="widget creote_widget_service_list">
                    <h4 className="widget-title">Our Services</h4>
                    <ul className="service_list_box">
                      <li><Link href="#">Fixed Deposits</Link></li>
                      <li><Link href="#">Bonds</Link></li>
                      <li><Link href="#">General Insurance</Link></li>
                      <li><Link href="#">Life Insurance</Link></li>
                      <li><Link href="#">Mutual Funds</Link></li>
                    </ul>
                  </div>
                </div>

                <div className="widgets_grid_box">
                  <div className="brouchure_box_widget">
                    <div className="widget_content">
                      <h3>Fixed Deposits Overview</h3>
                      <div className="color_white_1 clearfix">
                        <Link href="#" className="theme-btn color_white_1 one">Learn More</Link>
                      </div>
                      <img src="/assets/images/fixed-deposits.jpg" alt="Fixed Deposits Overview" />
                    </div>
                  </div>
                </div>

                <div className="widgets_grid_box">
                  <div className="widget widget_contactus">
                    <div className="contact_box_widget widget_box">
                      <div className="widget_content">
                        <div className="top_section">
                          <h3>Need Assistance?</h3>
                          <p>Our advisors are ready to help you plan secure returns with FDs.</p>
                        </div>
                        <div className="bottom_section">
                          <Link href="tel:+919500363787" className="phone_number">+91 95003 63787</Link>
                          <Link href="mailto:customercare@j2wealth.co.in" className="mailid">customercare@j2wealth.co.in</Link>
                        </div>
                      </div>
                      <Link href="#" className="theme-btn one">Contact Advisor</Link>
                    </div>
                  </div>
                </div>

                <div className="pd_bottom_65" />
              </div>
            </aside>
          </div>
        </div>
      </Layout>
    </>
  )
}
