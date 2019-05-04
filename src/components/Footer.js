import React from "react";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footerSection">
          <div className="footerSection_github">
            <a href="https://github.com/Satoshimoto">
              My github
              <i className="fab fa-github" />
            </a>
          </div>
          <div>
            <a href="http://myfolio.pl">Visit my website</a>
          </div>
          <div>
            <p>
              Created by: <a href="https://github.com/Satoshimoto">Szymon</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
