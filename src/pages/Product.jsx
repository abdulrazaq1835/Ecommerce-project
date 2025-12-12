import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProduct from "../components/RelatedProduct";

const Product = () => {
  const { productId } = useParams();
  const { products,addToCart, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        console.log(item);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="ml-3 border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
  
        <div className="flex flex-1 flex-col-reverse gap-3 sm:flex-row">
          <div className="flex flex-col justify-between overflow-x-auto sm:overflow-y-scroll sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                alt=""
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>

          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>


        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-3">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} className="w-3.5" alt="star" />
            <img src={assets.star_icon} className="w-3.5" alt="star" />
            <img src={assets.star_icon} className="w-3.5" alt="star" />
            <img src={assets.star_dull_icon} className="w-3.5" alt="star" />
            <img src={assets.star_dull_icon} className="w-3.5" alt="star" />
            <p className="pl-2">(122)</p>
          </div>

          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 md:w-4/5">{productData.description}</p>
          
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex flex-wrap gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500 bg-slate-200" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button onClick={()=>addToCart({itemId: productData._id, size: size})}
            className="bg-black text-white px-5 py-3 text-sm 
             w-40 sm:w-36 md:w-32 
             active:bg-gray-700 cursor-pointer rounded"
          >
            Add To Cart
          </button>

          <hr className="mt-5 sm:w-4/5" />
          <div className="text-sm text-gray-600 flex flex-col gap-1 mt-5">
            <p>100% ORIGINAL</p>
            <p>Cash On Delivery Is Available</p>
            <p>Easy Return on 7 days</p>
          </div>
        </div>
      </div>

      
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">DESCRIPTION</b>
          <p className="border px-5 py-3 text-sm">REVIEWS (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            An e-commerce website is an online platform that facilitates buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals showcase their products, interact with customers, and conduct transactions without the need for a physical presence.
          </p>
          <p>
            E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.
          </p>
        </div>
      </div>
    {/* reltedproducts */}

    <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;