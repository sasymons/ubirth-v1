import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const Reviews = () => {
  return (
    <div id="reviews" className="bg-[#FBB9D3]">
      <div className="text-white text-2xl md:text-4xl py-6 text-center">
        What Our Clients Say...
      </div>
      <div className="grid md:grid-cols-3 gap-6 px-2 py-2">
        <div className="bg-[#FBB9D3] shadow-xl rounded px-4 py-2">
          <p className="flex py-2 text-white text-lg">
            <ImQuotesLeft size={30} /> &nbsp; Sandra was so thorough and clear
          </p>
          <p className="flex items-center text-white">
            We recently had Sandra come to our house for a private class
            following a recommendation from our midwife. Sandra was so thorough
            and clear in the information she provided to us, which she had
            tailored to our specific needs. We had plenty of time and space to
            ask any questions we needed. We both feel much more prepared and
            well informed thanks to Sandra.
          </p>
          <p className="flex items-center text-white py-2 text-sm">Sarah</p>
        </div>
        <div className="bg-[#FBB9D3] shadow-xl rounded px-4 py-2">
          <p className="flex py-2 text-white text-lg">
            <ImQuotesLeft size={30} /> &nbsp; She really puts you at ease
          </p>
          <p className="flex items-center text-white">
            Sandra is so kind and friendly! Her one-on-one class is very
            thorough and comforting. She really puts you at ease during what can
            be a very stressful time. I highly recommend her services.
          </p>
          <p className="flex items-center text-white py-2 text-sm">Pamela</p>
        </div>
        <div className="bg-[#FBB9D3] shadow-xl rounded px-4 py-2">
          <p className="flex py-2 text-white text-lg">
            <ImQuotesLeft size={30} /> &nbsp; Sandra took the time to answer our
            questions
          </p>
          <p className="flex items-center text-white">
            Sandra ran a phenomenal private class for my husband and I. We love
            that it was very informative and evidence-based. Sandra took the
            time to answer our questions in a detailed manner and tailored the
            class to us. After the session, I left feeling more relaxed about
            the labour process. Would highly recommend Sandra's antenatal class
            to any first time mum!
          </p>
          <p className="flex items-center text-white py-2 text-sm">Elpiniki</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
