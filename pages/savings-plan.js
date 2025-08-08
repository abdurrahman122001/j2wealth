import Layout from "@/components/layout/Layout"
import { useState } from "react"
import Link from "next/link"

export default function SavingsPlan() {
  const [isActive, setIsActive] = useState({ status: false, key: 1 })

  const handleToggle = (key) => {
    setIsActive(isActive.key === key ? { status: false } : { status: true, key })
  }

  return (
    <>
      <Layout  headerStyle={4} footerStyle={1} breadcrumbTitle="Savings Plan">
        <div className="auto-container">
          <div className="row default_row">
            <div id="primary" className="content-area service col-lg-8">
              <main role="main" className="site-main">
                <div className="pd_top_85" />
                <article className="clearfix service type-service hentry">
                  <div className="title_all_box style_one dark_color">
                    <div className="title_sections left">
                      <div className="before_title">Systematic Saving</div>
                      <div className="title">Savings Plan</div>
                      <p>
                        A savings plan is a unique financial instrument that lets you save money for future needs in a systematic manner while also providing you with life insurance coverage. It also helps you grow your money with stable returns, making it a low-risk investment option. A savings plan offers a death benefit to the nominee in case of an unfortunate event during the policy term.
                      </p>
                    </div>
                  </div>

                  <div className="pd_bottom_25" />

                  <h3>Why Invest in a Savings Plan</h3>
                  <div className="description_box">
                    <ul>
                      <li>
                        A savings plan allows you to save a fixed amount of money regularly without putting too much burden on your finances. This enables you to build a savings pool consistently and prepare for future financial needs.
                      </li>
                      <li>
                        Savings plans often offer stable returns that can help you increase your savings over time. They help you tackle inflation, plan for financial goals, and live a financially secure life.
                      </li>
                      <li>
                        Savings plans are typically designed for long-term savings goals, such as retirement, education, or buying a house.
                      </li>
                      <li>
                        They have an in-built insurance component that can protect the financial interests of your family in your absence.
                      </li>
                      <li>
                        Savings plans offer tax benefits under various sections of The Income Tax Act, 1961, helping you save more.
                      </li>
                      <li>
                        Savings plans can help you build assured savings as they generally carry low risk.
                      </li>
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
                            <p>
                              Mutual Funds · Stock Broking · Life Insurance · General Insurance · Bonds · Fixed Deposits · Taxation
                            </p>
                          </dd>

                          <dt
                            className={isActive.key === 2 ? "faq_header active" : "faq_header"}
                            onClick={() => handleToggle(2)}
                          >
                            Registration & Disclaimer<span className="icon-play" />
                          </dt>
                          <dd style={{ display: isActive.key === 2 ? "block" : "none" }}>
                            <p>
                              J2 Wealth is an AMFI Registered Mutual Fund Distributor. Disclaimer: Mutual fund investments are subject to market risks. Please read all related documents carefully before investing. Past performance is not indicative of future returns. J2 Wealth makes no warranties or representations and accepts no liability for any damages or losses in connection with the use of its services.
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
                      <li><Link href="#">Savings Plan</Link></li>
                      <li><Link href="#">Guaranteed Return Plan</Link></li>
                      <li><Link href="#">Life Insurance</Link></li>
                      <li><Link href="#">Mutual Funds</Link></li>
                      <li><Link href="#">Tax Planning</Link></li>
                    </ul>
                  </div>
                </div>

                <div className="widgets_grid_box">
                  <div className="brouchure_box_widget">
                    <div className="widget_content">
                      <h3>Savings Plan Benefits</h3>
                      <div className="color_white_1 clearfix">
                        <Link href="#" className="theme-btn color_white_1 one">Learn More</Link>
                      </div>
                      <img src="/assets/images/savings-plan.jpg" alt="Savings Plan" />
                    </div>
                  </div>
                </div>

                <div className="widgets_grid_box">
                  <div className="widget widget_contactus">
                    <div className="contact_box_widget widget_box">
                      <div className="widget_content">
                        <div className="top_section">
                          <h3>Need Assistance?</h3>
                          <p>Our advisors will help you design a savings strategy that works for your goals.</p>
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
