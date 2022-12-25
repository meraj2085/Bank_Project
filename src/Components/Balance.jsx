import React from "react";
import { useSelector } from "react-redux";

const Balance = () => {
  const account = useSelector((state) => state.balance);
  
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-4xl font-bold">Balance</h2>
          <p className="text-2xl font-semibold">$ {account}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
