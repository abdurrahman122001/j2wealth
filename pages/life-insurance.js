import Layout from "@/components/layout/Layout"
import { useState } from "react"
import Link from "next/link"

export default function LifeInsurance() {
  const [isActive, setIsActive] = useState({ status: false, key: 1 })

  const handleToggle = (key) => {
    setIsActive(isActive.key === key ? { status: false } : { status: true, key })
  }

  return (
    <>
      <Layout breadcrumbTitle="Life Insurance"  headerStyle={4} footerStyle={1}>
        <div className="auto-container">
          <div className="row default_row">
            <div id="primary" className="content-area service col-lg-8">
              <main role="main" className="site-main">
                <div className="pd_top_85" />
                <article className="clearfix service type-service hentry">
                  <div className="title_all_box style_one dark_color">
                    <div className="title_sections left">
                      <div className="before_title">Life Protection</div>
                      <div className="title">Life Insurance</div>
                      <p>
                        Term insurance: The gift of life is precious, and you cannot put a price tag on it. Life is uncertain, and to ensure your family's livelihood even after the unexpected, a life insurance policy helps cover the risk of premature death. If the insured passes away during the policy term, a death benefit is paid out by the insurer. Life insurance policies are legal contracts providing coverage against life's uncertainties.
                      </p>
                    </div>
                  </div>

                  <div className="pd_bottom_25" />

                  <h3>Policy Types</h3>
                  <div className="description_box">
                    <p>
                      <strong>Structured (Protection) Policies:</strong> Typically term insurance—designed to pay out in the event of a specified incident to safeguard families.
                    </p>
                    <p>
                      <strong>Investment-linked Policies:</strong> Enable capital growth via recurring or one-time premium payments. Common variants include whole life, universal life, and variable life plans.
                    </p>
                  </div>

                  <div className="pd_bottom_25" />

                  <h3>Need-to-Know Information</h3>
                  <div className="faq_section type_two">
                    <div className="block_faq">
                      <div className="accordion">
                        <dl>
                          <dt
                            className={isActive.key === 1 ? "faq_header active" : "faq_header"}
                            onClick={() => handleToggle(1)}
                          >
                            Why Term Insurance?<span className="icon-play" />
                          </dt>
                          <dd style={{ display: isActive.key === 1 ? "block" : "none" }}>
                            <p>
                              Term insurance offers focused protection, paying out only in unfortunate events, ensuring affordability and coverage clarity.
                            </p>
                          </dd>

                          <dt
                            className={isActive.key === 2 ? "faq_header active" : "faq_header"}
                            onClick={() => handleToggle(2)}
                          >
                            Benefits of Investment Policies<span className="icon-play" />
                          </dt>
                          <dd style={{ display: isActive.key === 2 ? "block" : "none" }}>
                            <p>
                              These plans combine insurance protection with investment components, allowing your premiums to grow capital over time through various policy types.
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
                      <li><Link href="#">Life Insurance</Link></li>
                      <li><Link href="#">General Insurance</Link></li>
                      <li><Link href="#">Savings Plan</Link></li>
                      <li><Link href="#">Guaranteed Return Plan</Link></li>
                      <li><Link href="#">Tax Planning</Link></li>
                    </ul>
                  </div>
                </div>

                <div className="widgets_grid_box">
                  <div className="brouchure_box_widget">
                    <div className="widget_content">
                      <h3>Life Insurance Guide</h3>
                      <div className="color_white_1 clearfix">
                        <Link href="#" className="theme-btn color_white_1 one">Download</Link>
                      </div>
                      <img src="/assets/images/life-insurance-guide.jpg" alt="Life Insurance Guide" />
                    </div>
                  </div>
                </div>

                <div className="widgets_grid_box">
                  <div className="widget widget_contactus">
                    <div className="contact_box_widget widget_box">
                      <div className="widget_content">
                        <div className="top_section">
                          <h3>Need Assistance?</h3>
                          <p>Our advisors are here to help you choose the right plan.</p>
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
