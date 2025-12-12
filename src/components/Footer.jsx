import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr]  gap-14 my-10 mt-10 text-sm">
        <div>
          <img src={assets.logo} className="w-30 mb-5" />
          <p className="w-full md:w-2/4  text-gray-950">
            Welcome to FOREVER STORE, your one-stop shop for premium products at
            affordable prices. Explore our range of electronics, fashion,
            accessories, and more. We are committed to quality, customer
            satisfaction, and seamless delivery. Shop securely, enjoy exclusive
            offers, and experience smooth online shopping like never before.
          </p>
        </div>
        <div> 
          <p className="text-xl font-medium mb-5 ">FOREVER</p>
          <ul className="flex flex-col gap-1 text-gray-700">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>

            {/* herlooooo */}
          </ul>
        </div>


        <div>
            <p className="text-xl font-medium mb-5">Get In Touch</p>
            <ul className="flex flex-col gap-1 text-gray-700">
             <li>+91-21-646546</li>
             <li>forever@gmail.com</li>
            </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className=" sm:text-sm text-center mb-6 py-5">© 2025 YourStore. All rights reserved.</p>
        <hr />
      </div>
    </div>
  );
};

export default Footer;
