import React from "react";
import uBPink from "../assets/uBirthLogoPink.png";
import ANLogo from "../assets/AnteNatalLogo.png";
import BFPLogo from "../assets/BFPrepLogo.png";
import BPLogo from "../assets/BirthPlanLogo.png";

const Services = () => {
  return (
    <div id="services" className="bg-[#FBB9D3]">
      <div className="flex w-screen justify-center items-center">
        <img
          src={uBPink}
          alt="uBirthLogoPink"
          className="w-[140px] mt-[-30px] z-10 md:z-10 md:mt-[-100px] md:w-[260px] "
        />
      </div>
      <div className="flex">
        <p className="text-white text-xl md:text-2xl text-center w-[70vw] m-auto px-8 py-8 border-b-2">
          All classes are taught on a 1:1 basis, wth a midwife and lactation
          consultant, in the comfort of your own home or online via Zoom, using
          uBirth signature framework. Classes are taught based on adult learning
          principles, in a casual and relaxed manner, where you should feel
          comfortable to ask any questions you might have and try to resolve any
          worries or anxieties. All classes are women-led and centred, with
          current evidence-based information and a holistic approach and
          perception that birth is a normal, physiological event. Partners
          and/or support person are encouraged to attend all classes.
        </p>
      </div>
      <div>
        <p className="text-white text-2xl md:text-4xl text-center py-8">
          Services Offered
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-16 px-6 py-6">
        <div>
          <img src={ANLogo} alt="antenatal logo" className="h-[80px] mx-auto" />
          <p className="text-white text-xl md:text-2xl py-2 text-center">
            Antenatal Class
          </p>
          <p className="text-white py-2">
            The main aim of the antenatal class is to ease any worries or
            anxieties and provide you with knowledge so you can make informed
            decisions. The class is completely personalised to your needs and
            birth preferences. We cover multiple topics which are guided by you
            such as: signs of labour, when to go to the hospital, pain relief
            options, positions in labour, birth when things don't go as planned,
            early postpartum, baby feeding, role of the partner, relationship
            changes and mental health wellbeing. Only one couple is booked per
            day, allowing for flexibility with times and for you to ask as many
            questions, class roughly runs for 4hrs. You will also be provided
            with a 'What to Pack' checklist for your hospital bag and uBirth
            Birth Plan template. Following the class you'll have access to
            ongoing educatonal support and correspondence via email with me, as
            sometimes you might need a little bit extra help.
          </p>
          <p className="text-white text-xl md:text-2xl py-2">Cost: $450</p>
        </div>
        <div>
          <img
            src={BPLogo}
            alt="birth plan logo"
            className="h-[80px] mx-auto"
          />

          <p className="text-white text-xl md:text-2xl py-2 text-center">
            Birth Plan Preparation Class
          </p>
          <p className="text-white py-2">
            This class can be booked either as a stand alone class (2hrs) or add
            on to your antenatal class (1.5hrs). During the class, we sit
            together and build on the knowledge, either gained in the uBirth
            antenatal class or perhaps a different course you've done and really
            focus on what's important for you and/or your partner. Also if this
            isn't your first pregnancy, we can build on your previous and
            prepare your birth plan based on that. Is having a water birth
            something you would really like? Or are dimmed lights something that
            helps you feel relaxed and would you like that option? You will be
            provided with uBirth Birth Plan template, where on one side you can
            tick your labour, birth and postpartum preferences. On the reverse
            side there's free text where you can write about your journey so far
            and anything extra you'd like. Ultimately it's YOUR birth plan and
            you can write as much or little as you want.
          </p>
          <p className="text-white text-xl md:text-2xl py-2">
            Cost: $200 / $150
          </p>
        </div>
        <div>
          <img
            src={BFPLogo}
            alt="breastfeeding preparation logo"
            className="h-[80px] mx-auto"
          />

          <p className="text-white text-xl md:text-2xl py-2 text-center">
            Antenatal Breastfeeding Preparation Class
          </p>
          <p className="text-white py-2">
            In this class we dive in beyond breastfeeding basics which are
            covered in antenatal classes. This is a stand alone class only, as
            it contains a lot of information and lasts approx 3-4hrs.
            Breastfeeding is an extensive topic and involves way more than just
            'how to feed your baby'. This class will provide you with knowledge,
            tips and practical skills. Afterwards you should feel more confident
            and prepared for what's to come. We will cover a broad range of
            topics including: why to breastfeed?, milk production, hormones
            involved, antenatal hand expressing, skin-to-skin and the golden
            hour, reading your baby and their hunger cues, positioning and
            attachment, pumping, role of the partner and more!
          </p>
          <p className="text-white text-xl md:text-2xl py-2">Cost: $350</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
