import React from "react";
import { CgMail } from "react-icons/cg/index";
import './Info.css';

const Info = () => {
  return (
    <>
      <div className="info-outer">
        <p className="info-name">Vundavilli K Kumar</p>
        <a
          href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=vundavillikkumar@gmail.com"
          className="info-mail"
          target="_blank"
        >
         <p className="info-icon" title="Gmail"><CgMail /></p> vundavillikkumar@gmail.com
        </a>
      </div>
    </>
  );
};

export default Info;
