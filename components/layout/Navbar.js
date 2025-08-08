import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    checkMobile();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const toggleDropdown = (key) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  return (
    <>
      <ul id="myNavbar" className={`navbar_nav ${isSticky ? 'sticky-nav' : ''} ${isMobile ? 'mobile-view' : ''}`}>
        <li className="menu-item nav-item">
          <Link href="/" className="nav-link">
            <span>Home</span>
          </Link>
        </li>

        <li className="menu-item nav-item">
          <Link href="/about-us" className="nav-link">
            <span>About Us</span>
          </Link>
        </li>

        <li className={`menu-item menu-item-has-children dropdown nav-item ${activeDropdown === 'offerings' ? 'active' : ''}`}>
          {isMobile ? (
            <div className="nav-link" onClick={() => toggleDropdown('offerings')}>
              <span>Our Services</span>
              <svg className="dropdown-icon" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          ) : (
            <Link href="#" className="nav-link">
              <span>Our Offerings</span>
              <svg className="dropdown-icon" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          )}
          <ul className="dropdown-menu" style={isMobile ? { display: activeDropdown === 'offerings' ? 'block' : 'none' } : {}}>
            <li className="menu-item nav-item">
              <Link href="/mutual-funds" className="dropdown-item">
                <span>Mutual Funds</span>
              </Link>
            </li>
            <li className="menu-item nav-item">
              <Link href="/stock-broking" className="dropdown-item">
                <span>Stock Broking</span>
              </Link>
            </li>
            <li className="menu-item nav-item">
              <Link href="/portfolio-management" className="dropdown-item">
                <span>Portfolio Management Services</span>
              </Link>
            </li>
            <li className="menu-item nav-item">
              <Link href="/alternative-funds" className="dropdown-item">
                <span>Alternative Investment Funds</span>
              </Link>
            </li>
            <li className="menu-item nav-item">
              <Link href="/life-insurance" className="dropdown-item">
                <span>Life Insurance</span>
              </Link>
            </li>
            <li className="menu-item nav-item">
              <Link href="/guaranteed-returns" className="dropdown-item">
                <span>Guaranteed Return Plan</span>
              </Link>
            </li>
            <li className="menu-item nav-item">
              <Link href="/savings-plan" className="dropdown-item">
                <span>Savings Plan</span>
              </Link>
            </li>
            <li className="menu-item nav-item">
              <Link href="/general-insurance" className="dropdown-item">
                <span>General Insurance</span>
              </Link>
            </li>
            <li className="menu-item nav-item">
              <Link href="/bonds" className="dropdown-item">
                <span>Bonds</span>
              </Link>
            </li>
            <li className="menu-item nav-item">
              <Link href="/fixed-deposits" className="dropdown-item">
                <span>Fixed Deposits</span>
              </Link>
            </li>
            <li className="menu-item nav-item">
              <Link href="/tax-planning" className="dropdown-item">
                <span>Tax Planning</span>
              </Link>
            </li>
          </ul>
        </li>

        <li className={`menu-item menu-item-has-children dropdown nav-item ${activeDropdown === 'tools' ? 'active' : ''}`}>
          {isMobile ? (
            <div className="nav-link" onClick={() => toggleDropdown('tools')}>
              <span>Tools & Calculator</span>
              <svg className="dropdown-icon" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          ) : (
            <Link href="#" className="nav-link">
              <span>Tools & Calculator</span>
              <svg className="dropdown-icon" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          )}
          <ul className="dropdown-menu" style={isMobile ? { display: activeDropdown === 'tools' ? 'block' : 'none' } : {}}>
            <li className="menu-item nav-item">
              <Link href="/financial-calculators" className="dropdown-item">
                <span>Financial Calculators</span>
              </Link>
            </li>
            <li className="menu-item nav-item">
              <Link href="/download-forms" className="dropdown-item">
                <span>Download Forms</span>
              </Link>
            </li>
            <li className="menu-item nav-item">
              <Link href="/pay-premium" className="dropdown-item">
                <span>Pay Premium Online</span>
              </Link>
            </li>
            <li className="menu-item nav-item">
              <Link href="/financial-fitness" className="dropdown-item">
                <span>Financial Fitness</span>
              </Link>
            </li>
            <li className="menu-item nav-item">
              <Link href="/risk-profile" className="dropdown-item">
                <span>Risk Profile</span>
              </Link>
            </li>
            <li className="menu-item nav-item">
              <Link href="/tax-calculator" className="dropdown-item">
                <span>Tax Calculator</span>
              </Link>
            </li>
          </ul>
        </li>

        <li className="menu-item nav-item">
          <Link href="/contact" className="nav-link">
            <span>Contact</span>
          </Link>
        </li>

        <li className="menu-item nav-item">
          <Link href="/blogs" className="nav-link">
            <span>Blogs</span>
          </Link>
        </li>

        <li className={`menu-item menu-item-has-children dropdown nav-item ${activeDropdown === 'account' ? 'active' : ''}`}>
          {isMobile ? (
            <div className="nav-link" onClick={() => toggleDropdown('account')}>
              <span>Open A/C</span>
              <svg className="dropdown-icon" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          ) : (
            <Link href="#" className="nav-link">
              <span>Open A/C</span>
              <svg className="dropdown-icon" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          )}
          <ul className="dropdown-menu" style={isMobile ? { display: activeDropdown === 'account' ? 'block' : 'none' } : {}}>
            <li className="menu-item nav-item">
              <Link href="/open-mf-account" className="dropdown-item">
                <span>Open Account - MF</span>
              </Link>
            </li>
            <li className="menu-item nav-item">
              <Link href="/open-demat-account" className="dropdown-item">
                <span>Open Account - Demat</span>
              </Link>
            </li>
          </ul>
        </li>
      </ul>

      <style jsx global>{`
        /* Desktop view - White links */
        .navbar_nav .nav-link,
        .navbar_nav .nav-link span,
        .navbar_nav a.nav-link,
        .navbar_nav a.nav-link span {
          color: #fff !important;
        }

        .navbar_nav .nav-link:hover,
        .navbar_nav .nav-link:hover span,
        .navbar_nav a.nav-link:hover,
        .navbar_nav a.nav-link:hover span {
          color: #f0f0f0 !important;
        }

        /* Desktop dropdown items - Black */
        .navbar_nav .dropdown-menu .dropdown-item,
        .navbar_nav .dropdown-menu .dropdown-item span,
        .navbar_nav .dropdown-menu a.dropdown-item,
        .navbar_nav .dropdown-menu a.dropdown-item span,
        .navbar_nav .dropdown-menu li a,
        .navbar_nav .dropdown-menu li a span {
          color: #0c151a !important;
        }

        .navbar_nav .dropdown-menu .dropdown-item:hover,
        .navbar_nav .dropdown-menu .dropdown-item:hover span,
        .navbar_nav .dropdown-menu a.dropdown-item:hover,
        .navbar_nav .dropdown-menu a.dropdown-item:hover span,
        .navbar_nav .dropdown-menu li a:hover,
        .navbar_nav .dropdown-menu li a:hover span {
          color: #333 !important;
        }

        /* Mobile view - All links should be black */
        @media (max-width: 991px) {
          .navbar_nav.mobile-view .nav-link,
          .navbar_nav.mobile-view .nav-link span,
          .navbar_nav.mobile-view a.nav-link,
          .navbar_nav.mobile-view a.nav-link span,
          .navbar_nav.mobile-view .dropdown-item,
          .navbar_nav.mobile-view .dropdown-item span,
          .navbar_nav.mobile-view a.dropdown-item,
          .navbar_nav.mobile-view a.dropdown-item span,
          .navbar_nav.mobile-view li a,
          .navbar_nav.mobile-view li a span,
          .navbar_nav.mobile-view .dropdown-menu .dropdown-item,
          .navbar_nav.mobile-view .dropdown-menu .dropdown-item span,
          .navbar_nav.mobile-view .dropdown-menu a.dropdown-item,
          .navbar_nav.mobile-view .dropdown-menu a.dropdown-item span,
          .navbar_nav.mobile-view .dropdown-menu li a,
          .navbar_nav.mobile-view .dropdown-menu li a span,
          .crt_mobile_menu .menu-box .menu-outer ul.navbar_nav li a.nav-link,
          .crt_mobile_menu .menu-box .menu-outer ul.navbar_nav li a.nav-link span {
            color: #0c151a !important;
          }

          .navbar_nav.mobile-view .nav-link:hover,
          .navbar_nav.mobile-view .nav-link:hover span,
          .navbar_nav.mobile-view a.nav-link:hover,
          .navbar_nav.mobile-view a.nav-link:hover span,
          .navbar_nav.mobile-view .dropdown-item:hover,
          .navbar_nav.mobile-view .dropdown-item:hover span,
          .navbar_nav.mobile-view a.dropdown-item:hover,
          .navbar_nav.mobile-view a.dropdown-item:hover span,
          .navbar_nav.mobile-view li a:hover,
          .navbar_nav.mobile-view li a:hover span {
            color: #333 !important;
          }
        }

        /* Additional mobile breakpoint */
        @media (max-width: 768px) {
          .navbar_nav .nav-link,
          .navbar_nav .nav-link span,
          .navbar_nav a.nav-link,
          .navbar_nav a.nav-link span,
          .navbar_nav .dropdown-item,
          .navbar_nav .dropdown-item span,
          .navbar_nav a.dropdown-item,
          .navbar_nav a.dropdown-item span,
          .navbar_nav li a,
          .navbar_nav li a span,
          .navbar_nav .dropdown-menu .dropdown-item,
          .navbar_nav .dropdown-menu .dropdown-item span,
          .navbar_nav .dropdown-menu a.dropdown-item,
          .navbar_nav .dropdown-menu a.dropdown-item span,
          .navbar_nav .dropdown-menu li a,
          .navbar_nav .dropdown-menu li a span {
            color: #0c151a !important;
          }

          .navbar_nav .nav-link:hover,
          .navbar_nav .nav-link:hover span,
          .navbar_nav a.nav-link:hover,
          .navbar_nav a.nav-link:hover span,
          .navbar_nav .dropdown-item:hover,
          .navbar_nav .dropdown-item:hover span,
          .navbar_nav a.dropdown-item:hover,
          .navbar_nav a.dropdown-item:hover span,
          .navbar_nav li a:hover,
          .navbar_nav li a:hover span {
            color: #333 !important;
          }
        }

        /* SVG icons color inheritance */
        .navbar_nav .dropdown-icon {
          stroke: currentColor;
        }
      `}</style>
    </>
  );
}