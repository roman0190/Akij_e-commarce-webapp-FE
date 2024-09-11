import React from "react";

const Details = () => {
  return (
    <div className="order-view w-[440px]  flex flex-col gap-8 ">
      <div>
        <span className=" font-medium text-[28px] font-sans text-black">
          Oder details
        </span>
      </div>
      <div className="flex flex-col">
        <div className="details-price w-[440px] border-[1px] border-[#DEDEDE] bg-[#FAFAFA] rounded-lg px-5 ">
          <div className="flex flex-col mt-5 gap-2 text-[18px] text-[#656565] font-extralight">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>€ 1071.00</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Tax</span>
              <span>-€</span>
            </div>
            <hr />
            <div className="flex justify-between my-5 font-bold text-black">
              <span>Total</span>
              <span>€ 1071.00</span>
            </div>
          </div>
        </div>

        <button className=" bg-black h-[56px] mt-5 rounded-lg">Go to Checkout</button>
      </div>
    </div>
  );
};

export default Details;
