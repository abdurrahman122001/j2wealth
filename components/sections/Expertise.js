import Link from "next/link";
import VideoBox from "../elements/VideoBox";

export default function Expertise() {
    return (
        <section className="expertise" style={{ color: "#fff" }}>
            <div className="area_of_expertise">
                <div className="simpleParallax">
                    <img
                        src="/assets/images/areaof-ecp-1.jpg"
                        className="cover-parallax"
                        alt="Expertise Background"
                    />
                </div>

                {/* Title & Video Section */}
                <div className="title_and_video">
                    <div className="auto-container">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                                <div className="video_box text-center">
                                    <VideoBox />
                                </div>
                            </div>
                            <div className="col-lg-2" />
                            <div className="col-lg-6">
                                <div className="title_all_box style_one text-end">
                                    <div className="title_sections text-white">
                                        <p className="text-white">Tools</p>
                                        <h2 className="text-white">Investor Corner</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Expertise List Section */}
                <div className="expertise">
                    <div className="auto-container">
                        <div className="row">
                            {/* Box 1 */}
                            <div className="col-lg-2 col-md-6 col-sm-12 col-xs-12">
                                <div className="expertise_box text-center d-flex flex-column align-items-center text-white">
                                    <div className="step_number">
                                        <h1 className="text-white" style={{ fontSize: '24px' }}>01.</h1>
                                    </div>
                                    <h2
                                        className="mt-2 text-white"
                                        style={{ zIndex: 1, fontSize: '15px', lineHeight: '1.2' }}
                                    >
                                        FINANCIAL CALCULATOR
                                    </h2>
                                </div>
                            </div>

                            {/* Box 2 */}
                            <div className="col-lg-2 col-md-6 col-sm-12 col-xs-12">
                                <div className="expertise_box text-center d-flex flex-column align-items-center text-white">
                                    <div className="step_number">
                                        <h1 className="text-white" style={{ fontSize: '24px' }}>02.</h1>
                                    </div>
                                    <h2
                                        className="mt-2 text-white"
                                        style={{ zIndex: 1, fontSize: '15px', lineHeight: '1.2' }}
                                    >
                                        DOWNLOAD FORMS
                                    </h2>
                                </div>
                            </div>

                            {/* Box 3 */}
                            <div className="col-lg-2 col-md-6 col-sm-12 col-xs-12">
                                <div className="expertise_box text-center d-flex flex-column align-items-center text-white">
                                    <div className="step_number">
                                        <h1 className="text-white" style={{ fontSize: '24px' }}>03.</h1>
                                    </div>
                                    <h2
                                        className="mt-2 text-white"
                                        style={{ zIndex: 1, fontSize: '15px', lineHeight: '1.2' }}
                                    >
                                        PAY PREMIUM ONLINE
                                    </h2>
                                </div>
                            </div>

                            {/* Box 4 */}
                            <div className="col-lg-2 col-md-6 col-sm-12 col-xs-12">
                                <div className="expertise_box text-center d-flex flex-column align-items-center text-white">
                                    <div className="step_number">
                                        <h1 className="text-white" style={{ fontSize: '24px' }}>04.</h1>
                                    </div>
                                    <h2
                                        className="mt-2 text-white"
                                        style={{ zIndex: 1, fontSize: '15px', lineHeight: '1.2' }}
                                    >
                                        FINANCIAL FITNESS
                                    </h2>
                                </div>
                            </div>

                            {/* Box 5 */}
                            <div className="col-lg-2 col-md-6 col-sm-12 col-xs-12">
                                <div className="expertise_box text-center d-flex flex-column align-items-center text-white">
                                    <div className="step_number">
                                        <h1 className="text-white" style={{ fontSize: '24px' }}>05.</h1>
                                    </div>
                                    <h2
                                        className="mt-2 text-white"
                                        style={{ zIndex: 1, fontSize: '15px', lineHeight: '1.2' }}
                                    >
                                        RISK <br /> PROFILE
                                    </h2>
                                </div>
                            </div>

                            {/* Box 6 */}
                            <div className="col-lg-2 col-md-6 col-sm-12 col-xs-12">
                                <div className="expertise_box text-center d-flex flex-column align-items-center text-white">
                                    <div className="step_number">
                                        <h1 className="text-white" style={{ fontSize: '24px' }}>06.</h1>
                                    </div>
                                    <h2
                                        className="mt-2 text-white"
                                        style={{ zIndex: 1, fontSize: '15px', lineHeight: '1.2' }}
                                    >
                                        TAX CALCULATOR
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
