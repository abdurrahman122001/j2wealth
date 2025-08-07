import Link from "next/link";
import { useRouter } from "next/router";
export default function Navbar() {
  const router = useRouter();

  return (
    <>
      {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}
      <ul id="myNavbar" className="navbar_nav">
        <li className="menu-item  menu-item-has-children dropdown dropdown_full position-static mega_menu nav-item">
          <Link href="/" className="dropdown-toggle nav-link">
            <span>Home</span>
            {/* <span className="fa fa-angle-down"></span> */}
          </Link>
        </li>

        <li className="menu-item  nav-item">
          <Link href="/about-us" className="dropdown-item nav-link">
            <span>About Us</span>
          </Link>
        </li>
        <li className="menu-item menu-item-has-children dropdown nav-item">
          <Link href="/#" className="dropdown-toggle nav-link">
            <span>Our Offerings</span>
          </Link>
          <ul className="dropdown-menu">
            <li className="menu-item  nav-item">
              <Link href="/about-us" className="dropdown-item nav-link">
                <span>Mutual Funds</span>
              </Link>
            </li>
            <li className="menu-item menu-item-has-children dropdown nav-item">
              <Link href="/service-default" className="dropdown-item nav-link">
                <span>Stock Broking</span>
              </Link>
            </li>
            <li className="menu-item  nav-item">
              <Link href="/pricing-packages" className="dropdown-item nav-link">
                <span>Portfolio Management Services</span>
              </Link>
            </li>
            <li className="menu-item  nav-item">
              <Link href="/our-team" className="dropdown-item nav-link">
                <span>Alternative Investment Funds</span>
              </Link>
            </li>
            <li className="menu-item  nav-item">
              <Link href="/faqs" className="dropdown-item nav-link">
                <span>Life Insurance</span>
              </Link>
            </li>
            <li className="menu-item  nav-item">
              <Link href="/faqs" className="dropdown-item nav-link">
                <span>Guaranteed Return Plan</span>
              </Link>
            </li>
            <li className="menu-item  nav-item">
              <Link href="/faqs" className="dropdown-item nav-link">
                <span>Life Insurance</span>
              </Link>
            </li>
            <li className="menu-item  nav-item">
              <Link href="/faqs" className="dropdown-item nav-link">
                <span>Savings Plan</span>
              </Link>
            </li>
            <li className="menu-item  nav-item">
              <Link href="/faqs" className="dropdown-item nav-link">
                <span>General Insurance</span>
              </Link>
            </li>
            <li className="menu-item  nav-item">
              <Link href="/faqs" className="dropdown-item nav-link">
                <span>Bonds</span>
              </Link>
            </li>
            <li className="menu-item  nav-item">
              <Link href="/faqs" className="dropdown-item nav-link">
                <span>Fixed Deposits</span>
              </Link>
            </li>
            <li className="menu-item  nav-item">
              <Link href="/faqs" className="dropdown-item nav-link">
                <span>Tax Plannings</span>
              </Link>
            </li>
          </ul>

          <div className="dropdown-btn">
            <span className="fa fa-angle-down"></span>
          </div>
        </li>
        <li className="menu-item menu-item-has-children dropdown nav-item">
          <Link href="/#" className="dropdown-toggle nav-link">
            <span>Tools & Calculator</span>
          </Link>
          <ul className="dropdown-menu">
            <li className="menu-item  nav-item">
              <Link href="/about-us" className="dropdown-item nav-link">
                <span>Financial Calculators</span>
              </Link>
            </li>
            <li className="menu-item menu-item-has-children dropdown nav-item">
              <Link href="/service-default" className="dropdown-item nav-link">
                <span>Download Forms</span>
              </Link>
            </li>
            <li className="menu-item  nav-item">
              <Link href="/pricing-packages" className="dropdown-item nav-link">
                <span>Pay Premium Online</span>
              </Link>
            </li>
            <li className="menu-item  nav-item">
              <Link href="/our-team" className="dropdown-item nav-link">
                <span>Financial Fitness</span>
              </Link>
            </li>
            <li className="menu-item  nav-item">
              <Link href="/faqs" className="dropdown-item nav-link">
                <span>Risk Profile</span>
              </Link>
            </li>
            <li className="menu-item  nav-item">
              <Link href="/faqs" className="dropdown-item nav-link">
                <span>Tax Calculator</span>
              </Link>
            </li>
          </ul>

          <div className="dropdown-btn">
            <span className="fa fa-angle-down"></span>
          </div>
        </li>

        <li className="menu-item  nav-item">
          <Link href="/contact" className="dropdown-item nav-link">
            <span>Contact</span>
          </Link>
        </li>
        <li className="menu-item nav-item">
          <Link href="/blog-modern" className="dropdown-item nav-link">
            <span>Blogs</span>
          </Link>
        </li>
        <li className="menu-item menu-item-has-children dropdown nav-item">
          <Link href="/#" className="dropdown-toggle nav-link">
            <span>Open A/C</span>
          </Link>
          <ul className="dropdown-menu">
            <li className="menu-item  nav-item">
              <Link href="/about-us" className="dropdown-item nav-link">
                <span>Open Account - MF</span>
              </Link>
            </li>
            <li className="menu-item menu-item-has-children dropdown nav-item">
              <Link href="/service-default" className="dropdown-item nav-link">
                <span>Open Account - Demat</span>
              </Link>
            </li>
          </ul>

          <div className="dropdown-btn">
            <span className="fa fa-angle-down"></span>
          </div>
        </li>
      </ul>
    </>
  );
}
