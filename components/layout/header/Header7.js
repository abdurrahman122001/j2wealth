import Link from "next/link"
import Navbar from "../Navbar"
import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper"
import "swiper/css"

export default function Header7({ handleSearch, handleCart, handleMobileMenu }) {
    const [isClient, setIsClient] = useState(false)
    const [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
        setIsClient(true)
        
        const handleScroll = () => {
            if (window.scrollY > 50) {
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
            <div className={`header_area ${isSticky ? 'sticky-header' : ''}`} id="header_contents">
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
                
                <header className={`header header_default style_seven style_eight ${isSticky ? 'head_sticky' : 'head_absolute transparent-bg'}`}>
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-8 col-sm-8 col-xs-8 logo_column">
                                <div className="header_logo_box">
                                    <Link href="/" className="logo navbar-brand">
                                        <img src="/assets/images/logo.png" alt="Company Logo" className="logo_img" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-1 col-sm-1 col-xs-1 menu_column">
                                <div className={`navbar_togglers hamburger_menu ${isSticky ? 'sticky' : ''}`} onClick={handleMobileMenu}>
                                    <span className="line" />
                                    <span className="line" />
                                    <span className="line" />
                                </div>
                                <div className="header_content_collapse">
                                    <div className="header_menu_box">
                                        <div className="navigation_menu white-nav">
                                            <Navbar />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-3 col-xs-3 right_column">
                                <div className="header_right_content">
                                    <ul>
                                        <li className="header-button">
                                            <Link href="#" className="theme-btn one">Login</Link>
                                        </li>
                                    </ul>
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
                    position: absolute;
                    width: 100%;
                    top: 0;
                    background: transparent;
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
                
                /* Header styles */
                .header.style_seven.head_absolute {
                    position: absolute;
                    width: 100%;
                    left: 0;
                    top: 40px;
                    transition: all 0.3s ease;
                }
                
                .header.style_seven.head_sticky {
                    position: fixed;
                    top: 0;
                    width: 100%;
                    background: #fff;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                    animation: slideDown 0.3s ease-out;
                }
                
                @keyframes slideDown {
                    from { transform: translateY(-100%); }
                    to { transform: translateY(0); }
                }
                
                /* Hamburger menu styles */
                .hamburger_menu {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    width: 24px;
                    height: 18px;
                    cursor: pointer;
                    z-index: 1001;
                }
                
                .hamburger_menu .line {
                    display: block;
                    width: 100%;
                    height: 2px;
                    background: #fff;
                    transition: all 0.3s ease;
                }
                
                /* Sticky state hamburger */
                .hamburger_menu.sticky .line,
                .head_sticky .hamburger_menu .line {
                    background: #333;
                }
                
                /* Navigation styles */
                .header.style_seven .white-nav .main_menu > li > a {
                    color: #fff !important;
                }
                
                .header.style_seven .white-nav .main_menu > li:hover > a,
                .header.style_seven .white-nav .main_menu > li.current-menu-item > a {
                    color: var(--primary-color) !important;
                }
                
                .head_sticky .white-nav .main_menu > li > a {
                    color: #333 !important;
                }
                
                .head_sticky .white-nav .main_menu > li:hover > a,
                .head_sticky .white-nav .main_menu > li.current-menu-item > a {
                    color: var(--primary-color) !important;
                }
                
                /* Right content styles */
                .header.style_seven .header_right_content ul {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    justify-content: flex-end;
                }
                
                .header.style_seven .theme-btn.one {
                    background: transparent;
                    color: #fff;
                    border: 1px solid rgba(255,255,255,0.3);
                    transition: all 0.3s ease;
                }
                
                .header.style_seven .theme-btn.one:hover {
                    background: rgba(255,255,255,0.1);
                    color: #fff;
                }
                
                .head_sticky .theme-btn.one {
                    color: #333 !important;
                    border-color: rgba(0,0,0,0.1);
                }
                
                .head_sticky .theme-btn.one:hover {
                    background: rgba(0,0,0,0.05);
                    color: #333 !important;
                }
                
                /* Logo */
                .logo_img {
                    height: auto;
                    max-height: 80px;
                    width: 60px;
                    transition: all 0.3s ease;
                }
                
                @media (max-width: 1200px) {
                    .header.style_seven.head_absolute {
                        top: 30px;
                    }
                    
                    .index-item {
                        padding: 5px 10px;
                        font-size: 13px;
                    }
                }
                
                @media (max-width: 991px) {
                    .header.style_seven.head_absolute {
                        top: 20px;
                    }
                    
                    .index-item {
                        font-size: 11px;
                        gap: 5px;
                        padding: 5px 8px;
                    }
                    
                    .index-value, .index-change {
                        display: none;
                    }
                    
                    .hamburger_menu .line {
                        background: #333;
                    }
                }
                
                @media (max-width: 768px) {
                    .header.style_seven.head_absolute {
                        top: 15px;
                    }
                    
                    .logo_img {
                        max-height: 35px;
                    }
                }
            `}</style>
        </>
    )
}