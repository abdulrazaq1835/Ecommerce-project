import React from "react";

const SubscribeForm = () => {

  const handlersubmit= (e)=>{
    e.preventDefault(e)
    console.log("submited")
  }
  return (
    <div className="text-center">
      <p className="font-2xl prata-regular font-medium">
        Subscribe today and save extra 20% instantly.
      </p>
      <p className="text-gray-700 font-bold">
        Hurry! Special discounts available for new customers.
      </p>

      <form onSubmit={handlersubmit} className="w-full sm:w-1/2 flex items-center  gap-3   mx-auto my-6 border pl-3">
        <input className="w-full sm:flex-1 outline-none" type="email" placeholder="Enter Your Email" />
        <button className="bg-black text-white  text-xs px-10  py-4 ">Subscribe</button>
      </form>
    </div>
  );
};

export default SubscribeForm;
