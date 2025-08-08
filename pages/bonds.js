import Layout from "@/components/layout/Layout"
import { useState } from "react"
import Link from "next/link"

export default function Bonds() {
  const [isActive, setIsActive] = useState({ status: false, key: 1 })

  const handleToggle = (key) => {
    setIsActive(isActive.key === key ? { status: false } : { status: true, key })
  }

  return (
    <>
      <Layout breadcrumbTitle="Bonds"  headerStyle={4} footerStyle={4}>
        <div className="auto-container">
          <div className="row default_row">
            <div id="primary" className="content-area service col-lg-8">
              <main role="main" className="site-main">
                <div className="pd_top_85" />
                <article className="clearfix service type-service hentry">

                  {/* Title Section */}
                  <div className="title_all_box style_one dark_color">
                    <div className="title_sections left">
                      <div className="before_title">Secure Debt Investment</div>
                      <div className="title">Bonds</div>
                      <p>
                        Bonds refer to high-security debt instruments that enable an entity to raise funds and fulfill capital requirements. They represent a debt category where borrowers raise capital from individual investors for a specified tenure.
                      </p>
                    </div>
                  </div>

                  <div className="pd_bottom_25" />

                  {/* Description Box */}
                  <div className="description_box">
                    <p>
                      Investors purchase bonds at face value (principal), which is returned at the end of the bond’s fixed tenure. During the term, issuers pay periodic interest, which may be fixed or adjustable according to the bond terms.
                    </p>
                  </div>

                  <div className="pd_bottom_25" />

                  {/* FAQ Section */}
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
                              Mutual Funds · Stock Broking · Life Insurance · General Insurance · Bonds · Fixed Deposits · Tax Planning
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
                              J2 Wealth is an AMFI Registered Mutual Fund Distributor. Disclaimer: Mutual fund investments are subject to market risks. Please read all related scheme information carefully before investing. Past performance does not guarantee future results. J2 Wealth does not offer any warranties or accept liability for any losses arising from use of its services.
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

            {/* Sidebar */}
            <aside className="widget-area all_side_bar col-lg-4">
              <div className="service_siderbar side_bar">
                <div className="pd_top_85" />

                <div className="widgets_grid_box">
                  <div className="widget creote_widget_service_list">
                    <h4 className="widget-title">Our Services</h4>
                    <ul className="service_list_box">
                      <li><Link href="#">Bonds</Link></li>
                      <li><Link href="#">Fixed Deposits</Link></li>
                      <li><Link href="#">Mutual Funds</Link></li>
                      <li><Link href="#">Life Insurance</Link></li>
                      <li><Link href="#">General Insurance</Link></li>
                    </ul>
                  </div>
                </div>

                <div className="widgets_grid_box">
                  <div className="brouchure_box_widget">
                    <div className="widget_content">
                      <h3>Secure Investments</h3>
                      <div className="color_white_1 clearfix">
                        <Link href="#" className="theme-btn color_white_1 one">Learn More</Link>
                      </div>
                      <img src="/assets/images/bonds-overview.jpg" alt="Bonds Overview" />
                    </div>
                  </div>
                </div>

                <div className="widgets_grid_box">
                  <div className="widget widget_contactus">
                    <div className="contact_box_widget widget_box">
                      <div className="widget_content">
                        <div className="top_section">
                          <h3>Need Assistance?</h3>
                          <p>Our experts can help you build a secure fixed income portfolio.</p>
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
