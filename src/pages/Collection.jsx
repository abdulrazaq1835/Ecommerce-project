import React, { useContext, useEffect, useState, useRef } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import { gsap } from "gsap";

const Collection = () => {
  const [showfilter, setShowFilter] = useState(false);
  const [filteredProducts, setfilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setsubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const filterRef = useRef(null);
  const titleRef = useRef(null);
  const productsRef = useRef([]);
  const sortRef = useRef(null);

  const { products, search, showSearch } = useContext(ShopContext);

  useEffect(() => {
    gsap.from(titleRef.current, {
      duration: 0.8,
      y: -30,
      opacity: 0,
      ease: "power2.out",
    });

    gsap.from(sortRef.current, {
      duration: 0.6,
      x: 50,
      opacity: 0,
      delay: 0.2,
      ease: "power2.out",
    });

    gsap.from(filterRef.current, {
      duration: 0.8,
      x: -50,
      opacity: 0,
      delay: 0.1,
      ease: "power2.out",
    });
  }, []);

  useEffect(() => {
    if (productsRef.current.length > 0) {
      gsap.from(productsRef.current, {
        duration: 0.6,
        y: 50,
        opacity: 0,
        stagger: 0.08,
        ease: "power2.out",
        clearProps: "all",
      });
    }
  }, [filteredProducts]);

  const handleFilterToggle = () => {
    setShowFilter(!showfilter);

    if (!showfilter) {
      gsap.from(".filter-content", {
        duration: 0.4,
        height: 0,
        opacity: 0,
        ease: "power2.out",
      });
    }
  };

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const togglesubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setsubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setsubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();
    if (search && showSearch) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setfilterProducts(productsCopy);
  };

  const sortproducts = () => {
    const filterpcopy = filteredProducts.slice();

    switch (sortType) {
      case "low-high":
        setfilterProducts(filterpcopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setfilterProducts(filterpcopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    sortproducts();
  }, [sortType]);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  return (
    <div className="flex flex-col ml-3 sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      <div ref={filterRef} className="min-w-60">
        <p
          onClick={handleFilterToggle}
          className="text-gray-700 my-2 text-xl cursor-pointer items-center flex gap-2 hover:text-gray-900 transition-colors"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden transition-transform duration-300 ${
              showfilter ? "rotate-90" : ""
            }`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        {/* Category Filter */}
        <div
          className={`filter-content border border-gray-300 pl-5 py-3 mt-3 ${
            showfilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">Categories</p>
          <div className="flex flex-col gap-2 text-gray-600 font-light">
            <p className="flex gap-3">
              <input
                className="w-3 cursor-pointer"
                type="checkbox"
                value={"Men"}
                onChange={toggleCategory}
              />
              Men
            </p>
            <p className="flex gap-3">
              <input
                className="w-3 cursor-pointer"
                type="checkbox"
                value={"Women"}
                onChange={toggleCategory}
              />
              Women
            </p>
            <p className="flex gap-3">
              <input
                className="w-3 cursor-pointer"
                type="checkbox"
                value={"Kids"}
                onChange={toggleCategory}
              />
              Kids
            </p>
          </div>
        </div>

        <div
          className={`filter-content border border-gray-300 pl-5 py-3 my-5 ${
            showfilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-gray-600 font-light">
            <p className="flex gap-3">
              <input
                className="w-3 cursor-pointer"
                type="checkbox"
                value={"Topwear"}
                onChange={togglesubCategory}
              />
              Topwear
            </p>
            <p className="flex gap-3">
              <input
                className="w-3 cursor-pointer"
                type="checkbox"
                value={"Bottomwear"}
                onChange={togglesubCategory}
              />
              Bottomwear
            </p>
            <p className="flex gap-3">
              <input
                className="w-3 cursor-pointer"
                type="checkbox"
                value={"Winterwear"}
                onChange={togglesubCategory}
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Products */}
      <div className="flex-1">
        <div className="sm:text-2xl flex justify-between text-base mb-3">
          <div ref={titleRef}>
            <Title text1={"ALL"} text2={"COLLECTIONS"} />
          </div>

          {/* Sort Dropdown */}
          <select
            ref={sortRef}
            onChange={(e) => setSortType(e.target.value)}
            className="border-gray-300 text-sm px-2 border-2 mr-2 cursor-pointer hover:border-gray-400 transition-colors"
          >
            <option value={"relevant"}>Sort by: Relevant</option>
            <option value={"low-high"}>Sort by: Low to High</option>
            <option value={"high-low"}>Sort by: High to Low</option>
          </select>
        </div>

        {/* Display Products */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filteredProducts.map((item, index) => (
            <div key={index} ref={(el) => (productsRef.current[index] = el)}>
              <ProductItem
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
