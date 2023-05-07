import React from "react";
import { FaRegEnvelope, FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import uBPink from "../assets/uBirthLogoPink.png";

const Footer = () => {
  return (
    <div className="w-full  bg-[#808080]  text-white py-6 px-2">
      <div
        id="contact"
        className="text-white text-2xl md:text-4xl py-2 text-center"
      >
        Contact Us
      </div>
      <div className="mx-auto grid md:grid-cols-3">
        <div>
          <p className="text-white text-center text-xl py-2 md:text-2xl md:py-1">
            Sandra Szycman
          </p>
          <p className="text-white text-center">BSc Midwifery</p>
          <p className="text-white text-center">
            Founder - Ante & Post Natal Education
          </p>
          <p className="text-white flex items-center justify-center">
            <FaPhoneAlt size={20} /> &nbsp;&nbsp; 0498 622 985
          </p>
          <p className="text-white flex items-center justify-center py-1">
            <MdLocationPin size={20} /> &nbsp;&nbsp; Randwick NSW 2031
          </p>
        </div>
        <div>
          <p className="text-white text-center text-xl py-4 md:text-2xl md:py-1">
            For all bookings and general enquiries:
          </p>
          <p className="text-white text-center">
            Please email in the first instance, and
          </p>
          <p className="text-white text-center">I will reply to you asap </p>
          <a
            className="text-white flex items-center justify-center py-2"
            href="mailto:Sandra@ubirth.com.au"
          >
            <FaRegEnvelope size={20} /> &nbsp;&nbsp; Sandra@ubirth.com.au
          </a>
        </div>
        <div>
          <p className="text-white text-center text-xl py-4 md:text-2xl md:py-1">
            Follow me on instagaram
          </p>
          <a
            className="text-white flex items-center justify-center"
            href="https://instagram.com/ubirth_"
          >
            <FaInstagram size={20} />
            &nbsp;&nbsp; uBirth_
          </a>
          <p className="flex items-center justify-center py-2">
            <img src={uBPink} alt="uBirthLogoPink" className="z-10 w-[80px]" />
          </p>
        </div>
      </div>
      <div id="contact" className="text-white text-sm py-2 text-center">
        &#169; Copyright 2023 - uBirth
      </div>
    </div>
  );
};

export default Footer;
