import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    checkMobile(); // Initial check
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

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
        
        <li className="menu-item menu-item-has-children dropdown nav-item">
          <Link href="#" className="nav-link">
            <span>Our Offerings</span>
            <svg className="dropdown-icon" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <ul className="dropdown-menu">
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
        
        <li className="menu-item menu-item-has-children dropdown nav-item">
          <Link href="#" className="nav-link">
            <span>Tools & Calculator</span>
            <svg className="dropdown-icon" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <ul className="dropdown-menu">
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
        
        <li className="menu-item menu-item-has-children dropdown nav-item">
          <Link href="#" className="nav-link">
            <span>Open A/C</span>
            <svg className="dropdown-icon" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <ul className="dropdown-menu">
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
        .navbar_nav {
          display: flex;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        .navbar_nav .nav-item {
          position: relative;
          padding: 0 15px;
        }
        
        .navbar_nav .nav-link {
          color: #fff !important;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 5px;
          position: relative;
          padding: 15px 0;
        }
        
        .navbar_nav .dropdown-icon {
          transition: transform 0.3s ease;
        }
        
        .navbar_nav .nav-item:hover .dropdown-icon {
          transform: rotate(180deg);
        }
        
        .navbar_nav .nav-link:hover {
          color: var(--primary-color) !important;
        }
        
        .navbar_nav .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 220px;
          background: #fff;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 999;
          padding: 10px 0;
          border-radius: 5px;
        }
        
        .navbar_nav .dropdown-menu .dropdown-item {
          color: #333 !important;
          padding: 8px 20px;
          white-space: nowrap;
          display: block;
          transition: all 0.3s ease;
        }
        
        .navbar_nav .dropdown-menu .dropdown-item:hover {
          color: var(--primary-color) !important;
          background: #f8f8f8;
        }
        
        .navbar_nav .nav-item:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
        }
        
        /* Sticky header styles */
        .navbar_nav.sticky-nav .nav-link {
          color: #333 !important;
        }
        
        .navbar_nav.sticky-nav .nav-link:hover {
          color: var(--primary-color) !important;
        }
        
        .navbar_nav.sticky-nav .dropdown-icon path {
          stroke: #333;
        }
        
        /* Mobile view styles */
        .navbar_nav.mobile-view {
          flex-direction: column;
          align-items: flex-start;
          padding: 20px 0;
          background: #fff;
          width: 100%;
        }
        
        .navbar_nav.mobile-view .nav-item {
          padding: 0;
          width: 100%;
          border-bottom: 1px solid #f0f0f0;
        }
        
        .navbar_nav.mobile-view .nav-link {
          color: #333 !important;
          padding: 12px 20px;
          justify-content: space-between;
          width: 100%;
        }
        
        .navbar_nav.mobile-view .dropdown-menu {
          position: static !important;
          opacity: 1 !important;
          visibility: visible !important;
          display: none;
          box-shadow: none;
          padding-left: 20px !important;
          background: #f9f9f9;
          width: 100%;
        }
        
        .navbar_nav.mobile-view .dropdown-menu .dropdown-item {
          color: #333 !important;
          padding: 10px 20px;
          border-bottom: 1px solid #eee;
        }
        
        .navbar_nav.mobile-view .nav-item.active .dropdown-menu {
          display: block;
        }
        
        .navbar_nav.mobile-view .dropdown-icon {
          transform: rotate(0deg);
        }
        
        .navbar_nav.mobile-view .nav-item.active .dropdown-icon {
          transform: rotate(180deg);
        }
        
        @media (max-width: 991px) {
          .navbar_nav:not(.mobile-view) {
            display: none;
          }
        }
        
        @media (min-width: 992px) {
          .navbar_nav.mobile-view {
            display: none;
          }
        }
      `}</style>
    </>
  );
}