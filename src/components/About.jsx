import React from "react";
import ProfilePic from "../assets/ProfilePic.png";

const About = () => {
  return (
    <div id="about" className="bg-[#808080]">
      <div className="flex flex-wrap justify-between px-6 py-6">
        <div className="w-full lg:w-1/2">
          <p className="text-white text-2xl md:text-4xl py-6 text-center">
            About uBirth
          </p>
          <p className="text-white text-xl md:text-2xl py-2">Hi, I'm Sandra.</p>
          <p className="text-white py-2">
            I'm a Registered Midwife and International Board Certified Lactation
            Consultant. Originally from Ireland, where I obtained my B.Sc in
            Midwifery from University College Dublin in 2017 but I've been
            calling Sydney home since early 2020. I've been working as a midwife
            predominantly on birthing unit, with shorter periods on antenatal
            and postnatal wards. During my career I've practiced in both public
            and private hospitals, where I've gained a broad range of experience
            in caring & supporting labouring women and helping them with
            transition into motherhood.
          </p>
          <p className="text-white py-2">
            I'm extremely passionate about education and I feel like it's one of
            the best ways to empower women. I started uBirth while completing my
            masters degree in midwifery, specialising in clinical education.
            That's when I found my true calling, educating women outside of
            hospital walls and uBirth was 'born'. Since then, uBirth has grown!
            Now being able to provide an ultimate antenatal education bundle for
            expecting mums, providing you with the knowledge and confidence for
            labour, birth and beyond.
          </p>
          <p className="text-white py-2">
            I can't wait to meet you and go onto this beautiful journey with
            you,
          </p>
          <p className="text-white py-2">Your midwife,</p>
          <p className="text-white py-2"> Sandra. </p>
        </div>
        <div className="flex items-center m-auto">
          <img
            src={ProfilePic}
            alt="Sandra Profile Image"
            className="h-[300px] md:h-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
