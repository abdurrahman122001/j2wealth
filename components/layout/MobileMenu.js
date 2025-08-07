import Link from "next/link";
import { useState } from "react";

export default function MobileMenu({ handleMobileMenu }) {
  const [isActive, setIsActive] = useState({ status: false, key: "" });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({ status: false, key: "" });
    } else {
      setIsActive({ status: true, key });
    }
  };

  return (
    <>
      <div className="crt_mobile_menu">
        <div className="menu-backdrop" onClick={handleMobileMenu} />
        <nav className="menu-box">
          <div className="close-btn" onClick={handleMobileMenu}>
            <i className="icon-close" />
          </div>
          <form role="search" method="get" action="#">
            <input
              type="search"
              className="search"
              placeholder="Search..."
              name="s"
              title="Search"
            />
            <button type="submit" className="sch_btn">
              <i className="icon-search" />
            </button>
          </form>
          <div className="menu-outer">
            <ul id="myNavbar" className="navbar_nav">
              {/* HOME */}
              <li className="menu-item nav-item">
                <Link href="/" className="nav-link">
                  <span>Home</span>
                </Link>
              </li>

              {/* ABOUT US */}
              <li className="menu-item nav-item">
                <Link href="/about-us" className="nav-link">
                  <span>About Us</span>
                </Link>
              </li>

              {/* OUR OFFERINGS */}
              <li className="menu-item menu-item-has-children dropdown nav-item">
                <div className="d-flex align-items-center justify-content-between">
                  <Link href="#" className="dropdown-toggle nav-link">
                    <span>Our Offerings</span>
                  </Link>
                  <div className="dropdown-btn" onClick={() => handleToggle(1)}>
                    <span className={`fa fa-angle-down ${isActive.key === 1 ? "open" : ""}`} />
                  </div>
                </div>
                <ul
                  className="dropdown-menu"
                  style={{ display: isActive.key === 1 ? "block" : "none" }}
                >
                  <li className="menu-item nav-item">
                    <Link href="/about-us" className="dropdown-item nav-link">
                      <span>Mutual Funds</span>
                    </Link>
                  </li>
                  <li className="menu-item nav-item">
                    <Link href="/service-default" className="dropdown-item nav-link">
                      <span>Stock Broking</span>
                    </Link>
                  </li>
                  <li className="menu-item nav-item">
                    <Link href="/pricing-packages" className="dropdown-item nav-link">
                      <span>Portfolio Management Services</span>
                    </Link>
                  </li>
                  <li className="menu-item nav-item">
                    <Link href="/our-team" className="dropdown-item nav-link">
                      <span>Alternative Investment Funds</span>
                    </Link>
                  </li>
                  <li className="menu-item nav-item">
                    <Link href="/faqs" className="dropdown-item nav-link">
                      <span>Life Insurance</span>
                    </Link>
                  </li>
                  <li className="menu-item nav-item">
                    <Link href="/faqs" className="dropdown-item nav-link">
                      <span>Guaranteed Return Plan</span>
                    </Link>
                  </li>
                  <li className="menu-item nav-item">
                    <Link href="/faqs" className="dropdown-item nav-link">
                      <span>Savings Plan</span>
                    </Link>
                  </li>
                  <li className="menu-item nav-item">
                    <Link href="/faqs" className="dropdown-item nav-link">
                      <span>General Insurance</span>
                    </Link>
                  </li>
                  <li className="menu-item nav-item">
                    <Link href="/faqs" className="dropdown-item nav-link">
                      <span>Bonds</span>
                    </Link>
                  </li>
                  <li className="menu-item nav-item">
                    <Link href="/faqs" className="dropdown-item nav-link">
                      <span>Fixed Deposits</span>
                    </Link>
                  </li>
                  <li className="menu-item nav-item">
                    <Link href="/faqs" className="dropdown-item nav-link">
                      <span>Tax Plannings</span>
                    </Link>
                  </li>
                </ul>
              </li>

              {/* TOOLS & CALCULATOR */}
              <li className="menu-item menu-item-has-children dropdown nav-item">
                <div className="d-flex align-items-center justify-content-between">
                  <Link href="#" className="dropdown-toggle nav-link">
                    <span>Tools & Calculator</span>
                  </Link>
                  <div className="dropdown-btn" onClick={() => handleToggle(2)}>
                    <span className={`fa fa-angle-down ${isActive.key === 2 ? "open" : ""}`} />
                  </div>
                </div>
                <ul
                  className="dropdown-menu"
                  style={{ display: isActive.key === 2 ? "block" : "none" }}
                >
                  <li className="menu-item nav-item">
                    <Link href="/about-us" className="dropdown-item nav-link">
                      <span>Financial Calculators</span>
                    </Link>
                  </li>
                  <li className="menu-item nav-item">
                    <Link href="/service-default" className="dropdown-item nav-link">
                      <span>Download Forms</span>
                    </Link>
                  </li>
                  <li className="menu-item nav-item">
                    <Link href="/pricing-packages" className="dropdown-item nav-link">
                      <span>Pay Premium Online</span>
                    </Link>
                  </li>
                  <li className="menu-item nav-item">
                    <Link href="/our-team" className="dropdown-item nav-link">
                      <span>Financial Fitness</span>
                    </Link>
                  </li>
                  <li className="menu-item nav-item">
                    <Link href="/faqs" className="dropdown-item nav-link">
                      <span>Risk Profile</span>
                    </Link>
                  </li>
                  <li className="menu-item nav-item">
                    <Link href="/faqs" className="dropdown-item nav-link">
                      <span>Tax Calculator</span>
                    </Link>
                  </li>
                </ul>
              </li>

              {/* CONTACT */}
              <li className="menu-item nav-item">
                <Link href="/contact" className="nav-link">
                  <span>Contact</span>
                </Link>
              </li>
              
              {/* BLOGS */}
              <li className="menu-item nav-item">
                <Link href="/blog-modern" className="nav-link">
                  <span>Blogs</span>
                </Link>
              </li>

              {/* OPEN A/C */}
              <li className="menu-item menu-item-has-children dropdown nav-item">
                <div className="d-flex align-items-center justify-content-between">
                  <Link href="#" className="dropdown-toggle nav-link">
                    <span>Open A/C</span>
                  </Link>
                  <div className="dropdown-btn" onClick={() => handleToggle(3)}>
                    <span className={`fa fa-angle-down ${isActive.key === 3 ? "open" : ""}`} />
                  </div>
                </div>
                <ul
                  className="dropdown-menu"
                  style={{ display: isActive.key === 3 ? "block" : "none" }}
                >
                  <li className="menu-item nav-item">
                    <Link href="/about-us" className="dropdown-item nav-link">
                      <span>Open Account - MF</span>
                    </Link>
                  </li>
                  <li className="menu-item nav-item">
                    <Link href="/service-default" className="dropdown-item nav-link">
                      <span>Open Account - Demat</span>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
