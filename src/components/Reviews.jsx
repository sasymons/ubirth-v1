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
            <ImQuotesLeft size={30} /> &nbsp; Lorem ipsum dolor sit amet
            consectetur adipisicing elit
          </p>
          <p className="flex items-center text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            laborum voluptate eveniet beatae consequatur? Possimus saepe
          </p>
          <p className="flex items-center text-white py-2 text-sm">
            Some Person
          </p>
        </div>
        <div className="bg-[#FBB9D3] shadow-xl rounded px-4 py-2">
          <p className="flex py-2 text-white text-lg">
            <ImQuotesLeft size={30} /> &nbsp; Lorem ipsum dolor sit amet
            consectetur adipisicing elit
          </p>
          <p className="flex items-center text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            laborum voluptate eveniet beatae consequatur? Possimus saepe
            obcaecati aliquid labore, assumenda fugiat illum quidem! Sint
            eligendi voluptatum corrupti nesciunt labore possimus.
          </p>
          <p className="flex items-center text-white py-2 text-sm">
            Some Person
          </p>
        </div>
        <div className="bg-[#FBB9D3] shadow-xl rounded px-4 py-2">
          <p className="flex py-2 text-white text-lg">
            <ImQuotesLeft size={30} /> &nbsp; Lorem ipsum dolor sit amet
            consectetur adipisicing elit
          </p>
          <p className="flex items-center text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            laborum voluptate eveniet beatae consequatur? Possimus saepe
            obcaecati aliquid labore, assumenda fugiat illum quidem! Sint
            eligendi voluptatum corrupti nesciunt labore possimus.
          </p>
          <p className="flex items-center text-white py-2 text-sm">
            Some Person
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
