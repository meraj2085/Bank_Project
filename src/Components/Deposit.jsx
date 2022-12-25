import React from "react";
import { useSelector } from "react-redux";

const Deposit = () => {
  const deposit = useSelector((state) => state.deposit);
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-4xl font-bold">Deposit</h2>
          <p className="text-2xl font-semibold">$ {deposit}</p>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
