import Layout from "@/components/layout/Layout";
import { useState } from "react";
import Link from "next/link";

export default function TaxPlanning() {
  const [isActive, setIsActive] = useState({ status: false, key: 1 });

  const handleToggle = (key) => {
    setIsActive(isActive.key === key ? { status: false } : { status: true, key });
  };

  return (
    <>
      <Layout breadcrumbTitle="Tax Planning" headerStyle={4} footerStyle={1}>
        <div className="auto-container">
          <div className="row default_row">
            <div id="primary" className="content-area service col-lg-8">
              <main role="main" className="site-main">
                <div className="pd_top_85" />
                <article className="clearfix service type-service hentry">

                  {/* Title Section */}
                  <div className="title_all_box style_one dark_color">
                    <div className="title_sections left">
                      <div className="before_title">Smart Tax Strategy</div>
                      <div className="title">Tax Planning</div>
                      <p>
                        Tax Planning may be described as the legal way of reducing tax liability in a year by investing in different schemes prescribed by the Income Tax Act. It also involves entering or exiting investment schemes to save the maximum tax possible within the legal framework.
                      </p>
                    </div>
                  </div>

                  <div className="pd_bottom_25" />

                  {/* Tax Slabs */}
                  <h3>Tax Slab Comparison (Old vs New Regime)</h3>
                  <div className="description_box">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Annual Income</th>
                          <th>Old Tax Rate</th>
                          <th>New Tax Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Up to ₹2.5 lakhs</td>
                          <td>NIL</td>
                          <td>NIL</td>
                        </tr>
                        <tr>
                          <td>₹2.5L – ₹5L</td>
                          <td>5%</td>
                          <td>5%</td>
                        </tr>
                        <tr>
                          <td>₹5L – ₹7.5L</td>
                          <td>20%</td>
                          <td>10%</td>
                        </tr>
                        <tr>
                          <td>₹7.5L – ₹10L</td>
                          <td>20%</td>
                          <td>15%</td>
                        </tr>
                        <tr>
                          <td>₹10L – ₹12.5L</td>
                          <td>30%</td>
                          <td>20%</td>
                        </tr>
                        <tr>
                          <td>₹12.5L – ₹15L</td>
                          <td>30%</td>
                          <td>25%</td>
                        </tr>
                        <tr>
                          <td>Above ₹15L</td>
                          <td>30%</td>
                          <td>30%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="pd_bottom_25" />

                  {/* Description */}
                  <div className="description_box">
                    <p>
                      One can decide between the old and new tax regimes based on the deductions and exemptions applicable to them. The golden rule suggests “All things are lawful, but not all things are beneficial,” affirming that while tax savings are legal, evasion is not.
                    </p>
                  </div>

                  <div className="pd_bottom_25" />

                  {/* FAQ Section */}
                  <h3>More Information</h3>
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
                              J2 Wealth is an AMFI Registered Mutual Fund Distributor. Disclaimer: Mutual fund investments are subject to market risks. Please read scheme-related documents carefully before investing. Past performance is not indicative of future returns. J2 Wealth makes no warranties or representations, express or implied, and accepts no liability for any losses arising from the use of its services. Terms and conditions apply.
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
                      <li><Link href="#">Tax Planning</Link></li>
                      <li><Link href="#">Mutual Funds</Link></li>
                      <li><Link href="#">Stock Broking</Link></li>
                      <li><Link href="#">Life Insurance</Link></li>
                      <li><Link href="#">General Insurance</Link></li>
                    </ul>
                  </div>
                </div>

                <div className="widgets_grid_box">
                  <div className="brouchure_box_widget">
                    <div className="widget_content">
                      <h3>Tax Planning Insights</h3>
                      <div className="color_white_1 clearfix">
                        <Link href="#" className="theme-btn color_white_1 one">Learn More</Link>
                      </div>
                      <img src="/assets/images/tax-planning.jpg" alt="Tax Planning Overview" />
                    </div>
                  </div>
                </div>

                <div className="widgets_grid_box">
                  <div className="widget widget_contactus">
                    <div className="contact_box_widget widget_box">
                      <div className="widget_content">
                        <div className="top_section">
                          <h3>Need Assistance?</h3>
                          <p>Our advisors can guide you in optimizing your tax liabilities legally.</p>
                        </div>
                        <div className="bottom_section">
                          <Link href="tel:+91 95003 63787" className="phone_number">+91 95003 63787</Link>
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
  );
}
