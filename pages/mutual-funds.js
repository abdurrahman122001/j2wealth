import Layout from "@/components/layout/Layout"
import { useState } from 'react'
import Link from "next/link"

export default function MutualFunds() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>
            <Layout breadcrumbTitle="Mutual Funds" headerStyle={4} footerStyle={1}>
                <div>
                    <div className="auto-container">
                        <div className="row default_row">
                            <div id="primary" className="content-area service col-lg-8 col-md-12 col-sm-12 col-xs-12">
                                <main id="main" className="site-main" role="main">
                                    <div className="pd_top_85" />
                                    <article className="clearfix service type-service status-publish has-post-thumbnail hentry">
                                        <div className="title_all_box style_one dark_color">
                                            <div className="title_sections left">
                                                <div className="before_title">Investment Solutions</div>
                                                <div className="title">Mutual Funds</div>
                                                <p>
                                                    Mutual funds are professionally managed investment schemes, typically run by asset-management firms, 
                                                    that pool money from multiple investors and invest in a diversified portfolio of bonds, stocks, or a combination of these. 
                                                    As an investor, you can purchase mutual fund holdings in specific schemes with the guidance of our J2 Wealth advisor.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row no-space">
                                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-5 mb-lg-5 mb-xl-0 ps-0 pe-xl-3">
                                                <div className="description_box">
                                                    <p>
                                                        At J2 Wealth, we help you choose the right mutual fund based on your financial goals, 
                                                        risk appetite, and investment horizon. Whether you’re planning for retirement, children’s education, 
                                                        or wealth creation, our expert advisors guide you through the process.
                                                    </p>
                                                </div>
                                                <div className="pd_bottom_25" />
                                                <div className="icon_box_all style_one">
                                                    <div className="icon_content">
                                                        <div className="icon">
                                                            <img src="/assets/images/icon-image-nike.png" className="img-fluid svg_image" alt="icon" />
                                                        </div>
                                                        <div className="txt_content">
                                                            <h3>
                                                                <Link href="#">Diversified Portfolio</Link>
                                                            </h3>
                                                            <p>Access a balanced mix of equities, debt, and hybrid funds to reduce risk and optimize returns.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pd_bottom_25" />
                                                <div className="simple_image_boxes">
                                                    <img src="/assets/images/mutual-funds-graph.jpg" className="object-fit-cover-center height_570px" alt="Fund Performance" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12 ps-0 ps-xl-3">
                                                <div className="icon_box_all style_one">
                                                    <div className="icon_content">
                                                        <div className="icon">
                                                            <img src="/assets/images/icon-image-nike.png" className="img-fluid svg_image" alt="icon" />
                                                        </div>
                                                        <div className="txt_content">
                                                            <h3>
                                                                <Link href="#">Professional Management</Link>
                                                            </h3>
                                                            <p>Funds are managed by experienced fund managers who monitor markets and adjust portfolios accordingly.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pd_bottom_25" />
                                                <div className="icon_box_all style_one">
                                                    <div className="icon_content">
                                                        <div className="icon">
                                                            <img src="/assets/images/icon-image-nike.png" className="img-fluid svg_image" alt="icon" />
                                                        </div>
                                                        <div className="txt_content">
                                                            <h3>
                                                                <Link href="#">Easy Accessibility</Link>
                                                            </h3>
                                                            <p>Invest and redeem units easily with the assistance of our advisors, ensuring a hassle-free experience.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pd_bottom_25" />
                                                <h3>Fund Performance</h3>
                                                <div className="pd_bottom_15" />
                                                <div className="description_box">
                                                    <p>
                                                        Track your investments and analyze returns through our transparent reporting system. 
                                                        Past performance is not indicative of future results, but our track record speaks for itself.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pd_bottom_25" />
                                        <h3>Important Information</h3>
                                        <div className="pd_bottom_25" />
                                        <div className="faq_section type_two">
                                            <div className="block_faq">
                                                <div className="accordion">
                                                    <dl>
                                                        <dt className={isActive.key == 1 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(1)}>
                                                            AMFI Registration<span className="icon-play" />
                                                        </dt>
                                                        <dd style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                                            <p>J2 Wealth is an AMFI Registered Mutual Fund Distributor. ARN – 253076</p>
                                                        </dd>
                                                        <dt className={isActive.key == 2 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(2)}>
                                                            Disclaimer<span className="icon-play" />
                                                        </dt>
                                                        <dd style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                                            <p>
                                                                Mutual fund investments are subject to market risks. 
                                                                Please read all scheme-related documents carefully before investing. 
                                                                Past performance is not indicative of future returns.
                                                            </p>
                                                        </dd>
                                                        <dt className={isActive.key == 3 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(3)}>
                                                            Terms & Conditions<span className="icon-play" />
                                                        </dt>
                                                        <dd style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                                            <p>
                                                                J2 Wealth makes no warranties or representations on products offered and 
                                                                accepts no liability for damages or losses in connection with the use of its services.
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
                            <aside id="secondary" className="widget-area all_side_bar col-lg-4 col-md-12 col-sm-12">
                                <div className="service_siderbar side_bar">
                                    <div className="pd_top_85" />
                                    <div className="widgets_grid_box">
                                        <div className="widget creote_widget_service_list">
                                            <h4 className="widget-title">Our Investment Services</h4>
                                            <ul className="service_list_box">
                                                <li><Link href="#">Mutual Funds</Link></li>
                                                <li><Link href="#">Equity Advisory</Link></li>
                                                <li><Link href="#">Retirement Planning</Link></li>
                                                <li><Link href="#">Tax Saving Investments</Link></li>
                                                <li><Link href="#">Wealth Management</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="widgets_grid_box">
                                        <div className="brouchure_box_widget">
                                            <div className="widget_content">
                                                <h3>Mutual Funds Guide</h3>
                                                <div className="color_white_1 clearfix">
                                                    <Link href="#" className="theme-btn color_white_1 one">Download</Link>
                                                </div>
                                                <img src="/assets/images/mutual-funds-guide.jpg" alt="Mutual Funds Guide" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widgets_grid_box">
                                        <div className="widget widget_contactus">
                                            <div className="contact_box_widget widget_box">
                                                <div className="widget_content">
                                                    <img src="/assets/images/service-sidebar-contact-bg.jpg" alt="background" />
                                                    <div className="top_section">
                                                        <h3>Have Questions?</h3>
                                                        <p>Our advisors are here to help you start your investment journey.</p>
                                                    </div>
                                                    <div className="bottom_section">
                                                        <Link href="tel:+9806071234" className="phone_number">+98 060 712 34</Link>
                                                        <Link href="mailto:info@j2wealth.co.in" className="mailid">info@j2wealth.co.in</Link>
                                                    </div>
                                                </div>
                                                <Link href="#" className="theme-btn one">Get Advice</Link>
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
                                        <p>Receive our investment news and updates in your inbox.</p>
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
