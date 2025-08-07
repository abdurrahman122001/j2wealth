import Link from "next/link"
export default function About1() {
    return (
        <>
            <section className="about_us_section" id="about">
                {/*===============spacing==============*/}
                <div className="pd_top_100" />
                {/*===============spacing==============*/}
                <div className="container pd_zero">
                    <div className="row">
                        <div className="col-xl-6 col-lg-12">
                            <div className="title_all_box style_one dark_color">
                                <div className="title_sections left">
                                    <div className="before_title"> Features </div>
                                    <h2> Why Choose J2 Wealth</h2>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_20" />
                            {/*===============spacing==============*/}
                            <div className="process_box style_one dark_color">
                                <div className="process_box_outer">
                                    <div className="icon">
                                        <span className=" icon-line-chart" />
                                        <div className="number"> 01 </div>
                                    </div>
                                    <div className="content_box">
                                        <h2>
                                            <Link href="#" >CUSTOMER CENTRIC</Link>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="pd_bottom_50" />

                            <div className="process_box style_one dark_color">
                                <div className="process_box_outer">
                                    <div className="icon">
                                        <span className=" icon-line-chart" />
                                        <div className="number"> 02 </div>
                                    </div>
                                    <div className="content_box">
                                        <h2>
                                            <Link href="#" > GOAL BASED APPROACH </Link>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="pd_bottom_50" />
                            <div className="process_box style_one dark_color">
                                <div className="process_box_outer">
                                    <div className="icon">
                                        <span className=" icon-line-chart" />
                                        <div className="number"> 03 </div>
                                    </div>
                                    <div className="content_box">
                                        <h2>
                                            <Link href="#" > HOLISTIC PHILOSOPHY </Link>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="pd_bottom_50" />

                            <div className="process_box style_one dark_color">
                                <div className="process_box_outer">
                                    <div className="icon">
                                        <span className=" icon-line-chart" />
                                        <div className="number"> 04 </div>
                                    </div>
                                    <div className="content_box">
                                        <h2>
                                            <Link href="#" > PERSONALISED PLANNING </Link>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_30" />
                        </div>
                        <div className="col-xl-6 col-lg-12">
                            <div className="service_wrapper">
                                <div className="move_image_absolute">
                                    <img src="/assets/images/about/about-1-1.png" className="class-fluid" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_80" />
                {/*===============spacing==============*/}
            </section>


        </>
    )
}
