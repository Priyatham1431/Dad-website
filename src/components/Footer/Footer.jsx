import React from "react";
import "./Footer.css";
import { SiReact } from "react-icons/si/index";
import { CgMail } from "react-icons/cg/index";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <p className="first">&copy; 2021 Kumar</p>
        <a
          href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=vundavillikkumar@gmail.com"
          className="second"
          target="_blank"
          title="Gmail"
        >
          <CgMail />
        </a>
        <p className="end">
          Made with &nbsp;
          <p className="react-textj" title="React">
            <SiReact />
          </p>
        </p>
      </div>
    </>
  );
};

export default Footer;
