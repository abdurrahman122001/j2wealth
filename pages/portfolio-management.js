import Layout from "@/components/layout/Layout"
import { useState } from 'react'
import Link from "next/link"

export default function PortfolioManagement() {
  const [isActive, setIsActive] = useState({ status: false, key: 1 });

  const handleToggle = (key) => {
    setIsActive(isActive.key === key ? { status: false } : { status: true, key });
  };

  return (
    <>
      <Layout breadcrumbTitle="Portfolio Management Services" headerStyle={4} footerStyle={4}>
        <div className="auto-container">
          <div className="row default_row">
            <div id="primary" className="content-area service col-lg-8">
              <main role="main" className="site-main">
                <div className="pd_top_85" />
                <article className="clearfix service type-service hentry">
                  <div className="title_all_box style_one dark_color">
                    <div className="title_sections left">
                      <div className="before_title">Professional Oversight</div>
                      <div className="title">Portfolio Management Services</div>
                      <p>
                        With the help of a research team, knowledgeable portfolio managers and stock market experts at
                        Portfolio Management Service (PMS), a professional financial service, manage your equity portfolio.
                        In their Demat Account, many investors have equity portfolios, but managing them can be difficult.
                        PMS is a methodical way to maximize profits on your assets while lowering the risk component.
                        It allows you to effortlessly make wise selections that are backed by substantial investigation
                        and verifiable information. It also equips you more effectively to handle market difficulties.
                      </p>
                    </div>
                  </div>

                  <div className="pd_bottom_25" />

                  <div className="faq_section type_two">
                    <div className="block_faq">
                      <div className="accordion">
                        <dl>
                          <dt
                            className={isActive.key === 1 ? "faq_header active" : "faq_header"}
                            onClick={() => handleToggle(1)}
                          >
                            Active Portfolio Management<span className="icon-play" />
                          </dt>
                          <dd style={{ display: isActive.key === 1 ? "block" : "none" }}>
                            <p>
                              The main objective of the portfolio manager is to maximize returns. The active portfolio management
                              approach diversifies your investments across asset classes, industries, and companies to lower risk,
                              though it may have a higher turnover rate versus passive methods.
                            </p>
                          </dd>

                          <dt
                            className={isActive.key === 2 ? "faq_header active" : "faq_header"}
                            onClick={() => handleToggle(2)}
                          >
                            Passive Portfolio Management<span className="icon-play" />
                          </dt>
                          <dd style={{ display: isActive.key === 2 ? "block" : "none" }}>
                            <p>
                              This approach relies on predefined profiles following the overall market direction. Portfolio managers
                              invest in index funds, which grow passively over time with minimal management, providing decent long-term returns.
                            </p>
                          </dd>

                          <dt
                            className={isActive.key === 3 ? "faq_header active" : "faq_header"}
                            onClick={() => handleToggle(3)}
                          >
                            Discretionary Portfolio Management<span className="icon-play" />
                          </dt>
                          <dd style={{ display: isActive.key === 3 ? "block" : "none" }}>
                            <p>
                              Here, the portfolio manager selects a strategy tailored to your goals, risk tolerance, and investment horizon,
                              such as recommending equity funds for higher risk appetites or debt funds for conservative investors.
                            </p>
                          </dd>

                          <dt
                            className={isActive.key === 4 ? "faq_header active" : "faq_header"}
                            onClick={() => handleToggle(4)}
                          >
                            Non-Discretionary Portfolio Management<span className="icon-play" />
                          </dt>
                          <dd style={{ display: isActive.key === 4 ? "block" : "none" }}>
                            <p>
                              In this model, you retain decision-making control. Portfolio managers advise you, and act only upon your authorization.
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
                      <li><Link href="#">Portfolio Management Services</Link></li>
                      <li><Link href="#">Mutual Funds</Link></li>
                      <li><Link href="#">Stock Broking</Link></li>
                      <li><Link href="#">Alternative Investment Funds</Link></li>
                      <li><Link href="#">Tax Planning</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="widgets_grid_box">
                  <div className="brouchure_box_widget">
                    <div className="widget_content">
                      <h3>PMS Overview</h3>
                      <div className="color_white_1 clearfix">
                        <Link href="#" className="theme-btn color_white_1 one">Learn More</Link>
                      </div>
                      <img src="/assets/images/pms-overview.jpg" alt="Portfolio Management Services" />
                    </div>
                  </div>
                </div>
                <div className="widgets_grid_box">
                  <div className="widget widget_contactus">
                    <div className="contact_box_widget widget_box">
                      <div className="widget_content">
                        <div className="top_section">
                          <h3>Need Assistance?</h3>
                          <p>Our advisors are here to tailor your portfolio strategy.</p>
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
