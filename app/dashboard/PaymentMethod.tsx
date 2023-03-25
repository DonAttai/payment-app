import React from "react";

const PaymentMethod = () => {
  return (
    <div className="flex flex-col h-32 w-60 bg-gray-900 text-white rounded-md justify-center  px-4 gap-3">
      <h4 className="text-sm">Gas Cashback</h4>
      <p className="self-end">**** **** **** *234</p>
      <p className="text-xs flex justify-between">
        <span>Exp 01/27</span>
        <span>VISA</span>
      </p>
    </div>
  );
};

export default PaymentMethod;
