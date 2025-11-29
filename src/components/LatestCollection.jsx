import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = ({ text1, text2 }) => {
  const [latestproducts, setLatestProducts] = useState([]);


  const { products } = useContext(ShopContext);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl ">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-700">
          Discover our latest collection designed to bring fresh style and
          premium comfort every day
        </p>
      </div>

      {/* render product */}

<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 py-5">
  {
    latestproducts.map((item,index)=>(
      <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
    ))
   }
</div>
   
    </div>
  );
};

export default LatestCollection;
