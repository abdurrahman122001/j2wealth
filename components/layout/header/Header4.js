import Link from "next/link"
import Navbar from "../Navbar"
import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper"
import "swiper/css"

export default function Header4({ handleSearch, handleContactPopup, handleMobileMenu }) {
    const [isClient, setIsClient] = useState(false)
    const [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
        setIsClient(true)
        
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true)
            } else {
                setIsSticky(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const indices = [
        { name: "NIFTY50", value: "24,596.15", change: "+21.95 (0.09%)", link: "/index/nifty50" },
        { name: "BANKNIFTY", value: "52,876.40", change: "+84.25 (0.16%)", link: "/index/banknifty" },
        { name: "SENSEX", value: "80,623.26", change: "+79.27 (0.10%)", link: "/index/sensex" },
        { name: "NASDAQ", value: "18,352.76", change: "+152.87 (0.84%)", link: "/index/nasdaq" },
        { name: "DOWJONES", value: "39,308.00", change: "+210.45 (0.54%)", link: "/index/dowjones" },
        { name: "NIKKEI", value: "40,888.63", change: "+312.18 (0.77%)", link: "/index/nikkei" },
        { name: "GOLD", value: "₹6,245/g", change: "+153 (2.51%)", link: "/commodities/gold" },
        { name: "SILVER", value: "₹78,101/kg", change: "+1,446 (1.89%)", link: "/commodities/silver" },
        { name: "CRUDE", value: "$84.52/bbl", change: "-0.85 (1.00%)", link: "/commodities/crude" },
        { name: "USD/INR", value: "83.45", change: "-0.12 (0.14%)", link: "/forex/usd-inr" }
    ]

    return (
        <>
            <div className="header_area" id="header_contents">
                {/* Top Bar with Slider - Not sticky */}
                <div className="top_bar style_one">
                    <div className="auto-container">
                        {isClient && (
                            <div className="topbar-slider">
                                <Swiper
                                    modules={[Autoplay]}
                                    spaceBetween={30}
                                    slidesPerView="auto"
                                    autoplay={{
                                        delay: 0,
                                        disableOnInteraction: false,
                                    }}
                                    speed={5000}
                                    loop={true}
                                    freeMode={true}
                                    className="topbar-swiper"
                                >
                                    {indices.map((index, idx) => (
                                        <SwiperSlide key={idx} style={{ width: 'auto' }}>
                                            <Link href={index.link} className="index-item">
                                                <span className="index-name">{index.name}</span>
                                                <span className="index-value">{index.value}</span>
                                                <span 
                                                    className="index-change" 
                                                    style={{ 
                                                        color: index.change.startsWith("+") ? "#4CAF50" : "#F44336"
                                                    }}
                                                >
                                                    {index.change}
                                                </span>
                                            </Link>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        )}
                    </div>
                </div>

                <header className="header header_default style_three">
                    <div className="header_mid">
                        <div className="medium-container">
                            <div className="row align-items-center">
                                <div className="col-xl-3 col-lg-2 col-md-12">
                                    <div className="logo mid_logo_icon">
                                        <Link href="/" className="logo_mid">
                                        <img src="/assets/images/logo.png" alt="Creote Elementor" style={{width: '60px', height: '80px'}} className="logo_default"/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-9 col-lg-10 col-md-12 hidden-sm">
                                    <div className="row">
                                        <div className="col-lg-4 same_column">
                                            <div className="mid_content one">
                                                <span className=" icon-deadline mid_icon" />
                                                <div className="text">
                                                    <h4> 8:00AM - 6:00PM</h4>
                                                    <p>Monday to Saturday</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 same_column">
                                            <div className="mid_content one">
                                                <span className=" icon-24-hours mid_icon" />
                                                <div className="text">
                                                    <h4> Online Services 24/7</h4>
                                                    <p>+1221234567</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 same_column">
                                            <div className="mid_content one">
                                                <span className=" icon-location mid_icon" />
                                                <div className="text">
                                                    <h4> 219 Amara Fort Apt. 394</h4>
                                                    <p>New York, NY 941</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Menu Bar - This becomes sticky */}
                    <div className={`navbar_outer mod_btn_enable ${isSticky ? 'sticky-menu' : ''}`}>
                        <div className="medium-container">
                            <div className="row align-items-center">
                                <div className="col-lg-12 menu_column">
                                    <div className="navbar_togglers hamburger_menu" onClick={handleMobileMenu}>
                                        <span className="line" />
                                        <span className="line" />
                                        <span className="line" />
                                    </div>
                                    <div className="header_content_collapse">
                                        <div className="header_menu_box">
                                            <div className="modal_box_buttom">
                                                <button type="button" onClick={handleContactPopup} className="contact-toggler"><i className="icon-bar" /></button>
                                            </div>
                                            <div className="navigation_menu">
                                                <Navbar />
                                            </div>
                                        </div>
                                        <div className="header_right_content">
                                            <ul>
                                                <li>
                                                    <button type="button" className="search-toggler" onClick={handleSearch}><i className="icon-search" /></button>
                                                </li>
                                                <li>
                                                    <Link href="/" className="theme-btn five"> Get In Touch </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>

            <style jsx global>{`
                .header_area {
                    position: relative;
                    z-index: 999;
                }
                
                .top_bar.style_one {
                    padding: 10px 0;
                    background: #1a1a1a;
                    width: 100%;
                    left: 0;
                    z-index: 1000;
                }
                
                .topbar-slider {
                    overflow: hidden;
                }
                
                .topbar-swiper {
                    width: 100%;
                    height: 100%;
                }
                
                .index-item {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    text-decoration: none;
                    color: #fff;
                    font-size: 14px;
                    font-weight: 500;
                    white-space: nowrap;
                    padding: 5px 15px;
                    border-right: 1px solid rgba(255,255,255,0.2);
                }
                
                .index-item:last-child {
                    border-right: none;
                }
                
                .index-name {
                    font-weight: 600;
                }
                
                .index-value {
                    opacity: 0.9;
                    font-family: 'Courier New', monospace;
                }
                
                .index-change {
                    font-size: 13px;
                    font-family: 'Courier New', monospace;
                }

                /* Sticky menu styles */
                .navbar_outer.sticky-menu {
                    position: fixed;
                    top: 0;
                    width: 100%;
                    background: #fff;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                    animation: slideDown 0.3s ease-out;
                    z-index: 999;
                    padding: 10px 0;
                }
                
                @keyframes slideDown {
                    from { transform: translateY(-100%); }
                    to { transform: translateY(0); }
                }

                /* Adjust logo size when sticky */
                .navbar_outer.sticky-menu .logo_default {
                    height: 50px;
                    width: auto;
                }

                /* Responsive styles */
                @media (max-width: 1200px) {
                    .index-item {
                        padding: 5px 10px;
                        font-size: 13px;
                    }
                }
                
                @media (max-width: 991px) {
                    .index-item {
                        font-size: 11px;
                        gap: 5px;
                        padding: 5px 8px;
                    }
                    
                    .index-value, .index-change {
                        display: none;
                    }

                    .navbar_outer.sticky-menu {
                        padding: 5px 0;
                    }
                }

                @media (max-width: 768px) {
                    .top_bar.style_one {
                        padding: 8px 0;
                    }
                }
            `}</style>
        </>
    )
}