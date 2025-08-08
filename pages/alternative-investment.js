import Layout from "@/components/layout/Layout"
import { useState } from 'react'
import Link from "next/link"

export default function AlternativeInvestment() {
  const [isActive, setIsActive] = useState({ status: false, key: 1 });

  const handleToggle = (key) => {
    setIsActive(isActive.key === key ? { status: false } : { status: true, key });
  };

  return (
    <>
      <Layout breadcrumbTitle="Alternative Investment Funds"  headerStyle={4} footerStyle={4}>
        <div className="auto-container">
          <div className="row default_row">
            <div id="primary" className="content-area service col-lg-8">
              <main role="main" className="site-main">
                <div className="pd_top_85" />
                <article className="clearfix service type-service hentry">
                  <div className="title_all_box style_one dark_color">
                    <div className="title_sections left">
                      <div className="before_title">Alternative Investments</div>
                      <div className="title">Alternative Investment Funds</div>
                      <p>
                        An "alternative investment fund" is a group of pooled funds that are used to invest in venture capital, hedge funds, private equity, and other kinds of investments. A Limited Liability Partnership (LLP) or a firm can create an Alternative Investment Fund.
                      </p>
                    </div>
                  </div>

                  <div className="pd_bottom_25" />

                  <h3>Category I AIF</h3>
                  <div className="description_box">
                    <p>
                      These funds make investments in start-ups, SMEs, and newly established, financially sound businesses with significant room for expansion.
                      Examples include:
                    </p>
                    <ul>
                      <li><strong>Infrastructure funds</strong>: Investments in businesses that build infrastructure, such as railroads and airports.</li>
                      <li><strong>Venture Capital Funds (VCFs)</strong>: Large-scale cash investments in promising start-up companies.</li>
                      <li><strong>Angel funds</strong>: Invest in cutting-edge startups that don't get funding from VCF; minimum contribution of ₹25 lakh per investor.</li>
                      <li><strong>Social venture funds</strong>: Invest in companies engaged in charitable endeavors to generate both social impact and financial returns.</li>
                    </ul>
                  </div>

                  <div className="pd_bottom_25" />

                  <h3>Category II AIF</h3>
                  <div className="description_box">
                    <p>
                      Leverage is only used by funds to pay for operating expenses that do not fall within categories I or III. Types include:
                    </p>
                    <ul>
                      <li><strong>Debt funds</strong>: Investments in debt securities of unlisted businesses with strong growth prospects and good governance.</li>
                      <li><strong>Funds of Funds</strong>: Investment vehicles that invest in other Alternative Investment Funds.</li>
                      <li><strong>Private equity funds</strong>: Invest in unlisted companies struggling to raise money via conventional routes.</li>
                    </ul>
                  </div>

                  <div className="pd_bottom_25" />

                  <h3>Category III AIF</h3>
                  <div className="description_box">
                    <p>
                      These funds use a variety of intricate trading strategies, such as purchasing listed or unlisted derivatives, aiming for higher investor returns through aggressive investment approaches. Examples include:
                    </p>
                    <ul>
                      <li><strong>Private Investment in Public Equity (PIPE) funds</strong>: Acquire shares of public companies at a discount.</li>
                      <li><strong>Hedge funds</strong>: Pool capital and invest in both domestic and international debt and equity markets.</li>
                    </ul>
                  </div>

                  <div className="pd_bottom_25" />

                  <h3>Important Information</h3>
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
                            <p>Mutual Funds · Stock Broking · Portfolio Management Services · Life Insurance · General Insurance · Bonds · Fixed Deposits · Tax Planning</p>
                          </dd>
                          <dt
                            className={isActive.key === 2 ? "faq_header active" : "faq_header"}
                            onClick={() => handleToggle(2)}
                          >
                            Disclaimer & Details<span className="icon-play" />
                          </dt>
                          <dd style={{ display: isActive.key === 2 ? "block" : "none" }}>
                            <p>
                              J2 Wealth is an AMFI Registered Mutual Fund Distributor.
                              Disclaimer: Mutual fund investments are subject to market risks. Please read scheme-related documents carefully before investing.
                              J2 Wealth makes no warranties and accepts no liability for any damages or losses in connection with use of its products or services.
                            </p>
                          </dd>
                          <dt
                            className={isActive.key === 3 ? "faq_header active" : "faq_header"}
                            onClick={() => handleToggle(3)}
                          >
                            Registration Info<span className="icon-play" />
                          </dt>
                          <dd style={{ display: isActive.key === 3 ? "block" : "none" }}>
                            <p>
                              AMFI Registered · ARN – 253076
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
                    <h4 className="widget-title">Our Investment Services</h4>
                    <ul className="service_list_box">
                      <li><Link href="#">Alternative Investment Funds</Link></li>
                      <li><Link href="#">Portfolio Management Services</Link></li>
                      <li><Link href="#">Mutual Funds</Link></li>
                      <li><Link href="#">Stock Broking</Link></li>
                      <li><Link href="#">Tax Planning</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="widgets_grid_box">
                  <div className="brouchure_box_widget">
                    <div className="widget_content">
                      <h3>About AIFs</h3>
                      <div className="color_white_1 clearfix">
                        <Link href="#" className="theme-btn color_white_1 one">Learn More</Link>
                      </div>
                      <img src="/assets/images/alternative-investments.jpg" alt="Alternative Investment Funds" />
                    </div>
                  </div>
                </div>
                <div className="widgets_grid_box">
                  <div className="widget widget_contactus">
                    <div className="contact_box_widget widget_box">
                      <div className="widget_content">
                        <div className="top_section">
                          <h3>Need Assistance?</h3>
                          <p>Our advisors are ready to help you explore these investment options.</p>
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
