import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillInstagram, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
import { FaGitSquare } from "react-icons/fa";
import { Context } from "../../main";

const Footer = () => {
  const isDashboard = useLocation("http://localhost:5173/dashboard");
  const { mode, setMode } = useContext(Context);

  return (
    <footer
      className={
        isDashboard.pathname === "/dashboard"
          ? "hideFooter"
          : mode === "light"
          ? "light-footer"
          : "dark-footer"
      }>
      <div className="container">
        <Link to="/" className="flex items-center">
          <img
            src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706009704/Frokerassets/black-logo-frokerr-copy-10_pwpomg.jpg"
            className="mr-3 h-12"
            alt="Log"
          />
        </Link>
        <div className="quick_links">
          <h3>Quick Links</h3>
          <ul>
            <Link to={"/"}>Home</Link>
            <Link to={"/blogs"}>Blogs</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/dashboard"}>Dashboard</Link>
          </ul>
        </div>
        <div className="display-flex text-orange-700">
          <h3>About</h3>
          <p>
            <span>Location:</span>Whitefield, Bengaluru, 560066
          </p>
          <p>
            <span>Email:</span>support@froker.in
          </p>
          <div className="links">
            <Link to={"/"} target="_blank">
              <AiFillInstagram />
            </Link>
            <Link to={"/"} target="_blank">
              <AiFillLinkedin />
            </Link>
          </div>
        </div>
        <div className="news_letter">
          <div>
            <h3>Weekly Newletter</h3>
            <p>Get blog articles and offer via email</p>
          </div>
          <div>
            <input type="text" placeholder={`Your Email`} />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <img
        src="https://www.froker.in/static/media/base.3f5339217a654a163327574449f303a4.svg"
        className="mr-3 h-12"
        alt="Log"
      />
    </footer>
  );
};

export default Footer;
