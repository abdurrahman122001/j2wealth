import Link from "next/link"
import Navbar from "../Navbar"
import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper"
import "swiper/css"

export default function Header1({ handleSearch, handleContactPopup, handleMobileMenu }) {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const indices = [
        { name: "SENSEX", value: "80623.26", change: "79.27 (0.1%)", link: "/index/sensex" },
        { name: "NIFTY 50", value: "24596.15", change: "21.95 (0.09%)", link: "/index/nifty" },
        { name: "GOLD", value: "101415", change: "153 (0.15%)", link: "/index/gold" },
        { name: "SILVER", value: "115101", change: "1446 (1.26%)", link: "/index/silver" },
        { name: "NASDAQ", value: "21969.42", change: "252.87", link: "/index/nasdaq" },
    ]

    return (
        <>
            <div className="header_area" id="header_contents">
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
                                                        color: index.change.includes("+") || index.change.includes("(") ? "#4CAF50" : "#F44336"
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
                <header className="header header_default style_one get_sticky_header">
                    <div className="auto-container">
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-md-9 col-sm-9 col-xs-9 logo_column">
                                <div className="header_logo_box">
                                    <Link href="/" className="logo navbar-brand">
                                        <img src="/assets/images/logo.png" alt="Creote Elementor" className="logo_default"/>
                                        <img src="/assets/images/logo.png" alt="Creote Elementor" className="logo__sticky" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-10 col-md-3 col-sm-3 col-xs-3 menu_column">
                                <div className="navbar_togglers hamburger_menu" onClick={handleMobileMenu}>
                                    <span className="line" />
                                    <span className="line" />
                                    <span className="line" />
                                </div>
                                <div className="header_content_collapse">
                                    <div className="header_menu_box">
                                        <div className="navigation_menu">
                                            <Navbar />
                                        </div>
                                    </div>
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
                    </div>
                </header>
            </div>

            <style jsx global>{`
                .top_bar.style_one {
                    background: #f8f8f8;
                    padding: 10px 0;
                    border-bottom: 1px solid #eee;
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
                    color: #333;
                    font-size: 14px;
                    font-weight: 500;
                    white-space: nowrap;
                    padding: 5px 0;
                }
                
                .index-name {
                    font-weight: 600;
                    color: #222;
                }
                
                .index-value {
                    color: #555;
                }
                
                
                @media (max-width: 768px) {
                    .top_bar.style_one {
                        padding: 8px 0;
                    }
                    
                    .index-item {
                        font-size: 12px;
                        gap: 5px;
                    }
                }
            `}</style>
        </>
    )
}