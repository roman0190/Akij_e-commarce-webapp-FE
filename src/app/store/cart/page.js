import React from "react";
import OrderView from "./components/OrderView";
import Details from "./components/Details";

const Cart = () => {
  return (
    <div className="h-screen bg-white px-[120px] flex  py-[20px] gap-[8rem]">
      <div>
        <OrderView />
      </div>
      <div>
        <Details />
      </div>
    </div>
  );
};

export default Cart;
