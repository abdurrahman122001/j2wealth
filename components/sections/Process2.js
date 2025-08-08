import Link from "next/link";
import VideoBox from "../elements/VideoBox";

export default function Process2() {
    return (
        <>
            <section className="process-section">
                {/*===============spacing==============*/}
                <div className="pd_top_80" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title_all_box style_three text-center dark_color">
                                <div className="title_sections three">
                                    <div className="before_title">Features</div>
                                    <h2>Why Choose J2 Wealth</h2>
                                    <p>
                                        Our approach to financial planning sets us apart from the competition <br /> 
                                        and delivers real value to our clients.
                                    </p>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_25" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12 col-sm-12 mb-sm-5 mb-md-5 mb-lg-0 mb-xl-0">
                            <div className="process_box style_three dark_color">
                                <div className="process_box_outer_three left">
                                    <div className="icon">
                                        <div className="img">
                                            <img src="/assets/images/service-ico-3.png" className="img-fluid svg_image" alt="icon png" />
                                        </div>
                                    </div>
                                    <div className="content_box">
                                        <h2><Link href="#" >Customer Centric</Link ></h2>
                                        <p>We put our clients at the center of everything we do.</p>
                                    </div>
                                    <div className="number">
                                        <h6>01</h6>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_top_30" />
                            {/*===============spacing==============*/}
                            <div className="divider_1" />
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_40" />
                            {/*===============spacing==============*/}
                            <div className="process_box style_three dark_color">
                                <div className="process_box_outer_three left">
                                    <div className="icon">
                                        <div className="img">
                                            <img src="/assets/images/process-icon-im-1.png" className="img-fluid svg_image" alt="icon png" />
                                        </div>
                                    </div>
                                    <div className="content_box">
                                        <h2> <Link href="#" >
                                            Goal Based Approach </Link >
                                        </h2>
                                        <p>We align our strategies with your specific financial objectives.</p>
                                    </div>
                                    <div className="number">
                                        <h6>02</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 mb-sm-5 mb-md-5 mb-lg-0 mb-xl-0">
                            <div className="image_boxes style_three border_yes">
<img src="/assets/images/video-box-img-1.jpg" className="background_image" alt="image" />                                <div className="video_box">
                                    <VideoBox />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="process_box style_three dark_color">
                                <div className="process_box_outer_three right">
                                    <div className="icon">
                                        <div className="img">
                                            <img src="/assets/images/service-ico-2.png" className="img-fluid svg_image" alt="icon png" />
                                        </div>
                                    </div>
                                    <div className="content_box">
                                        <h2><Link href="#" >Holistic Philosophy</Link ></h2>
                                        <p>We consider all aspects of your financial life in our planning.</p>
                                    </div>
                                    <div className="number">
                                        <h6>03</h6>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_top_30" />
                            {/*===============spacing==============*/}
                            <div className="divider_1" />
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_40" />
                            {/*===============spacing==============*/}
                            <div className="process_box style_three dark_color">
                                <div className="process_box_outer_three right">
                                    <div className="icon">
                                        <div className="img">
                                            <img src="/assets/images/process-icon-im-2.png" className="img-fluid svg_image" alt="icon png" />
                                        </div>
                                    </div>
                                    <div className="content_box">
                                        <h2><Link href="#" >Personalised Planning</Link ></h2>
                                        <p>We create customized solutions tailored to your unique needs.</p>
                                    </div>
                                    <div className="number">
                                        <h6>04</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_75" />
                {/*===============spacing==============*/}
            </section>
        </>
    )
}