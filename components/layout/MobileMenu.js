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
                    <Link href="/mutual-funds" className="dropdown-item nav-link">
                      <span>Mutual Funds</span>
                    </Link>
                  </li>
                  <li className="menu-item nav-item">
                    <Link href="/stock-broking" className="dropdown-item nav-link">
                      <span>Stock Broking</span>
                    </Link>
                  </li>
                  <li className="menu-item nav-item">
                    <Link href="/portfolio-management" className="dropdown-item nav-link">
                      <span>Portfolio Management Services</span>
                    </Link>
                  </li>
                  <li className="menu-item nav-item">
                    <Link href="/alternative-funds" className="dropdown-item nav-link">
                      <span>Alternative Investment Funds</span>
                    </Link>
                  </li>
                  <li className="menu-item nav-item">
                    <Link href="/life-insurance" className="dropdown-item nav-link">
                      <span>Life Insurance</span>
                    </Link>
                  </li>
                  <li className="menu-item nav-item">
                    <Link href="/guaranteed-returns" className="dropdown-item nav-link">
                      <span>Guaranteed Return Plan</span>
                    </Link>
                  </li>
                  <li className="menu-item nav-item">
                    <Link href="/savings-plan" className="dropdown-item nav-link">
                      <span>Savings Plan</span>
                    </Link>
                  </li>
                  <li className="menu-item nav-item">
                    <Link href="/general-insurance" className="dropdown-item nav-link">
                      <span>General Insurance</span>
                    </Link>
                  </li>
                  <li className="menu-item nav-item">
                    <Link href="/bonds" className="dropdown-item nav-link">
                      <span>Bonds</span>
                    </Link>
                  </li>
                  <li className="menu-item nav-item">
                    <Link href="/fixed-deposits" className="dropdown-item nav-link">
                      <span>Fixed Deposits</span>
                    </Link>
                  </li>
                  <li className="menu-item nav-item">
                    <Link href="/tax-planning" className="dropdown-item nav-link">
                      <span>Tax Planning</span>
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
                    <Link href="/financial-calculators" className="dropdown-item nav-link">
                      <span>Financial Calculators</span>
                    </Link>
                  </li>
                  <li className="menu-item nav-item">
                    <Link href="/download-forms" className="dropdown-item nav-link">
                      <span>Download Forms</span>
                    </Link>
                  </li>
                  <li className="menu-item nav-item">
                    <Link href="/pay-premium" className="dropdown-item nav-link">
                      <span>Pay Premium Online</span>
                    </Link>
                  </li>
                  <li className="menu-item nav-item">
                    <Link href="/financial-fitness" className="dropdown-item nav-link">
                      <span>Financial Fitness</span>
                    </Link>
                  </li>
                  <li className="menu-item nav-item">
                    <Link href="/risk-profile" className="dropdown-item nav-link">
                      <span>Risk Profile</span>
                    </Link>
                  </li>
                  <li className="menu-item nav-item">
                    <Link href="/tax-calculator" className="dropdown-item nav-link">
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
                <Link href="/blogs" className="nav-link">
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
                    <Link href="/open-mf-account" className="dropdown-item nav-link">
                      <span>Open Account - MF</span>
                    </Link>
                  </li>
                  <li className="menu-item nav-item">
                    <Link href="/open-demat-account" className="dropdown-item nav-link">
                      <span>Open Account - Demat</span>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <style jsx global>{`
        /* Mobile Menu - Force all links to be black */
        .crt_mobile_menu .menu-box .menu-outer ul.navbar_nav li .nav-link,
        .crt_mobile_menu .menu-box .menu-outer ul.navbar_nav li .nav-link span,
        .crt_mobile_menu .menu-box .menu-outer ul.navbar_nav li a.nav-link,
        .crt_mobile_menu .menu-box .menu-outer ul.navbar_nav li a.nav-link span,
        .crt_mobile_menu .menu-box .menu-outer ul.navbar_nav li .dropdown-item,
        .crt_mobile_menu .menu-box .menu-outer ul.navbar_nav li .dropdown-item span,
        .crt_mobile_menu .menu-box .menu-outer ul.navbar_nav li a.dropdown-item,
        .crt_mobile_menu .menu-box .menu-outer ul.navbar_nav li a.dropdown-item span,
        .crt_mobile_menu .menu-box .menu-outer ul.navbar_nav li .dropdown-toggle,
        .crt_mobile_menu .menu-box .menu-outer ul.navbar_nav li .dropdown-toggle span,
        .crt_mobile_menu .menu-box .menu-outer ul.navbar_nav li a.dropdown-toggle,
        .crt_mobile_menu .menu-box .menu-outer ul.navbar_nav li a.dropdown-toggle span,
        .crt_mobile_menu .navbar_nav .nav-link,
        .crt_mobile_menu .navbar_nav .nav-link span,
        .crt_mobile_menu .navbar_nav a.nav-link,
        .crt_mobile_menu .navbar_nav a.nav-link span,
        .crt_mobile_menu .navbar_nav .dropdown-item,
        .crt_mobile_menu .navbar_nav .dropdown-item span,
        .crt_mobile_menu .navbar_nav a.dropdown-item,
        .crt_mobile_menu .navbar_nav a.dropdown-item span,
        .crt_mobile_menu .navbar_nav .dropdown-toggle,
        .crt_mobile_menu .navbar_nav .dropdown-toggle span,
        .crt_mobile_menu .navbar_nav a.dropdown-toggle,
        .crt_mobile_menu .navbar_nav a.dropdown-toggle span {
          color: #0c151a !important;
        }

        /* Mobile Menu hover states */
        .crt_mobile_menu .menu-box .menu-outer ul.navbar_nav li .nav-link:hover,
        .crt_mobile_menu .menu-box .menu-outer ul.navbar_nav li .nav-link:hover span,
        .crt_mobile_menu .menu-box .menu-outer ul.navbar_nav li a.nav-link:hover,
        .crt_mobile_menu .menu-box .menu-outer ul.navbar_nav li a.nav-link:hover span,
        .crt_mobile_menu .menu-box .menu-outer ul.navbar_nav li .dropdown-item:hover,
        .crt_mobile_menu .menu-box .menu-outer ul.navbar_nav li .dropdown-item:hover span,
        .crt_mobile_menu .menu-box .menu-outer ul.navbar_nav li a.dropdown-item:hover,
        .crt_mobile_menu .menu-box .menu-outer ul.navbar_nav li a.dropdown-item:hover span,
        .crt_mobile_menu .menu-box .menu-outer ul.navbar_nav li .dropdown-toggle:hover,
        .crt_mobile_menu .menu-box .menu-outer ul.navbar_nav li .dropdown-toggle:hover span,
        .crt_mobile_menu .menu-box .menu-outer ul.navbar_nav li a.dropdown-toggle:hover,
        .crt_mobile_menu .menu-box .menu-outer ul.navbar_nav li a.dropdown-toggle:hover span,
        .crt_mobile_menu .navbar_nav .nav-link:hover,
        .crt_mobile_menu .navbar_nav .nav-link:hover span,
        .crt_mobile_menu .navbar_nav a.nav-link:hover,
        .crt_mobile_menu .navbar_nav a.nav-link:hover span,
        .crt_mobile_menu .navbar_nav .dropdown-item:hover,
        .crt_mobile_menu .navbar_nav .dropdown-item:hover span,
        .crt_mobile_menu .navbar_nav a.dropdown-item:hover,
        .crt_mobile_menu .navbar_nav a.dropdown-item:hover span,
        .crt_mobile_menu .navbar_nav .dropdown-toggle:hover,
        .crt_mobile_menu .navbar_nav .dropdown-toggle:hover span,
        .crt_mobile_menu .navbar_nav a.dropdown-toggle:hover,
        .crt_mobile_menu .navbar_nav a.dropdown-toggle:hover span {
          color: #333 !important;
        }

        /* Mobile Menu dropdown arrows */
        .crt_mobile_menu .dropdown-btn span,
        .crt_mobile_menu .dropdown-btn .fa {
          color: #0c151a !important;
        }

        /* Additional fallback selectors */
        .crt_mobile_menu * {
          color: #0c151a !important;
        }
        
        /* Exception for search input and buttons */
        .crt_mobile_menu .search,
        .crt_mobile_menu .sch_btn,
        .crt_mobile_menu .close-btn {
          color: inherit !important;
        }
      `}</style>
    </>
  );
}