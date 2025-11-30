import React from "react";
import { assets } from "../assets/assets";
const OurPolicy = () => {
  return (
    <div className=" flex flex-col  sm:flex-row justify-around gap-12  sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-800.">
      <div>
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5" />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-600">We Offer Exchage Policy</p>
      </div>

      <div>
        <img src={assets.quality_icon} className="w-12 m-auto mb-5" />
        <p className="font-semibold">Return Policy</p>
        <p className="text-gray-600">Easy returns within 7 days, no hassle.</p>
      </div>

      <div>
        <img src={assets.support_img} className="w-12 m-auto mb-5" />
        <p className="font-semibold">Customer Support</p>
        <p className="text-gray-600">24/7 customer support available for your help.</p>
      </div>
    </div>
  );
};

export default OurPolicy;
