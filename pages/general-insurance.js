import Layout from "@/components/layout/Layout"
import { useState } from "react"
import Link from "next/link"

export default function GeneralInsurance() {
  const [isActive, setIsActive] = useState({ status: false, key: 1 })

  const handleToggle = (key) => {
    setIsActive(isActive.key === key ? { status: false } : { status: true, key })
  }

  return (
    <>
      <Layout breadcrumbTitle="General Insurance"  headerStyle={4} footerStyle={4}>
        <div className="auto-container">
          <div className="row default_row">
            <div id="primary" className="content-area service col-lg-8">
              <main role="main" className="site-main">
                <div className="pd_top_85" />
                <article className="clearfix service type-service hentry">
                  <div className="title_all_box style_one dark_color">
                    <div className="title_sections left">
                      <div className="before_title">Risk Protection</div>
                      <div className="title">General Insurance</div>
                      <p>
                        General insurance, also known as non-life insurance, provides coverage for a wide range of risks—other than life—protecting individuals, businesses, and property against potential losses and liabilities over a specified period.
                      </p>
                    </div>
                  </div>

                  <div className="pd_bottom_25" />

                  <h3>Types of Coverage</h3>
                  <div className="description_box">
                    <ul>
                      <li><strong>Property Insurance</strong>: Covers damage or loss to homes, buildings, vehicles, and belongings due to fire, theft, natural disasters, or accidents.</li>
                      <li><strong>Liability Insurance</strong>: Protects against legal liabilities arising from third-party claims, such as personal injury or professional negligence.</li>
                      <li><strong>Health Insurance</strong>: Covers medical expenses, hospitalization, and related costs for individuals or families.</li>
                      <li><strong>Motor Insurance</strong>: Covers vehicles against damages due to accidents, theft, or third-party liability.</li>
                      <li><strong>Travel Insurance</strong>: Provides protection for unforeseen events during domestic or international travel, including trip cancellations, medical emergencies, or lost baggage. </li>
                      <li><strong>Marine Insurance</strong>: Covers ships, cargo, and marine-related transit risks including goods in transit, marine liabilities, and hull insurance.</li>
                      <li><strong>Miscellaneous Insurance</strong>: Encompasses specialized coverage like burglary, engineering, and aviation insurance.</li>
                    </ul>
                  </div>

                  <div className="pd_bottom_25" />

                  <h3>Quick Links & Info</h3>
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
                              Mutual Funds · Stock Broking · Life Insurance · General Insurance · Bonds · Fixed Deposits · Tax Planning 
                            </p>
                          </dd>
                          <dt
                            className={isActive.key === 2 ? "faq_header active" : "faq_header"}
                            onClick={() => handleToggle(2)}
                          >
                            Need Assistance?<span className="icon-play" />
                          </dt>
                          <dd style={{ display: isActive.key === 2 ? "block" : "none" }}>
                            <p>
                              Reach out to us for tailored general insurance solutions across property, health, and travel.
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
                      <li><Link href="#">General Insurance</Link></li>
                      <li><Link href="#">Life Insurance</Link></li>
                      <li><Link href="#">Savings Plan</Link></li>
                      <li><Link href="#">Mutual Funds</Link></li>
                      <li><Link href="#">Tax Planning</Link></li>
                    </ul>
                  </div>
                </div>

                <div className="widgets_grid_box">
                  <div className="brouchure_box_widget">
                    <div className="widget_content">
                      <h3>Insurance Overview</h3>
                      <div className="color_white_1 clearfix">
                        <Link href="#" className="theme-btn color_white_1 one">Learn More</Link>
                      </div>
                      <img src="/assets/images/general-insurance.jpg" alt="General Insurance Overview" />
                    </div>
                  </div>
                </div>

                <div className="widgets_grid_box">
                  <div className="widget widget_contactus">
                    <div className="contact_box_widget widget_box">
                      <div className="widget_content">
                        <div className="top_section">
                          <h3>Need Assistance?</h3>
                          <p>Our experts are ready to help you find the right coverage.</p>
                        </div>
                        <div className="bottom_section">
                          <Link href="tel:+919500363787" className="phone_number">+91 95003 63787</Link>
                          <Link href="mailto:customercare@j2wealth.co.in" className="mailid">customercare@j2wealth.co.in</Link>
                        </div>
                      </div>
                      <Link href="#" className="theme-btn one">Contact Us</Link>
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
