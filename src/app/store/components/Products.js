"use client";
import React, { useState } from "react";
import Image from "next/image";

import productsData from "../../Data/Product.json";

const priceAfterDiscount = (mainPrice, discountPercentage) => {
  const discountAmount = (mainPrice * discountPercentage) / 100;

  return mainPrice - discountAmount;
};

const updatedProductList = productsData.map((product) => ({
  ...product,
  price: priceAfterDiscount(product.mainPrice, product.discount),
}));

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Calculate the index of the first and last item for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = updatedProductList.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Function to handle page change
  const handlePageChange = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePageBack = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="main w-full h-[1128px] ">
      <div className="sub-main max-h-[1032px] grid grid-cols-4 gap-y-12 justify-items-center ">
        {currentItems.map((item) => (
          <div
            key={item.id}
            className="product-card max-w-[277px] max-h-[484px] flex flex-col justify-between border rounded-xl p-3"
          >
            <div>
              <Image
                className="bg-[#F2F2F2] rounded-lg p-2"
                src={item.imgUrl}
                alt={item.name}
                width={1440}
                height={1440}
              />
            </div>
            <div>
              <span className="text-[#343434] font-bold text-[18px]">
                {item.name}
              </span>
              <div className="flex gap-3">
                <span className="text-[#343434] font-bold text-[18px]">
                  €{item.price}
                </span>
                <s className="text-[#ABABAB] font-semibold text-[18px]">
                  €{item.mainPrice}
                </s>
                <span className="text-[#B92E2E] font-bold text-[18px]">
                  {item.discount} %OFF
                </span>
              </div>
              <span className="text-[#838383] text-[14px]">
                {item.description}
              </span>
            </div>
            <div>
              <button
                className="bg-black h-[42px] max-w-[277px] w-full rounded-lg flex items-center justify-center gap-3"
                onClick={() => console.log("Added to cart")}
              >
                <Image
                  src="/assets/icons/AddedW.svg"
                  className="min-w-[18px] w-[18px] min-h-[18px] h-[18px]"
                  alt="Add to cart"
                  width={1440}
                  height={1440}
                />
                <span className="text-white font-medium">Add to cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-end justify-center h-[96px] gap-3">
        <button
          onClick={handlePageBack}
          className="bg-blue-500 text-white rounded p-2"
        >
          Back
        </button>
        <button
          onClick={handlePageChange}
          className="bg-blue-500 text-white rounded p-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
