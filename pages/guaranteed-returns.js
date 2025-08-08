import Layout from "@/components/layout/Layout";
import { useState } from "react";
import Link from "next/link";

export default function GuaranteedReturnPlan() {
  const [isActive, setIsActive] = useState({ status: false, key: 1 });

  const handleToggle = (key) => {
    setIsActive(isActive.key === key ? { status: false } : { status: true, key });
  };

  return (
    <>
      <Layout breadcrumbTitle="Guaranteed Return Plan" headerStyle={4} footerStyle={4}>
        <div className="auto-container">
          <div className="row default_row">
            <div id="primary" className="content-area service col-lg-8">
              <main role="main" className="site-main">
                <div className="pd_top_85" />
                <article className="clearfix service type-service hentry">
                  {/* Title Section */}
                  <div className="title_all_box style_one dark_color">
                    <div className="title_sections left">
                      <div className="before_title">Secure & Steady Returns</div>
                      <div className="title">Guaranteed Return Plan</div>
                      <p>
                        A guaranteed return plan, as the name suggests, lets you save your money and offers guaranteed returns for your future, with customizable income or return options as per your need. There are plenty of reasons that can impact the financial market and affect your investments. This is why it's important to consider investing a portion of your income in a guaranteed return product that provides fixed returns irrespective of market changes. A guaranteed return insurance plan enables you to save for your future expenses while offering life cover to protect your loved ones in your absence.
                      </p>
                    </div>
                  </div>

                  <div className="pd_bottom_25" />

                  {/* How It Works */}
                  <h3>How It Works</h3>
                  <div className="description_box">
                    <p>
                      A guaranteed return investment plan allows you to save for your future and secure your loved ones financially in case of an unfortunate incident. The plan offers low-risk savings that cover varied financial goals. You can choose a sum assured based on your requirements, which determines the premium. Upon maturity, your lump sum savings are returned to you. In the event of an untimely incident, your family receives the insurance payout to help maintain their comfort.
                    </p>
                  </div>

                  <div className="pd_bottom_25" />

                  {/* Why Invest */}
                  <h3>Why Invest in a Guaranteed Return Plan?</h3>
                  <div className="description_box">
                    <ul>
                      <li>Financial markets are inherently volatile, and guaranteed return plans offer stability by providing fixed returns regardless of market fluctuations.</li>
                      <li>These plans are low-risk and aim for stable returns. While returns may be modest compared to high-risk alternatives, the preservation of capital and assured family protection remain paramount.</li>
                    </ul>
                  </div>

                  <div className="pd_bottom_25" />

                  {/* FAQ Section */}
                  <h3>Important Details</h3>
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
                            Registration & Disclaimer<span className="icon-play" />
                          </dt>
                          <dd style={{ display: isActive.key === 2 ? "block" : "none" }}>
                            <p>
                              J2 Wealth is an AMFI Registered Mutual Fund Distributor.<br />
                              Disclaimer: Mutual fund investments are subject to market risks. Please read the scheme information and related documents before investing. Past performance is not indicative of future returns. J2 Wealth makes no warranties or representations and accepts no liability for any damages or losses resulting from its product or services. Website terms and conditions apply.
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
                      <li><Link href="#">Guaranteed Return Plan</Link></li>
                      <li><Link href="#">Savings Plan</Link></li>
                      <li><Link href="#">Life Insurance</Link></li>
                      <li><Link href="#">Mutual Funds</Link></li>
                      <li><Link href="#">Tax Planning</Link></li>
                    </ul>
                  </div>
                </div>

                <div className="widgets_grid_box">
                  <div className="brouchure_box_widget">
                    <div className="widget_content">
                      <h3>Guaranteed Return Insights</h3>
                      <div className="color_white_1 clearfix">
                        <Link href="#" className="theme-btn color_white_1 one">Learn More</Link>
                      </div>
                      <img src="/assets/images/guaranteed-return-plan.jpg" alt="Guaranteed Return Plan" />
                    </div>
                  </div>
                </div>

                <div className="widgets_grid_box">
                  <div className="widget widget_contactus">
                    <div className="contact_box_widget widget_box">
                      <div className="widget_content">
                        <div className="top_section">
                          <h3>Need Assistance?</h3>
                          <p>Our advisors can help you design a secure plan for guaranteed returns.</p>
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
  );
}
