import { useEffect } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <footer className="text-gray-300 bg-black py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-20 wrapper w-full gap-16 md:gap-10 lg:gap-5 xl:gap-10 2xl:px-20 ">
        <div className="footer-col-1 flex flex-col items-start">
          <Link
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="0"
            to="/"
            className="text-4xl md:text-2xl font-semibold text-rose-500 hover:text-white duration-300"
          >
            Mazzak Nuts.
          </Link>
        </div>
        <div
          className="footer-col-2 flex flex-col items-start"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="300"
        >
          <p className="follow-text uppercase tracking-wider text-gray-400">{`Don't forget to follow us`}</p>
          <div className="social-icons">
            <div className="icon-circle">
              <a
                href="https://www.facebook.com/mazzakagrobusiness/"
                target="_blank"
                className="text-rose-100 mx-auto"
              >
                <FaFacebookF />
              </a>
            </div>
            <div className="icon-circle">
              <FaInstagram className="text-rose-100 mx-auto" />
            </div>
            <div className="icon-circle">
              <FaLinkedinIn className="text-rose-100 mx-auto" />
            </div>
            <div className="icon-circle">
              <FaTwitter className="text-rose-100 mx-auto" />
            </div>
          </div>
        </div>
        <div
          className="footer-col-3 flex flex-col items-start"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="600"
        >
          <p className="uppercase font-medium text-rose-500 tracking-wider">
            Useful Links
          </p>
          <div className="nav-link flex flex-col-2 mt-3 gap-10 justify-start">
            <div className="link-col-left flex flex-col text-left gap-1 uppercase">
              <Link to="/" className="footer-nav-links">
                Home
              </Link>
              <Link to="/products" className="footer-nav-links">
                Shop
              </Link>
              {/* <Link to="/products/men" className="footer-nav-links">
                Men
              </Link>
              <Link to="/products/women" className="footer-nav-links">
                Women
              </Link> */}
            </div>
            <div className="link-col-right flex flex-col text-left gap-1 uppercase">
              {/* <Link to="/inventory" className="footer-nav-links">
                Inventory
              </Link> */}
              <Link to="/about" className="footer-nav-links">
                About
              </Link>
              <Link to="/contact" className="footer-nav-links">
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div
          className="footer-col-4 flex flex-col items-start xl:items-center gap-3"
          data-aos="flip-up"
          data-aos-duration="1500"
          data-aos-delay="1000"
        >
          <p className="uppercase tracking-wider text-gray-400">
            Need more informations?
          </p>
          <button className="footer-btn bg-rose-700 py-4 px-6 rounded-full uppercase text-sm font-medium hover:text-rose-500 hover:bg-rose-50 duration-300">
            + New Message
          </button>
          <p className="font-medium text-lg">info@mazzakagro.com</p>
        </div>
      </div>

      <p
        className="copyright border-t border-gray-500/40 pt-20 text-gray-400 wrapper text-center uppercase"
        data-aos="zoom-in-up"
        data-aos-duration="800"
        data-aos-delay="1300"
      >
        &copy; {new Date().getFullYear()} Mazzak Agro. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
