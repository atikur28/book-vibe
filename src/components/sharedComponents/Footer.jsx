import { Link } from "react-router-dom";
import Logo from "../../assets/book.ico";

const Footer = () => {
  return (
    <footer
      className="footer sm:footer-horizontal text-white p-10 bg-base-100"
      style={{ fontFamily: "'Roboto', sans-serif" }}
    >
      <aside>
        <img src={Logo} alt="Book Vibe Logo" className="w-12 h-12" />
        <p>
          Book Vibe Ltd.
          <br />
          Providing reliable book services since 2025
        </p>
      </aside>

      <nav>
        <h6 className="footer-title">Services</h6>
        <Link to="/branding" className="link link-hover">
          Branding
        </Link>
        <Link to="/design" className="link link-hover">
          Design
        </Link>
        <Link to="/marketing" className="link link-hover">
          Marketing
        </Link>
        <Link to="/advertisement" className="link link-hover">
          Advertisement
        </Link>
      </nav>

      <nav>
        <h6 className="footer-title">Company</h6>
        <Link to="/about" className="link link-hover">
          About us
        </Link>
        <Link to="/contact" className="link link-hover">
          Contact
        </Link>
        <Link to="/jobs" className="link link-hover">
          Jobs
        </Link>
        <Link to="/press" className="link link-hover">
          Press kit
        </Link>
      </nav>

      <nav>
        <h6 className="footer-title">Legal</h6>
        <Link to="/terms" className="link link-hover">
          Terms of use
        </Link>
        <Link to="/privacy" className="link link-hover">
          Privacy policy
        </Link>
        <Link to="/cookies" className="link link-hover">
          Cookie policy
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
